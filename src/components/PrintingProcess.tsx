import GenWrapper from './GenWrapper';
import TagHeader from '@/components/TagHeader';
import { processes } from '@/config/processes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
const PrintingProcess = () => {
    const headerText = 'Printing Process';
    const headerTagline = 'How We Go About Our Designs';
    const Tagline = 'From Vision to Vivid: Navigatin our Seamless Printing Process for Impeccable Results That Bring Your Ideas to Life.'
    return (
        <GenWrapper>
            <TagHeader headerText={headerText} headerTagline={headerTagline} Tagline={Tagline} />
            <div className='w-full max-w-4xl p-2 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3'>
                {
                    processes.map((process)=>(
                        <div key={process.number} className='bg-white min-h-96 w-full px-2 py-10 border border-solid border-orange-500 my-3 rounded-2xl shadow-md'>
                            <p className='text-center text-2xl font-bold mb-4 text-primary'>{process.title}</p>
                            <div className='w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center my-4 mx-auto'>
                                <p className='font-bolder text-orange-500 text-5xl'>{process.number}</p>
                            </div>
                            <div className='p-2 my-2'>
                                <p className='text-muted-foreground text-center'>{process.content}</p>
                            </div>
                            <Button asChild className='bg-orange-500 w-full my-3 rounded-full hover:border hover:border-solid hover:border-orange-500 hover:transparent group'>
                                <div className='flex flex-row gap-3 justify-between items-center'>
                                    <Link href='/Contact' className='group-hover:text-orange-500'>Get Started</Link>
                                    <div className='bg-orange-300 w-16 h-7 flex items-center justify-center rounded-full'>
                                        <Link href='/Contact'><MoveRight className='text-orange-500' /></Link>
                                    </div>
                                </div>
                            </Button>
                        </div>
                    ))
                }
            </div>
        </GenWrapper>
    )
}

export default PrintingProcess;