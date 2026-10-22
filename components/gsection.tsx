import { ReactElement } from 'react';

export default function Gsection({children, nameClass, hero, EyeBrowText, headingTag, headingText}: {children?: React.ReactNode, headingText:React.ReactNode | string, EyeBrowText: string, nameClass?: string[], hero:boolean, headingTag: 'h1' | 'h2' | 'h3' | 'h4'}):ReactElement{
    const Heading = headingTag;
    return(
        <section className={`g-section v-padding ${(nameClass ? nameClass.join(" ") : '')}`}>
            <div className='h-padding'>
                <p className={`${(hero ?  'hero-eyebrow' : 'eyebrow')}`}>{EyeBrowText}</p>
                <Heading className={`${hero ? 'hero-g-section-heading' : 'g-section-heading'}`}>{headingText}</Heading>
                {children}
            </div>
        </section>
    );
}