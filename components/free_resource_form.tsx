import { ReactElement } from 'react';

export default function FreeResourceForm({headingTag, headingText, eyebrowText, contentText}:{headingTag:'h1'|'h2'|'h3'|'h4', headingText:string, eyebrowText:string, contentText:string}):ReactElement {
    const Heading = headingTag;
    return(
        <div className="h-padding wrap">
            <div className="free-resource-form">
            <div className="form-content-part">
                <p className="eyebrow">{eyebrowText}</p>
                <Heading className='heading'>{headingText}</Heading>
                <p className='content-text'>{contentText}</p>
            </div>
            <div className="form-input-part">
                <input className='input' type="text" name="Name" placeholder='Name' />
                <input className='input' type="email" name="Email" placeholder='Email' />
                <button className='subscribe-button'>Subscribe</button>
            </div>
        </div>
        </div>
    );
}