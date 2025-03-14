import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const Items = () => {
    return (
        <div>
            <Button>
                <Link href='/items/new'>
                    New Food Item
                </Link>
            </Button>
        </div>
    )
}

export default Items