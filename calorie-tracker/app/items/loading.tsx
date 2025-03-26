import { Skeleton, Table } from '@radix-ui/themes'
import React from 'react'
import ItemToolbar from './ItemToolbar'

const loading = () => {
    const items = [1, 2, 3, 4, 5];

    return (
        <div>
            <ItemToolbar />



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
                        return <Table.Row key={item}>
                            <Table.Cell><Skeleton/></Table.Cell>
                            <Table.Cell><Skeleton/></Table.Cell>
                            <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
                            <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
                            <Table.Cell><Skeleton/></Table.Cell>
                        </Table.Row>
                    })}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default loading