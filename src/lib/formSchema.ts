import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Debe ingresar un nombre válido'),
  month: z.string().min(3, 'Debe seleccionar un mes'),
  averageTicket: z.number().min(1, 'El ticket promedio debe ser mayor a 0'),
  usdValue: z.number().min(1, 'El valor USD debe ser mayor a 0'),
  selectedProduct: z
    .object({
      id: z.string(),
      name: z.string(),
      value: z.number(),
    })
    .nullable()
    .refine((value) => value !== null, 'Debe seleccionar un producto'),
  targetEarnings: z
    .number()
    .min(1, 'El objetivo de ganancias debe ser mayor a 0'),
  actualCommission: z
    .string()
    .refine((value) => value !== '', 'Debe seleccionar un nivel de comisión'),
});
