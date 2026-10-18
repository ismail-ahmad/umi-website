import {ReactElement} from 'react';
import FooterLinkListItem from './footer_link_list_item';
import LinkList from './link_list';


export default function Footer():ReactElement{
    return(
        <section className='footer-section v-padding'>
          <div className='wrap h-padding'>
            <div className='footer-link-container'>
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