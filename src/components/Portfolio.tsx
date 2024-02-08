import TagHeader from './TagHeader';
import Image from 'next/image';
import TshirtMockUp from '/public/T-shirt-mockup.jpg';
import PaperBag from '/public/paper-bag-01.jpg';
import BusinessCard from '/public/businesscard.jpg';
import HeroImage04 from '/public/HeroImage-04.jpg';
import PaperBagRed from '/public/paperbag.jpg';
import ShirtPrinting from '/public/shirt-printing.jpg';

const Portfolio = () => {
    const headerText = 'Our Portfolio';
    const headerTagline = 'Checkout Out Our Recent Work';
    const Tagline ='Elevate Your Brand, Captivate Your Audience: Let Us Turn Your Projects into Stunning Prints That Speak Volumes.';
    return (
        <div className='portfolio pt-10 px-2 lg:px-0'>
            <div className='flex items-center justify-center'>
                <TagHeader headerText={headerText} headerTagline={headerTagline} Tagline={Tagline} />
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='relative h-96 w-full overflow-hidden'>
                    <Image 
                        src={TshirtMockUp}
                        alt='portfolio image'
                        fill = { true }
                        priority
                        className='object-cover'
                    />
                </div>      
                <div className='relative h-96 w-full overflow-hidden'>
                    <Image 
                        src={PaperBag}
                        alt='portfolio image'
                        fill = { true }
                        priority
                        className='object-cover'
                    />
                </div>     
                <div className='relative h-96 w-full overflow-hidden'>
                    <Image 
                        src={BusinessCard}
                        alt='portfolio image'
                        fill = { true }
                        priority
                        className='object-cover'
                    />
                </div>               
                <div className='relative h-96 w-full overflow-hidden'>
                    <Image 
                        src={HeroImage04}
                        alt='portfolio image'
                        fill = { true }
                        priority
                        className='object-cover'
                    />
                </div>             
                <div className='relative h-96 w-full overflow-hidden'>
                    <Image 
                        src={PaperBagRed}
                        alt='portfolio image'
                        fill = { true }
                        priority
                        className='object-cover'
                    />
                </div>             
                <div className='relative h-96 w-full overflow-hidden'>
                    <Image 
                        src={ShirtPrinting}
                        alt='portfolio image'
                        fill = { true }
                        priority
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    )
}
export default Portfolio;