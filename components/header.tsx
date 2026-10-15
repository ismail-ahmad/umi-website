import {ReactElement} from 'react';
import Logo_Group from './logo_group';
import Menu from '@/components/menu';
import CTA from '@/components/cta';

export default function Header():ReactElement{
    //header code goes here
    return(
        <section className='header-section'>
            <div className=' header wrap h-padding'>
                <Logo_Group />
                <Menu />
                <CTA title='Book a walkthrough' href='/contact'/>
            </div>
        </section>
    );
}