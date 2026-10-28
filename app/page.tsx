'use client';

import { ReactElement, useEffect, useState } from 'react';
import Gsection from '@/components/gsection';
import CTA from '@/components/cta';
import HomeHeroStat from '@/components/home-hero-stats';
import AdvCard from '@/components/adv_card';
import Faq from '@/components/faq';
import FreeResourceForm from '@/components/free_resource_form';
import useNumberAnimator from '@/hooks/NumberAnimator';
import useIntersectionObserver from '@/hooks/intersection_observer';


export default function Home():ReactElement{
  const [openFaqindex, setOpenFaqIndex] = useState<number | null>(null);
  const [start, setStart] = useState<boolean>(false);
  const toggleFaqIndex = (currentIndex:number | null) => {
    setOpenFaqIndex(currentIndex === openFaqindex ? null : currentIndex);
  }

    // intersectionObserver below

    const {observer, visible} = useIntersectionObserver();

  useEffect(() => {
    if(visible.has('numbers-container')){
      setStart(true);
    }
  }, [visible]);

  const value = useNumberAnimator({target: 80.82, duration: 5000, start: start});
  const value2 = useNumberAnimator({target: 64.58, duration: 4000, start: start});
  const value3 = useNumberAnimator({target: 141369, duration: 6000, start: start});

  return(
    <>
    <div className='home-hero-background' style={{padding: '90px 0 72px'}}>
      <Gsection nameClass={['home-hero-section', 'wrap']} hero={true} EyeBrowText='Digital · Traceable · Green' headingTag='h1' headingText={<>From Plan<br />to <span className='green-heading-text'>Pack.</span></>}>
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
    <div ref={observer('numbers-container')} className='home-hero-stat-container'>
      <HomeHeroStat number={value.toFixed(2) + '%'} numberColor='var(--teal)' text='Average OEE achieved' />
      <HomeHeroStat number={value2.toFixed(2) + '%'} numberColor='var(--ink)' text='Overall production achievement' />
      <HomeHeroStat number={value3.toFixed(0)} numberColor='var(--amber)' text='Shortfall units made visible' />
    </div>
    </div>
    <Gsection nameClass={['wrap', 'desktop-adv-cards-container']} hero={false} EyeBrowText='WHAT YOU GET' headingTag='h2' headingText='Four advantages, Designed in'>
      <div ref={observer('adv-cards')} className="adv-card-container">
        <AdvCard visible={`${visible.has('adv-cards') ? 'adv-cards-visible adv-cards-visible1': ''}`} cardHeading='Traceabile' cardClass={`green-adv-card`} cardText='Every roll, bundle and garment carries a scannable identity from intake to export carton.' cardIcon={<svg viewBox="0 0 24 24"><path d="M6 11a6 6 0 0 1 12 0v3a4 4 0 0 1-4 4"></path><path d="M12 18v3"></path><path d="M9 11a3 3 0 0 1 6 0"></path></svg>} />
        <AdvCard visible={`${visible.has('adv-cards') ? 'adv-cards-visible adv-cards-visible2': ''}`} cardHeading='Digital' cardClass={`purple-adv-card`} cardText='Floor data captured at source on mobile interfaces — no re-keying, no paper, no lag.' cardIcon={<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"></rect><line x1="9" y1="2" x2="9" y2="5"></line><line x1="15" y1="2" x2="15" y2="5"></line><line x1="9" y1="19" x2="9" y2="22"></line><line x1="15" y1="19" x2="15" y2="22"></line><line x1="2" y1="9" x2="5" y2="9"></line><line x1="19" y1="9" x2="22" y2="9"></line><line x1="2" y1="15" x2="5" y2="15"></line><line x1="19" y1="15" x2="22" y2="15"></line></svg>} />
        <AdvCard visible={`${visible.has('adv-cards') ? 'adv-cards-visible adv-cards-visible3': ''}`} cardHeading='Green' cardClass={`green-adv-card`} cardText='Tighter cutting, lower rework and a paperless floor turn quality control into measurable cost savings.' cardIcon={<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6"></path></svg>} />
        <AdvCard visible={`${visible.has('adv-cards') ? 'adv-cards-visible adv-cards-visible4': ''}`} cardHeading='Realtime' cardClass={`amber-adv-card`} cardText='Live OEE, WIP and quality dashboards update as work happens — decisions in minutes, not days.' cardIcon={<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>} />
      </div>
    </Gsection>
    <FreeResourceForm eyebrowText='Free Resource' headingTag='h2' headingText='Get the Factory Digitalization Checklist' contentText='30 points used in real knitwear plants. Free, instant, no spam.' />
    <Gsection nameClass={['faq-wrap']} hero={false} EyeBrowText='FAQ' headingTag='h2' headingText={'Common Questions'}>
      <div className='faq-section-container'>
        <Faq open={openFaqindex === 0} onToggle={() => {toggleFaqIndex(0)}} question='What does UMI Consultants do?' answer='UMI Consultants installs traceable, digital, real-time production workflows inside apparel factories — covering fabric inspection, cutting, stitching, finishing and packing.' />
        <Faq open={openFaqindex === 1} onToggle={() => {toggleFaqIndex(1)}} question='How long does a typical implementation take?' answer='A pilot covering one style or one production line typically goes live within two to four weeks, with a full plant rollout complete within one quarter.' />
        <Faq open={openFaqindex === 2} onToggle={() => {toggleFaqIndex(2)}} question='Does UMI work with contract manufacturers?' answer='Yes. Our system holds contractors accountable to SAM-based targets using hard data, replacing opinion-based disputes with evidence.' />
        <Faq open={openFaqindex === 3} onToggle={() => {toggleFaqIndex(3)}} question='What does it cost?' answer='UMI uses your existing mobile devices and Google Workspace — there is no proprietary hardware. Pricing is project-based; contact us for a quote tailored to your plant size.' />
      </div>
    </Gsection>
    </>
  );
}