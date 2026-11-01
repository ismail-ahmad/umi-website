import Gsection from '@/components/gsection';
import CTA from '@/components/cta';

export default function About() {
    return(
        <div className='wrap'>
          <Gsection headingClass='non-home-hero-gsection' nameClass={['wrap']} hero={false} EyeBrowText='Our story' headingTag='h1' headingText={`We built the system we wish we'd had on the floor.`}>
            <p className='' style={{maxWidth: '680px'}}>UMI Consultants was founded by Ibrahim Ahmad after years of watching apparel factories lose money to invisible losses — losses that only became visible once you started measuring them with the right tools.</p>
          </Gsection>
          <div className="about-content-section">
            <Gsection headingClass='non-home-non-hero-gsection' headingTag='h2' headingText={<>From the factory floor<br />to the boardroom.</>} EyeBrowText='' hero={false}>
            <div className="about-card-part">
              <div className="about-card-content-part">
              <p>The conventional apparel factory runs on paper, memory and end-of-day reports. Losses are invisible. Accountability is opinion. Decisions are reactive. UMI was created to change that — one factory at a time.</p>
              <p>Our system connects every stage of production — from fabric inspection through cutting, stitching, finishing and packing — into a single live record. Every roll, every bundle, every unit is tracked. Every minute is costed. Every contractor is accountable to facts, not assumptions.</p>
              <p>Our first major implementation was MYM Knitwear in Pakistan. The data you see on this site — 80.82% OEE, 141,369 units of identified shortfall — came from that plant. We turned a blind floor into a data-driven operation in one quarter.</p>
              <CTA type='cta' title='Start a pilot' href='/contact' arrow={true} />
            </div>
            <div className="about-cards-part">
              <div className={"first-card card"}>
                <p className={'eyebrow'} style={{marginBottom:'8px'}}>Founder</p>
                <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'linear-gradient(135deg,var(--indigo-f),var(--emerald-f))', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', fontSize:'32px', fontFamily:'var(--display)', fontWeight:700, color:'#fff'}}>I</div>
                <h3 style={{marginBottom:'4px', fontSize:'clamp(18px, 2.2vw, 24px)'}}>Ibrahim Ahmad</h3>
                <p style={{fontSize:'13.5px', color:'var(--muted)'}}>Founder, UMI Consultants<br />Apparel Production Systems Specialist<br />Karachi, Pakistan</p>
                <a href="mailto:ibrahim.ahmad@umiconsultants.com" style={{display:'inline-block', marginTop:'16px', fontSize:'13.5px', color:'var(--indigo)'}}>ibrahim.ahmad@umiconsultants.com</a>
              </div>
              <div className="smaller-cards">
                <div className="about-card card">
              <p className="about-card-number">80.82%</p>
              <p className="about-card-content">Avg OEE achieved</p>
            </div>
            <div className="about-card card">
              <p className="about-card-number" style={{color: 'var(--indigo)'}}>1</p>
              <p className="about-card-content">Quarter to full rollout</p>
            </div>
              </div>
          </div>
            </div>
          </Gsection>
          </div>
        </div>
    );
}