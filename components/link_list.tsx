import {ReactElement} from 'react';

export default function LinkList({children, heading}: {children: React.ReactNode, heading: string}):ReactElement {
    return(
        <div className='footer-link-list-container'>
            <h4 className='footer-link-list-heading'>{heading}</h4>
            <ul className='footer-link-list'>
                {children}
            </ul>
        </div>
    );
}