import { ReactElement } from 'react';
import Gsection from '@/components/gsection';
import CTA from '@/components/cta';

export default function Home():ReactElement{
  return(
    <div className='home-hero-background' style={{padding: '90px 0 72px'}}>
      <Gsection nameClass={['home-hero-section', 'wrap', 'h-padding']} hero={true} EyeBrowText='Digital · Traceable · Green' headingTag='h1' headingText={<>From Plan<br />to <span className='green-heading-text'>Pack.</span></>}>
       <p className='hero-text' style={{maxWidth: '680px', paddingTop: '16px'}}>Real-time production intelligence across the apparel value chain — capturing every roll, bundle, stitch and carton as living data. No guesswork. No hidden losses.</p>
       <div className='home-hero-button-container'>
       <CTA type='cta' title='Start a pilot' href='/contact' arrow={true} />
       <CTA type='hero-button2' title='Read our insights' href='/services' arrow={false} />
       </div>
    </Gsection>
    </div>
  );
}