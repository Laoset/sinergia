import { FACTORS, NO_IVA } from '../lib/constants';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);
}
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
export function roundBankers(num: number) {
  const floor = Math.floor(num);
  const decimal = num - floor;

  if (decimal === 0.5) {
    return floor;
  }

  return Math.round(num);
}

// Ganancia Neta diaria (NO IVA)
export function calculateNetEarnings(
  productPrice: number,
  commissionRate: number
) {
  if (commissionRate === 0.4) return productPrice * 0.4;
  return (productPrice / NO_IVA) * commissionRate;
}

// Ventas necesarias para alcanzar el objetivo de ganancias (en DINERO Pesos)
export function calculateTotalToSell(
  targetEarnings: number,
  commissionLevel: string
) {
  return (
    targetEarnings *
    1.21 *
    (FACTORS[commissionLevel as keyof typeof FACTORS] || 10)
  );
}

// Volumen de Carrera (en USD)
export function calculateCareerVolume(totalToSell: number, usdValue: number) {
  return totalToSell / usdValue;
}

// Ventas mensuales (Cantidad)
export function calculateMonthlySales(
  careerVolume: number,
  ticketAverage: number
) {
  return careerVolume / ticketAverage;
}

// Prospectos necesarios para alcanzar el objetivo de ventas
export function calculateProspects(salesNeeded: number) {
  return salesNeeded * 6;
}

// Presentaciones necesarias para alcanzar el objetivo de prospectos
export function calculateMonthlyPresentations(
  salesNeeded: number,
  presentationRate: number
) {
  return salesNeeded / presentationRate;
}

// Presentaciones semanales
export function calculateWeeklyPresentations(monthlyPresentations: number) {
  return roundBankers(monthlyPresentations / 4 + 1);
}
