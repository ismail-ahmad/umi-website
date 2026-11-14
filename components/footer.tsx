'use client';

import { ReactElement, useState, useEffect } from 'react';
import FooterLinkListItem from './footer_link_list_item';
import LinkList from './link_list';
import Logo from './logo';


export default function Footer():ReactElement{
  const [newsletterEmail, setnewsletterEmail] = useState<string>("");
  async function handleEmailContact(e: React.SubmitEvent):Promise<void>{
    e.preventDefault();
    try{
      let res = await fetch('/api/email_contact',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: newsletterEmail})
      });
      if(!res){
        console.log(res);
        alert("Email not submitted");
      }
      console.log('form submitted');
      setnewsletterEmail('');
      alert("Email submitted!");
    } catch(err){
      console.log(`netword error: ${err}`);
      alert("Email Not submitted!");
    }
  }
    return(
        <section className='footer-section v-padding'>
          <div className='wrap h-padding'>
            <div className='footer-link-container'>
              <div className='footer-form-container'>
                <Logo />
                <p style={{marginTop: '12px'}}>
                  From Plan to Pack — Digital, Traceable, Green. Apparel manufacturing intelligence for factories that want to know the truth about their floor.
                </p>
                <form method='post' className='footer-form' onSubmit={handleEmailContact} style={{marginTop: '18px'}}>
                  <input value={newsletterEmail} onChange={(e) => setnewsletterEmail(e.target.value)} type="text" placeholder='Email for free checklist' autoComplete='true' required className='input'/>
                  <button className='cta2'>Join</button>
                </form>
              </div>
          <LinkList heading='Company'>
            <FooterLinkListItem text='Option' href='/' />
            <FooterLinkListItem text='Option' href='/' />
            <FooterLinkListItem text='Option' href='/' />
            <FooterLinkListItem text='Option' href='/' />
          </LinkList>
          <LinkList heading='Company'>
            <FooterLinkListItem text='Option' href='/' />
            <FooterLinkListItem text='Option' href='/' />
            <FooterLinkListItem text='Option' href='/' />
            <FooterLinkListItem text='Option' href='/' />
          </LinkList>
            </div>
          <div className='copyright-container'>
          <p className='copyright-text'>&copy; UMI Consultants - All rights reserved.</p>
          </div>
          </div>
        </section>
    );
}