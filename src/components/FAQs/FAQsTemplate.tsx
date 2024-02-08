'use client';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
type FAQsProps = {
    question: string,
    answer: string
}
const FAQsTemplate = ({question, answer}:FAQsProps) =>{
    const [ isAccordion, setIsAccordion ] = useState(false)
    const handleAccordion = () => {
        setIsAccordion(!isAccordion);
    }

    return (
        <div className='p-2 border-solid border border-slate-800 rounded-lg my-3'>
            <div className='p-2 bg-primary flex flex-row gap-3 items-center justify-between'>
                <p className='text-muted-foreground font-bold text-sm' onClick={ handleAccordion }>{ question }</p>
                {
                    isAccordion ? (<ChevronUp className='text-muted-foreground font-bold cursor-pointer' onClick={ handleAccordion } />)
                                : (<ChevronDown className='text-muted-foreground font-bold cursor-pointer' onClick={ handleAccordion } />) 
                }
            </div>
            {
                isAccordion && (
                <div className='w-full p-3 border-t border-solid border-slate-800'>
                    <p className='text-muted-foreground '>
                        { answer }
                    </p>
                </div>
                )                
            }
        </div>
    )
}
export default FAQsTemplate;