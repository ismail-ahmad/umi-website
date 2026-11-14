'use client';
import Gsection from '@/components/gsection';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [problem, setProblem] = useState<string>('Factory digitization (Plan to Pack)');
  const [message, setMessage] = useState<string>('');
  async function handleSubmission(e : React.SubmitEvent){
    e.preventDefault();
    let res = await fetch('/api/contact_page_form', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        company: company,
        email: email,
        phone: phone,
        problem: problem,
        message: message
      })
    });
    await res.json();
    if(res.status !== 200){
      alert('Submission Failed, Please try again!');
      return;
    }
    alert("Form Submitted Successfully!");
  }
    return(
        <div className='wrap contact-page'>
          <Gsection hero={false} headingTag='h1' headingText="Let's see what your floor is hiding." EyeBrowText='GET IN TOUCH'>
            <p style={{marginTop: '18px'}}>Book a free 30-minute walkthrough of UMI's production intelligence system. We'll show you real data from a live plant — then discuss what it would look like in yours.</p>
            <a className='contact-card' href="mailto:ibrahim@umiconsultants.com" style={{display:'flex',alignItems:'center',gap:'16px',textDecoration:'none',padding:'18px 20px', overflowWrap: 'break-word', wordBreak: 'break-all', hyphens: 'auto'}}>
              <div className={'svg-div'} style={{margin:0,flex:'none'}}><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg></div>
              <div><div style={{fontFamily:'var(--mono)', fontSize:'10px', letterSpacing:'1.5px',color:'var(--muted)', textTransform:'uppercase'}}>Email</div><div style={{fontWeight:600,color:'var(--ink)',marginTop:'2px',fontSize:'14.5px'}}>ibrahim@umiconsultants.com</div></div>
            </a>
          </Gsection>
          <div className="contact-form" style={{background:'var(--panel2)', borderRadius: 'var(--radius)'}}>
            <form onSubmit={handleSubmission}>
              <div className="form-heading-content">
                <h2 style={{fontSize:'22px', marginBottom:'4px'}}>Tell us about your factory</h2>
                <p style={{fontSize:'13.5px', color:'var(--muted)', marginBottom:'24px'}}>Fill in the form and we'll set up a walkthrough.</p>
              </div>
              <div className="form-input-fields">
                <div className="form-inputs-styles">
                  <div><label htmlFor="name">FullName</label><input required onChange={(e) => setName(e.target.value)} type="text" name='Name' id='name' autoComplete='true' /></div>
                <div><label htmlFor="company">Company</label><input required onChange={(e) => setCompany(e.target.value)} type="text" name='Company' id='company' autoComplete='true' /></div>
                </div>
                <div className="form-inputs-styles">
                <div><label htmlFor="email">Work Email</label><input required onChange={(e) => setEmail(e.target.value)} type="text" name='Email' id='email' autoComplete='true' /></div>
                <div><label htmlFor="Phone">Phone / Whatsapp</label><input required onChange={(e) => setPhone(e.target.value)} type="text" name='Phone' id='phone' autoComplete='true' /></div>
                </div>
              </div>
              <div className="selection">
                <label htmlFor="problem">What are you looking to solve</label>
                  <select required onChange={(e) => setProblem(e.target.value)} name="Problem" id="problem">
                    <option value="Factory digitization (Plan to Pack)">Factory digitization (Plan to Pack)</option>
                    <option value="Fabric & QC traceability">Fabric & QC traceability</option>
                    <option value="Stitching efficiency & OEE">Stitching efficiency & OEE</option>
                    <option value="SAM-based costing & accountability">SAM-based costing & accountability</option>
                    <option value="something else">something else</option>
                  </select>
              </div>
              <div className="contact-textarea">
                <label htmlFor="textarea">Message</label>
                  <textarea required onChange={(e) => setMessage(e.target.value)} name="message" id="textarea" placeholder='Tell us about your plant'></textarea>
              </div>
              <button className="contact-form-button">
                Send
              </button>
            </form>
          </div>
        </div>
    );
}