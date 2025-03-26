import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const ItemToolbar = () => {
    return (
        <div className='mb-5'>
            <Button>
                <Link href='/items/new'>
                    New Food Item
                </Link>
            </Button>
        </div>
    )
}

export default ItemToolbar