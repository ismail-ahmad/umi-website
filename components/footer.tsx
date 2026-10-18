import {ReactElement} from 'react';
import FooterLinkListItem from './footer_link_list_item';
import LinkList from './link_list';
import Logo from './logo';


export default function Footer():ReactElement{
    return(
        <section className='footer-section v-padding'>
          <div className='wrap h-padding'>
            <div className='footer-link-container'>
              <div className='footer-form-container'>
                <Logo />
                <p style={{marginTop: '12px'}}>
                  From Plan to Pack — Digital, Traceable, Green. Apparel manufacturing intelligence for factories that want to know the truth about their floor.
                </p>
                <form className='footer-form' action="/form-submission-api" style={{marginTop: '18px'}}>
                  <input type="text" placeholder='Email for free checklist' className='input'/>
                  <button className='cta2'>Join</button>
                </form>
              </div>
          <LinkList heading='Company'>
            <FooterLinkListItem text='Option' href='/home' />
            <FooterLinkListItem text='Option' href='/home' />
            <FooterLinkListItem text='Option' href='/home' />
            <FooterLinkListItem text='Option' href='/home' />
          </LinkList>
          <LinkList heading='Company'>
            <FooterLinkListItem text='Option' href='/home' />
            <FooterLinkListItem text='Option' href='/home' />
            <FooterLinkListItem text='Option' href='/home' />
            <FooterLinkListItem text='Option' href='/home' />
          </LinkList>
            </div>
          <div className='copyright-container'>
          <p className='copyright-text'>&copy; UMI Consultants - All rights reserved.</p>
          </div>
          </div>
        </section>
    );
}