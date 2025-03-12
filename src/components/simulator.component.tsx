import React from 'react';
import { CommissionSimulatorProps } from '../types/generics.types';
import {
  calculateCareerVolume,
  calculateMonthlySales,
  calculateNetEarnings,
  calculateTotalToSell,
  formatCurrency,
} from '../utils/operations.utils';
import { COMMISION_RATES, PRODUCTS } from '../lib/constants';
import Button from '../ui/button.ui';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.ui';
import { Badge, Dropdown } from '../ui/dropdown.ui';

const Simulator: React.FC<CommissionSimulatorProps> = ({
  userData,
  onContinue,
}) => {
  const selectedProduct = PRODUCTS.find(
    (p) => p.id === userData?.selectedProduct?.id
  );
  const productPrice = selectedProduct ? selectedProduct.value : 0;
  const actualRate = COMMISION_RATES.find(
    (r) => r.level === userData.actualCommission
  );
  const netEarnings = Math.round(
    calculateNetEarnings(productPrice, actualRate?.rate || 0)
  );

  return (
    <div className='space-y-5'>
      <div>
        <h2 className='text-xl font-bold text-primary-700 mb-2'>
          Simulador de Comisiones
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <Card>
          <CardHeader>
            <CardTitle>Producto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='bg-blue-500 text-white rounded-md text-center font-bold py-1.5 mb-2 '>
              {userData?.selectedProduct?.name || 'No seleccionado'}
            </div>
            <p className='text-sm'>
              Valor:{' '}
              <span className='font-bold'>{formatCurrency(productPrice)}</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tu Ganancia Neta Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-base font-medium'>
              {formatCurrency(netEarnings)}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='mt-6'>
        <div className='flex items-center gap-2 mb-2'>
          <h3 className='font-medium'>
            Para alcanzar el objetivo de ganancias:
          </h3>
        </div>

        <div className='space-y-2'>
          {COMMISION_RATES.map((rate) => {
            const salesNeeded = calculateTotalToSell(
              userData.targetEarnings,
              rate.level
            );
            const volumeInCareer = calculateCareerVolume(
              salesNeeded,
              userData.usdValue
            );
            const monthlySales = Math.round(
              calculateMonthlySales(volumeInCareer, userData.averageTicket)
            );

            const isCurrentLevel = rate.level === userData.actualCommission;

            return (
              <Dropdown
                key={rate.level}
                title={
                  <span className='text-sm font-medium'>{rate.level}</span>
                }
                isHighlighted={isCurrentLevel}
                defaultExpanded={isCurrentLevel}
                badge={isCurrentLevel ? <Badge>Actual</Badge> : undefined}
              >
                <div className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm'>
                  <div className='text-gray-500'>Tengo que vender:</div>
                  <div className='text-right font-semibold'>
                    {formatCurrency(salesNeeded)}
                  </div>
                  <div className='text-gray-500'>Volumen de Carrera:</div>
                  <div className='text-right font-semibold'>
                    {formatCurrency(volumeInCareer)} usd
                  </div>
                  <div className='text-gray-500'>Total Ventas mensuales:</div>
                  <div className='text-right font-semibold'>{monthlySales}</div>
                </div>
              </Dropdown>
            );
          })}
        </div>
      </div>
      <Button type='button' callback={onContinue}>
        Ver Plan de Acción
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Simulator;
