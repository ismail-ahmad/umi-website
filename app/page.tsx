import { ReactElement } from 'react';
import Gsection from '@/components/gsection';
import CTA from '@/components/cta';
import HomeHeroStat from '@/components/home-hero-stats';


export default function Home():ReactElement{
  return(
    <div className='home-hero-background' style={{padding: '90px 0 72px'}}>
      <Gsection nameClass={['home-hero-section', 'wrap', 'h-padding']} hero={true} EyeBrowText='Digital · Traceable · Green' headingTag='h1' headingText={<>From Plan<br />to <span className='green-heading-text'>Pack.</span></>}>
       <p className='hero-text' style={{maxWidth: '680px', paddingTop: '16px'}}>Real-time production intelligence across the apparel value chain — capturing every roll, bundle, stitch and carton as living data. No guesswork. No hidden losses.</p>
       <div className='home-hero-button-container'>
       <CTA type='cta' title='Start a pilot' href='/contact' arrow={true} />
       <CTA type='hero-button2' title='Read our insights' href='/services' arrow={false} />
       </div>
       <div className="thread">
        <div className="tnode"><span className="dot"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="17" rx="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="13" y2="13"></line></svg></span><span className="lb">PLAN</span></div>
        <div className="tnode"><span className="dot"><svg viewBox="0 0 24 24"><polygon points="12 3 21 8 12 13 3 8 12 3"></polygon><polyline points="3 13 12 18 21 13"></polyline></svg></span><span className="lb">FABRIC</span></div>
        <div className="tnode"><span className="dot"><svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.1" y2="15.9"></line><line x1="20" y1="20" x2="8.1" y2="8.1"></line></svg></span><span className="lb">CUT</span></div>
        <div className="tnode"><span className="dot"><svg viewBox="0 0 24 24"><path d="M8 3l4 3 4-3 4 4-3 3v8H7v-8L4 7z"></path></svg></span><span className="lb">STITCH</span></div>
        <div className="tnode"><span className="dot"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="17" rx="2"></rect><polyline points="9 12 11 14 15 9"></polyline></svg></span><span className="lb">FINISH</span></div>
        <div className="tnode"><span className="dot"><svg viewBox="0 0 24 24"><path d="M3 8l9-5 9 5v8l-9 5-9-5z"></path><polyline points="3 8 12 13 21 8"></polyline><line x1="12" y1="13" x2="12" y2="21"></line></svg></span><span className="lb">PACK</span></div>
      </div>
    </Gsection>
    <div className='home-hero-stat-container'>
      <HomeHeroStat number='80.82%' numberColor='var(--teal)' text='Average OEE achieved' />
      <HomeHeroStat number='64.58%' numberColor='var(--ink)' text='Overall production achievement' />
      <HomeHeroStat number='141,369' numberColor='var(--amber)' text='Shortfall units made visible' />
    </div>
    </div>
  );
}