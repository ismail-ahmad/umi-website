import { ReactElement, useState } from 'react';

export default function FreeResourceForm({headingTag, headingText, eyebrowText, contentText}:{headingTag:'h1'|'h2'|'h3'|'h4', headingText:string, eyebrowText:string, contentText:string}):ReactElement {
    const Heading = headingTag;
    const [namedNewsletterName, setNamedNewsletterName] = useState<string>('');
    const [namedNewsletterEmail, setNamedNewsletterEmail] = useState<string>('');

    async function handleSubmit(e: React.SubmitEvent){
        e.preventDefault();
        const res = await fetch('/api/named_email_contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: namedNewsletterName, email: namedNewsletterEmail})
        });
        await res.json();
        if(res?.status !== 200) {
            alert('Please try again!');
            return;
        }
        setNamedNewsletterEmail('');
        setNamedNewsletterName('');
        alert('Thank you, We will reach out to you ASAP!');
    }

    return(
        <div className="h-padding wrap">
            <div className="free-resource-form">
            <div className="form-content-part">
                <p className="eyebrow">{eyebrowText}</p>
                <Heading className='heading'>{headingText}</Heading>
                <p className='content-text'>{contentText}</p>
            </div>
            <form onSubmit={handleSubmit} className="form-input-part">
                <input value={namedNewsletterName} onChange={(e) => setNamedNewsletterName(e.target.value)} className='input' type="text" name="Name" placeholder='Name' />
                <input value={namedNewsletterEmail} onChange={ (e) => setNamedNewsletterEmail(e.target.value) } className='input' type="email" name="Email" placeholder='Email' />
                <button className='subscribe-button'>Subscribe</button>
            </form>
        </div>
        </div>
    );
}