import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GenWrapper from '@/components/GenWrapper';
const CTAsection = () => {
    return (
        <GenWrapper className='bg-orange-100'>
            <div className='bg-orange-500 my-20 p-5 rounded-lg md:w-4/5 md:mx-auto md:p-10'>
                <div>
                    <h1 className="text-xl font-bold text-center text-orange-100">Ready To Get Started ?</h1>
                    <p className="text-center text-orange-100 my-3">We Stand As Your Trusted Partner. Our Dedication To Quality, <br /> Innovation, And Customer Satisfaction Sets Us Apart.</p>
                </div>
                <div className='md:w-1/2 md:mx-auto'>
                    <Button asChild className='w-full'>
                        <Link href='/Contact'>Get Started &rarr;</Link>
                    </Button>
                </div>
            </div>
        </GenWrapper>
    )
}

export default CTAsection;