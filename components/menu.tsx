'use client';
import { ReactElement } from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';


export default function Menu():ReactElement{
    const pathname = usePathname();
    const isactive = (href: string) => {
        const match = href === '/' ? pathname === '/' : pathname.startsWith(href);
        return match ? 'active-menu-link' : '';
    }
    return(
        <div className='menu'>
            <ul className='menu-list'>
                <li className='menu-link'><Link href='/' className={isactive('/')}>Home</Link></li>
                <li className='menu-link'><Link href='/services' className={isactive('/services')}>Services</Link></li>
                <li className='menu-link'><Link href='/contact' className={isactive('/contact')}>Contact</Link></li>
                <li className='menu-link'><Link href='/about' className={isactive('/about')}>About</Link></li>
                <li className='menu-link' style={{display: 'none'}}><Link href='/insights' className={isactive('/insights')}>Insights</Link></li>
            </ul>
        </div>
    );
}