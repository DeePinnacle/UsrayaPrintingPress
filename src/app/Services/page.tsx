import { Metadata } from 'next';
import React from 'react';
import Header from '../_components/Header';
import HeaderImage from '/public/paperbag.jpg';
import { servicesdb } from '@/config/servicesdb';
import Image from 'next/image';
import TagHeader from '@/components/TagHeader';
import { features } from '@/config/features';
import CTA from '@/components/CTA';
import Testimonies from '@/components/Testimonies';
import PrintingProcess from '@/components/PrintingProcess';

export const metadata: Metadata = {
  title: "Our Services",
  description: "T-shirt Printing, Mug printing, Jotter Printing, Banner design, Logo design"
}

const page = () => {
    const image = HeaderImage;
    const text = 'Our Services';
    const headerTagline = 'What We Do';
    const Tagline = 'We provide top-notch and dynamic service. Elevate your vision with precision printing excellence.'
  return (
    <div>
        <Header image = { image } text = { text } />
        <div className='mx-auto max-w-4xl'>
          <TagHeader headerTagline={headerTagline} Tagline={Tagline} />
        </div>
        <div className='w-full my-5 px-4 py-2 mx-auto md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-4 lg:gap-3'>
            {
              servicesdb.map((service, index)=>(
                <div className="w-full my-3" key={ index }>
                  <div className='relative overflow-hidden h-56 w-full'>
                    <Image 
                      src={service.image} 
                      alt="Service Image"
                      fill 
                      priority  
                      className='object-cover'
                    />
                  </div>
                  <div className='bg-white px-2 py-10 shadow-md'>
                    <p className='text-orange-500 text-center text-2xl font-bold my-5'>{ service.title }</p>
                    <p className='text-center text-muted-foreground my-5'>{ service.content }</p>
                  </div>
                </div>
              ))
            }
        </div>
        <div className='w-full max-w-4xl my-5 p-2 mx-auto'>
          <TagHeader headerText={'Our Features'} headerTagline={'Why choose Usraya Printing Press'} Tagline ={'Explore the Features That Set Us Apart in Crafting Your Imprints with Unrivaled Quality and Innovation.'} />
          <div className='p-2 md:grid md:grid-cols-3 md:gap-3'>
              {
                features.map((feature, index)=>(
                  <div className="w-full bg-primary px-3 py-4 my-3" key={ index }>
                    <div className='w-16 h-16 p-2 my-5 flex items-center justify-center mx-auto'>
                      { <feature.icon className='h-14 w-14 text-orange-500' /> }
                    </div>
                    <div className='w-full p-2'>
                      <p className='text-muted-foreground text-xl font-bold text-center'>{ feature.title }</p>
                      <p className='text-muted-foreground max-w-prose my-5 text-center'>{ feature.description }</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
        <PrintingProcess />
        <CTA />
        <Testimonies />
    </div>
  )
}

export default page