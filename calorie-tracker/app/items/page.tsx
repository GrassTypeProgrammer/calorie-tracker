import { prisma } from '@/prisma/client'
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const Items = async () => {
    const items = await prisma.foodItem.findMany();


    return (
        <div>
            <div className='mb-5'>
                <Button>
                    <Link href='/items/new'>
                        New Food Item
                    </Link>
                </Button>
            </div>

            {/* <div className='flex gap-5 mb-5 justify-end pr-5'>
                <Text className='flex flex-row gap-1' as='label' size='2'>
                    <Radio size='1' name='size-2' value='1' ></Radio>
                    <div>Show Fat</div>
                </Text>
            </div> */}

            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Protein</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Fat</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Carbs</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Calories</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {items.map(item => {
                        return <Table.Row key={item.id}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.protein}</Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>{item.fat}</Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>{item.carbs}</Table.Cell>
                            <Table.Cell>{item.calories}</Table.Cell>
                        </Table.Row>
                    })}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default Items