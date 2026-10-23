'use client';

import {ReactElement} from 'react';
import { useState } from 'react';


export default function Faq({question, answer}: {question: string, answer: string}):ReactElement {
    const [open, setOpen] = useState<boolean>(false);
    return(
        <div className="faq-container">
            <div className="faq-question-container" onClick={() => {setOpen(!open)}}>
                <p className='faq-question'>{question}</p>
                <div className={`faq-close-icon ${open ? 'faq-close-icon-rotate' : ''}`}>+</div>
            </div>
            <p className={`faq-answer ${open ? 'faq-answer-open': ''}`}>{answer}</p>
        </div>
    );
}