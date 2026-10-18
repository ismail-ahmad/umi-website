import {ReactElement} from 'react';
import Logo from '@/components/logo';


export default function Logo_Group():ReactElement{
    return(
        <div className='logo-group'>
          <a href="/">
            <Logo />
            <p className='logo-text'>RIGHT DECISION, YOUR RIGHT</p>
          </a>
        </div>
    );
}