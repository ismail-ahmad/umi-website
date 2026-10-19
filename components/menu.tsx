'use client';
import { ReactElement } from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';


export default function Menu({menuOpen, closeMenuAction}: {menuOpen:boolean; closeMenuAction: () => void;}):ReactElement{
    const pathname = usePathname();
    const isactive = (href: string) => {
        const match = href === '/' ? pathname === '/' : pathname.startsWith(href);
        return match ? 'active-menu-link' : '';
    }
    return(
        <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
            <ul className='menu-list'>
                <li className='menu-link'><Link href='/' onClick={closeMenuAction} className={isactive('/')}>Home</Link></li>
                <li className='menu-link'><Link href='/services' onClick={closeMenuAction} className={isactive('/services')}>Services</Link></li>
                <li className='menu-link'><Link href='/contact' onClick={closeMenuAction} className={isactive('/contact')}>Contact</Link></li>
                <li className='menu-link'><Link href='/about' onClick={closeMenuAction} className={isactive('/about')}>About</Link></li>
                <li className='menu-link' style={{display: 'none'}}><Link href='/insights' onClick={closeMenuAction} className={isactive('/insights')}>Insights</Link></li>
            </ul>
        </div>
    );
}