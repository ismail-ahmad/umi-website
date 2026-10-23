import {ReactElement} from 'react';


export default function Faq({question, answer, open, onToggle}: {question: string, answer: string, open: boolean, onToggle: () => void}):ReactElement {
    return(
        <div className="faq-container">
            <div className="faq-question-container" onClick={onToggle}>
                <p className='faq-question'>{question}</p>
                <div className={`faq-close-icon ${open ? 'faq-close-icon-rotate' : ''}`}>+</div>
            </div>
            <p className={`faq-answer ${open ? 'faq-answer-open': ''}`}>{answer}</p>
        </div>
    );
}