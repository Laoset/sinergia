import { FACTORS } from '../lib/constants';
import {
  formatCurrency,
  calculateCareerVolume,
  calculateMonthlyPresentations,
  calculateMonthlySales,
  calculateNetEarnings,
  calculateProspects,
  calculateTotalToSell,
  calculateWeeklyPresentations,
  formatDate,
  roundBankers,
} from '../utils/operations.utils';
describe('formatCurrency', () => {
  it('should format a number as currency in ARS', () => {
    const value = 1000;
    const formatted = formatCurrency(value);
    const normalizedFormatted = formatted.replace(/\s+/g, ' ').trim();
    expect(normalizedFormatted).toEqual('$ 1.000');
  });

  it('should handle zero value', () => {
    const value = 0;
    const formatted = formatCurrency(value);
    const normalizedFormatted = formatted.replace(/\s+/g, ' ').trim();
    expect(normalizedFormatted).toEqual('$ 0');
  });

  it('should handle large values', () => {
    const value = 1000000;
    const formatted = formatCurrency(value);
    const normalizedFormatted = formatted.replace(/\s+/g, ' ').trim();
    expect(normalizedFormatted).toEqual('$ 1.000.000');
  });
});
describe('formatDate', () => {
  it('should handle the current date', () => {
    const date = new Date();
    const formatted = formatDate(date);
    expect(formatted).toContain('de');
  });
});
describe('roundBankers', () => {
  it('should round a number correctly', () => {
    expect(roundBankers(1.5)).toBe(1);
    expect(roundBankers(2.5)).toBe(2);
    expect(roundBankers(3.2)).toBe(3);
    expect(roundBankers(4.8)).toBe(5);
  });

  it('should handle numbers with no decimals', () => {
    expect(roundBankers(10)).toBe(10);
  });
});
describe('calculateNetEarnings', () => {
  it('should calculate net earnings with commission rate 0.4', () => {
    const earnings = calculateNetEarnings(10000, 0.4);
    expect(earnings).toBe(4000);
  });

  it('should calculate net earnings with a different commission rate', () => {
    const earnings = calculateNetEarnings(10000, 0.1);
    expect(Math.round(earnings)).toBeCloseTo(826);
  });
});
describe('calculateTotalToSell', () => {
  it('should calculate total sales to reach target earnings', () => {
    const earnings = calculateTotalToSell(1000, '10%');
    expect(earnings).toBeCloseTo(1210 * FACTORS['10%']);
  });

  it('should use default factor if commissionLevel is not found', () => {
    const earnings = calculateTotalToSell(1000, 'nonexistentLevel');
    expect(earnings).toBeCloseTo(1210 * 10);
  });
});
describe('calculateCareerVolume', () => {
  it('should calculate the career volume correctly', () => {
    const volume = calculateCareerVolume(1210, 100);
    expect(volume).toBe(12.1);
  });
});
describe('calculateMonthlySales', () => {
  it('should calculate the number of monthly sales', () => {
    const sales = calculateMonthlySales(12.1, 100);
    expect(sales).toBeCloseTo(0.121);
  });
});
describe('calculateProspects', () => {
  it('should calculate the number of prospects correctly', () => {
    const prospects = calculateProspects(10);
    expect(prospects).toBe(60);
  });
});
describe('calculateMonthlyPresentations', () => {
  it('should calculate the number of monthly presentations', () => {
    const presentations = calculateMonthlyPresentations(100, 2);
    expect(presentations).toBe(50);
  });
});
describe('calculateWeeklyPresentations', () => {
  it('should calculate weekly presentations correctly', () => {
    const weeklyPresentations = calculateWeeklyPresentations(50);
    expect(weeklyPresentations).toBe(13);
  });
});
