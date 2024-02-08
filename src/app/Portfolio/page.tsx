import React from 'react'
import { Metadata } from 'next';
import Invoice from '/public/invoice.jpg';
import Header from '../_components/Header';
import Image from 'next/image';
import Banners from '/public/banner.jpg';
import Posters from '/public/poster.jpg';
import Leather from '/public/leatherBag.jpg';
import PaperBag from '/public/paper-bag-01.jpg';
import Stickers from '/public/sticker.jpg';
import BusinessCard from '/public/bizcard.jpg';
import ShirtPrinting from '/public/T-shirt-mockup.jpg';
import Mug from '/public/mug-printing.webp';
import Signage from '/public/signage.webp';
import RollUpBanner from '/public/roolupbanner.webp';
import Flyers from '/public/flyers.jpg';
import ReflectiveJacket from '/public/reflectivejacket.webp';
import TagHeader from '@/components/TagHeader';


export const metadata:Metadata = {
    title: "Our Work",
    description: "At Usraya printing press, we print top-notch and quality work of art."
}

const PortfolioPage = () => {
    const image = Invoice;
    const text = 'Our Portfolio';
    const headerTagline = 'Checkout Out Our Work';
    const Tagline ='Elevate Your Brand, Captivate Your Audience: Let Us Turn Your Projects into Stunning Prints That Speak Volumes.';
    return (
        <>
        <Header image = { image } text = { text } />
            <div className='portfolio pt-10 px-2 lg:px-0'>
                <div className='flex items-center justify-center'>
                    <TagHeader headerTagline={headerTagline} Tagline={Tagline} />
                </div>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
                    <div className='relative h-96 w-full overflow-hidden lg:row-span-2 lg:h-full'>
                        <Image 
                            src={ShirtPrinting}
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
                    <div className='relative h-96 w-full overflow-hidden lg:col-span-2'>
                        <Image 
                            src={Stickers}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>             
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={Flyers}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>             
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={Banners}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={Posters}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={Leather}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={Mug}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={Signage}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='relative h-96 w-full overflow-hidden'>
                        <Image 
                            src={ReflectiveJacket}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='relative h-96 w-full overflow-hidden lg:col-span-2'>
                        <Image 
                            src={RollUpBanner}
                            alt='portfolio image'
                            fill = { true }
                            priority
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioPage;