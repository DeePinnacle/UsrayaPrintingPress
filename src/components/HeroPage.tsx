import React from 'react'
import Image from 'next/image';
import HeroImage from '/public/HeroImage.png';
import { Button} from '@/components/ui/button';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <div className='bg-orange-300 min-h-screen px-2 py-5 flex items-center justify-center'>
      <div className='hero-inner-wrapper m-3 max-w-4xl w-full md:flex md:flex-row md:gap-3 md:items-center md:justify-center md:p-6 lg:max-w-6xl'>
        {/* herotext */}
        <div className='hero-text-container p-2 md:w-full'>
          <p className='text-5xl my-3 font-bold leading-tight lg:text-7xl lg:leading-snug'>Turning Ideas Into <span className='text-orange-500'>Imprints!</span> Your Vision, Our Printing Precision.</p>
          <p className='max-w-prose'>Unleash Your Imagination in Vibrant Print! Elevate Your Brand With Precision and Quality at Usraya printing Press Where Imagination meets Imprints.</p>
          <div className='w-full my-3 flex flex-row gap-3 items-center'>
            <Button asChild className='w-full'>
              <Link href='/About'>Read More &rarr;</Link>
            </Button>            
            <Button asChild className='w-full bg-orange-500'>
              <Link href='/Contact'>Contact Us &darr;</Link>
            </Button>
          </div>
        </div>
        {/* hero text ends here */}

        {/* hero image starts */}
        <div className='relative h-96 w-72 overflow-hidden mx-auto md:w-full lg:mx-3 lg:h-[34.375rem]'>
          <Image 
            src={ HeroImage }
            alt ='hero-image'
            fill
            priority
            className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroPage;
