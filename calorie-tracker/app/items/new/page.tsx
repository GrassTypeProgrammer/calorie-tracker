'use client';

import { Button, Callout, TextField, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { createFoodItemSchema } from '@/app/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '@/app/components/errorMessage';

type ItemForm = z.infer<typeof createFoodItemSchema>;

const NewItemPage = () => {
  const router = useRouter();
  const { handleSubmit, register, formState: { errors } } = useForm<ItemForm>({
    resolver: zodResolver(createFoodItemSchema)
  });
  const [error, setError] = useState('');

  return (
    <div className='max-w-xl'>
      {error &&
        <Callout.Root color='red' className='mb-2'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      }
      <form
        className='space-y-3'
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/foodItem', data);
            router.push('/items');
          } catch (error) {
            setError('An unexpected error occurred.');
          }
        })}
      >
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <TextField.Root placeholder='Item Name' {...register('name')} />

        {/* <TextField.Root placeholder='Weight in grams'{...register('weight', {valueAsNumber: true})} /> */}
        <ErrorMessage>{errors.protein?.message}</ErrorMessage>
        <TextField.Root placeholder='Protein' {...register('protein', { valueAsNumber: true })} />

        <ErrorMessage>{errors.carbs?.message}</ErrorMessage>
        <TextField.Root placeholder='Carbs' {...register('carbs', { valueAsNumber: true })} />

        <ErrorMessage>{errors.fat?.message}</ErrorMessage>
        <TextField.Root placeholder='Fat' {...register('fat', { valueAsNumber: true })} />

        <ErrorMessage>{errors.calories?.message}</ErrorMessage>
        <TextField.Root placeholder='Calories' {...register('calories', { valueAsNumber: true })} />

        <Button>Submit Item</Button>
      </form>
    </div>

  )
}

export default NewItemPage