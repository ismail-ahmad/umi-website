import { ReactElement } from 'react';

export default function HomeHeroStat({number, numberColor, text}: {number: string, numberColor: string, text: string}):ReactElement {
    return(
        <div className='home-hero-stat'>
            <div className='home-hero-stat-number'>
                <p style={{color: `${numberColor}`}}>{number}</p>
            </div>
            <div className='home-hero-stat-text'>
                <p>{text}</p>
            </div>
        </div>
    );
}