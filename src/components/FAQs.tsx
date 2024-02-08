import FAQsTemplate from './FAQs/FAQsTemplate';
import GenWrapper from './GenWrapper';
import { FAQuestions } from '@/config/FAQs';

const FAQs = () => {
    return(
    <GenWrapper className="bg-primary lg:grid lg:grid-cols-2 lg:gap-2 lg:py-24">
        <div className='w-full max-w-4xl py-5 px-2'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-muted-foreground text-5xl font-bold text-center'>Frequently</h1>
                <h1 className='text-muted-foreground text-5xl font-bold text-center my-3'>Asked</h1>
                <h1 className='text-muted-foreground text-5xl font-bold text-center'>Questions</h1>
            </div>
        </div>
        <div className='w-full bg-primary p-2 md:grid md:grid-cols-2 md:gap-3'>
        {
            FAQuestions.map((faq, index) => (
                <FAQsTemplate key={ index } { ...faq } />
            ))
        }
        </div>
    </GenWrapper>
    )
}
export default FAQs;