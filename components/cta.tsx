'use client';

import {ReactElement} from 'react';
import { useRouter } from 'next/navigation';


export default function CTA({type = 'cta', title, href}:{type?: string; title: string, href: string;}):ReactElement {
    const router = useRouter();
    return(
        <div>
            <a className={type} href={href}>{title}</a>
        </div>
    );
}