import React, { useState } from 'react';
import { UserData, UserFormProps } from '../types/generics.types';
import { COMMISION_LEVELS, MONTHS, PRODUCTS } from '../lib/constants';
import Select from '../ui/select.ui';
import InputField from '../ui/formInput.ui';
import Button from '../ui/button.ui';
import { formSchema } from '../lib/formSchema';

const UserForm = ({ userData, onSubmit }: UserFormProps) => {
  const [formData, setFormData] = useState<UserData>(userData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = formSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    onSubmit(formData);
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSelectProductChange = (name: string, value: string) => {
    const findProduct = PRODUCTS.find((product) => product.id === value);

    setFormData({
      ...formData,
      selectedProduct: findProduct || null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <div className='space-y-4'>
        <div className='space-y-4'>
          <InputField
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Ingrese su nombre'
            label='Nombre'
            error={errors.name}
          />

          <Select
            id='month'
            label='Mes'
            options={MONTHS.map((month) => ({ value: month, label: month }))}
            value={formData.month}
            onChange={(value) => handleSelectChange('month', value)}
            placeholder='Seleccione un mes'
          />

          <InputField
            id='averageTicket'
            name='averageTicket'
            type='number'
            value={formData.averageTicket}
            onChange={handleInputChange}
            label='Mi Ticket Promedio en USD'
            error={errors.averageTicket}
          />

          <InputField
            id='usdValue'
            name='usdValue'
            type='number'
            value={formData.usdValue}
            onChange={handleInputChange}
            label='Valor USD'
            error={errors.usdValue}
          />

          <Select
            id='selectedProduct'
            label='Seleccione un Producto'
            options={PRODUCTS.map((product) => ({
              value: product.id,
              label: `${product.name} - $${product.value.toLocaleString()}`,
            }))}
            value={formData.selectedProduct?.id || ''}
            onChange={(value) =>
              handleSelectProductChange('selectedProduct', value)
            }
            placeholder='Seleccione un producto'
            error={errors.selectedProduct}
          />

          <InputField
            id='targetEarnings'
            name='targetEarnings'
            type='number'
            value={formData.targetEarnings}
            onChange={handleInputChange}
            label='¿Cuánto quiero ganar este mes?'
            error={errors.targetEarnings}
          />
          <Select
            id='actualCommission'
            label='Comisión actual'
            options={COMMISION_LEVELS.map((commision) => ({
              value: commision,
              label: commision,
            }))}
            value={formData.actualCommission}
            onChange={(value) => handleSelectChange('actualCommission', value)}
            placeholder='Seleccione un nivel de comisión'
          />
        </div>
      </div>
      <Button type='submit'>Calcular Comisiones</Button>
    </form>
  );
};

export default UserForm;
