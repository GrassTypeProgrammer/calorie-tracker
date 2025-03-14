'use client'

import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBurn } from "react-icons/fa";

type LinkData = {
    label: string,
    href: string,
}

const Navbar = () => {
    const currentPath = usePathname();

    const links: LinkData[] = [
        { href: '/', label: 'Home' },
        { href: '/calories', label: 'Calories' },
        { href: '/items', label: 'Items' },
    ];

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href='/'>
                <FaBurn className='h-8 w-8' />
            </Link>
            <ul className='flex flex-1 justify-center space-x-6 '>
                {links.map((item: LinkData) => {
                    return (
                        <li key={item.href}>
                            <Link
                                className={classNames(
                                    currentPath === item.href ? 'text-zinc-900' : 'text-zinc-500',
                                    'hover:text-zinc-800 transition-colors'
                                )}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar