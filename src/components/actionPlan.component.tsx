import React from 'react';
import { ActionPlanProps } from '../types/types';
import {
  calculateCareerVolume,
  calculateMonthlySales,
  calculateMonthlyPresentations,
  calculateProspects,
  calculateTotalToSell,
  calculateWeeklyPresentations,
  formatDate,
} from '../utils/utils';
import { Download } from 'lucide-react';
import { COMMISION_RATES, CONVERSION_RATES } from '../lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.ui';
import { Badge, Dropdown } from '../ui/dropdown.ui';

const ActionPlan: React.FC<ActionPlanProps> = ({ userData }) => {
  const formattedDate = formatDate(new Date());
  const actualRate =
    COMMISION_RATES.find((r) => r.level === userData.actualCommission) ||
    COMMISION_RATES[0];
  const salesNeeded = calculateTotalToSell(
    userData.targetEarnings,
    actualRate?.level
  );
  const volumeInCareer = calculateCareerVolume(salesNeeded, userData.usdValue);
  const monthlySales = calculateMonthlySales(
    volumeInCareer,
    userData.averageTicket
  );
  const prospectsNeeded = Math.floor(calculateProspects(monthlySales));
  const monthlyPresentations = calculateMonthlyPresentations(
    monthlySales,
    CONVERSION_RATES[userData.actualCommission as keyof typeof CONVERSION_RATES]
  );
  const weeklyPresentations =
    calculateWeeklyPresentations(monthlyPresentations);

  return (
    <div className='space-y-5'>
      <div className='flex flex-col items-center justify-between'>
        <h2 className='text-xl font-bold text-primary-700 mb-2'>
          Tu plan de acción desde
        </h2>
        <span className='text-sm font-medium bg-gray-100 px-2 py-1 rounded'>
          {formattedDate}
        </span>
      </div>

      <div className='grid grid-cols-1 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>Nuevos Datos a Prospectar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-base font-medium'>{prospectsNeeded}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mínimo Presentaciones por Mes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-base font-medium'>
              {Math.floor(monthlyPresentations)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mínimo Presentaciones por Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-base font-medium'>{weeklyPresentations}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Capacitación Mínima Sugerida</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-base font-medium'>20hs semanales</p>
            <p className='text-sm'>Entre Campus Virtual y Oficina</p>
          </CardContent>
        </Card>
      </div>
      <div className='mt-6'>
        <div className='flex items-center gap-2 mb-2'>
          <h3 className='font-medium'>
            Con distintos porcentajes de comision:
          </h3>
        </div>

        <div className='space-y-2'>
          {COMMISION_RATES.map((rate) => {
            const actualRate =
              COMMISION_RATES.find((r) => r.level === rate.level) ||
              COMMISION_RATES[0];

            const salesNeeded = calculateTotalToSell(
              userData.targetEarnings,
              actualRate?.level
            );
            const volumeInCareer = calculateCareerVolume(
              salesNeeded,
              userData.usdValue
            );
            const monthlySales = calculateMonthlySales(
              volumeInCareer,
              userData.averageTicket
            );
            const prospectsNeeded = Math.floor(
              calculateProspects(monthlySales)
            );
            const monthlyPresentations = Math.round(
              calculateMonthlyPresentations(
                monthlySales,
                CONVERSION_RATES[rate.level as keyof typeof CONVERSION_RATES]
              )
            );
            const weeklyPresentations =
              calculateWeeklyPresentations(monthlyPresentations);

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
                  <div className='text-gray-500'>
                    Nuevos datos a prospectar:
                  </div>
                  <div className='text-right font-semibold'>
                    {prospectsNeeded}
                  </div>
                  <div className='text-gray-500'>
                    Mínimo Presentaciones por Mes:
                  </div>
                  <div className='text-right font-semibold'>
                    {monthlyPresentations}
                  </div>
                  <div className='text-gray-500'>
                    Mínimo Presentaciones por Semana:
                  </div>
                  <div className='text-right font-semibold'>
                    {weeklyPresentations}
                  </div>
                </div>
              </Dropdown>
            );
          })}
        </div>
      </div>
      <button
        // onClick={handleShare}
        className='w-full h-12 text-base font-medium mt-4 bg-[#215a6c] text-white rounded-md hover:bg-[#1a4857] focus:outline-none focus:ring-2 focus:ring-[#215a6c] focus:ring-offset-2 flex items-center justify-center'
      >
        <Download className='mr-2' />
        Descargar mi Plan de Acción
      </button>
    </div>
  );
};

export default ActionPlan;
