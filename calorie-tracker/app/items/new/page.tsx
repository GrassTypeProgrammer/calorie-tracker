'use client';

import { Button, Callout, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

interface ItemForm {
  name: string,
  // weight: number,
  protein: number,
  fat: number,
  carbs: number,
  calories: number,
}

const NewItemPage = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<ItemForm>();
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
        <TextField.Root placeholder='Item Name' {...register('name')} />
        {/* <TextField.Root placeholder='Weight in grams'{...register('weight', {valueAsNumber: true})} /> */}
        <TextField.Root placeholder='Protein' {...register('protein', { valueAsNumber: true })} />
        <TextField.Root placeholder='Carbs' {...register('carbs', { valueAsNumber: true })} />
        <TextField.Root placeholder='Fat' {...register('fat', { valueAsNumber: true })} />
        <TextField.Root placeholder='Calories' {...register('calories', { valueAsNumber: true })} />
        <Button>Submit Item</Button>
      </form>
    </div>

  )
}

export default NewItemPage