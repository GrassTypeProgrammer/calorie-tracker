'use client';

import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
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

  return (

    <form
      className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async (data) => {
        console.log(data)
        await axios.post('/api/foodItem', data);
        router.push('/items');
      })}
    >
      <TextField.Root placeholder='Item Name' {...register('name')} />
      {/* <TextField.Root placeholder='Weight in grams'{...register('weight', {valueAsNumber: true})} /> */}
      <TextField.Root placeholder='Protein' {...register('protein', {valueAsNumber: true})}/>
      <TextField.Root placeholder='Carbs' {...register('carbs', {valueAsNumber: true})}/>
      <TextField.Root placeholder='Fat' {...register('fat', {valueAsNumber: true})}/>
      <TextField.Root placeholder='Calories' {...register('calories', {valueAsNumber: true})}/>
      <Button>Submit Item</Button>
    </form>
  )
}

export default NewItemPage