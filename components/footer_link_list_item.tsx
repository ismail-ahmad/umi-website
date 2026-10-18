import { ReactElement } from "react";
import Link from 'next/link';

export default function FooterLinkListItem({text, href}: {text:string, href: string}):ReactElement{
    return(
        <li className="footer-link-list-item"><Link href={href} className="footer-link">{text}</Link></li>
    );
}