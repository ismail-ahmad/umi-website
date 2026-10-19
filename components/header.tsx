'use client';

import {ReactElement} from 'react';
import Logo_Group from './logo_group';
import Menu from '@/components/menu';
import CTA from '@/components/cta';
import { useState, useEffect } from 'react';

export default function Header():ReactElement{

    //menu toggle for mobile devices
    const [toggle, useToggle] = useState(false);
    useEffect(() => {
        if (!toggle) return;

        const body = document.body;
        const html = document.documentElement;
        const scrollY = window.scrollY;
        body.style.setProperty('--scroll-lock-y', `${scrollY}px`);
        console.log(scrollY)
        body.classList.add('no-scroll');
        html.classList.add('no-scroll');


        return(() => {
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
            body.style.removeProperty('--scroll-lock-y');
            window.scrollTo({ top: scrollY, behavior: 'instant' });
        });
    }, [toggle]);


    //header code goes here
    return(
        <section className='header-section'>
            <div className=' header wrap h-padding'>
                <Logo_Group />
                <Menu menuOpen={toggle} closeMenuAction={() => {useToggle(false)}} />
                <div onClick={()=> {useToggle(false)}} className={`menu-close-button ${toggle ? 'menu-close-button-visible' : ''}`}>X</div>
                <CTA title='Book a walkthrough' href='/contact'/>
                <svg onClick={() => {useToggle(true)}} className="menu-open-button" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
        </section>
    );
}