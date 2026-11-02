import Gsection from '@/components/gsection';

export default function Contact() {
    return(
        <div className='wrap contact-page'>
          <Gsection hero={false} headingTag='h1' headingText="Let's see what your floor is hiding." EyeBrowText='GET IN TOUCH'>
            <p style={{marginTop: '18px'}}>Book a free 30-minute walkthrough of UMI's production intelligence system. We'll show you real data from a live plant — then discuss what it would look like in yours.</p>
            <a className='contact-card' href="mailto:ibrahim.ahmad@umiconsultants.com" style={{display:'flex',alignItems:'center',gap:'16px',textDecoration:'none',padding:'18px 20px'}}>
              <div className={'svg-div'} style={{margin:0,flex:'none'}}><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg></div>
              <div><div style={{fontFamily:'var(--mono)', fontSize:'10px', letterSpacing:'1.5px',color:'var(--muted)', textTransform:'uppercase'}}>Email</div><div style={{fontWeight:600,color:'var(--ink)',marginTop:'2px',fontSize:'14.5px'}}>ibrahim.ahmad@umiconsultants.com</div></div>
            </a>
          </Gsection>
          <div className="contact-form" style={{background:'var(--panel2)', padding:'32px', margin: '56px 24px 28px 0', borderRadius: 'var(--radius)'}}>
            <form action="">
              <div className="form-heading-content">
                <h2 style={{fontSize:'22px',marginBottom:'4px'}}>Tell us about your factory</h2>
                <p style={{fontSize:'13.5px', color:'var(--muted)', marginBottom:'24px'}}>Fill in the form and we'll set up a walkthrough.</p>
              </div>
              <div className="form-input-fields">
                <div className="form-inputs-styles">
                  <div><label htmlFor="name">FullName</label><input type="text" name='Name' id='name' autoComplete='true' /></div>
                <div><label htmlFor="company">Company</label><input type="text" name='Company' id='company' autoComplete='true' /></div>
                </div>
                <div className="form-inputs-styles">
                <div><label htmlFor="email">Work Email</label><input type="text" name='Email' id='email' autoComplete='true' /></div>
                <div><label htmlFor="Phone">Phone / Whatsapp</label><input type="text" name='Phone' id='phone' autoComplete='true' /></div>
                </div>
              </div>
              <div className="selection">
                <label htmlFor="problem">What are you looking to solve</label>
                  <select name="Problem" id="problem">
                    <option value="Factory digitization (Plan to Pack)">Factory digitization (Plan to Pack)</option>
                    <option value="Fabric & QC traceability">Fabric & QC traceability</option>
                    <option value="Stitching efficiency & OEE">Stitching efficiency & OEE</option>
                    <option value="SAM-based costing & accountability">SAM-based costing & accountability</option>
                    <option value="something else">something else</option>
                  </select>
              </div>
              <div className="contact-textarea">
                <label htmlFor="textarea">Message</label>
                  <textarea name="message" id="textarea" placeholder='Tell us about your plant'></textarea>
              </div>
              <button className="contact-form-button">
                Send
              </button>
            </form>
          </div>
        </div>
    );
}