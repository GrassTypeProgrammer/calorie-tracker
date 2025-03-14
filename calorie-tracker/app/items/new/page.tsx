import { Button, TextField } from '@radix-ui/themes'
import React from 'react'

const NewItemPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Item Name'/>
        <TextField.Root placeholder='grams'/>
        <TextField.Root placeholder='Calories'/>
        <TextField.Root placeholder='Protein'/>
        <Button>Submit Item</Button>
    </div>
  )
}

export default NewItemPage