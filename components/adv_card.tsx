import { ReactElement } from 'react';

export default function AdvCard({cardIcon, cardClass, cardHeading, cardText}: {cardIcon:React.ReactNode, cardClass?: string, cardHeading: string, cardText: string}): ReactElement {
    return(
        <div className='adv-card'>
            <div className={`card-icon ${cardClass}`}>{cardIcon}</div>
            <div className='card-heading'><h3>{cardHeading}</h3></div>
            <div className='card-text'>{cardText}</div>
        </div>
    );
}