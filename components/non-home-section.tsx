import { ReactElement } from 'react';
interface Props{
    children: React.ReactNode;
    headingText: string;
    eyebrowText?: string;
    headingTag: 'h1' | 'h2' | 'h3' | 'h4';
    nameClass?: string[];
}

export default function Gsection({children, headingText, eyebrowText, headingTag, nameClass}:Props):ReactElement{
    const Heading = headingTag;
    return(
        <div className={`non-hero-section ${(nameClass ? nameClass.join(" ") : '')}`}>
            <div className={`h-padding`}>
                {eyebrowText ? '' : <p className={``}>{eyebrowText}</p> }
                <Heading className={`g-section-heading`}>{headingText}</Heading>
                {children}
            </div>
        </div>
    );
}