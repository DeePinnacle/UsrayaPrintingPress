'use client'
import React from 'react'
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from  '@heroicons/react/24/outline';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Image from 'next/image';
import TestimonialImage from '/public/driver-01.png';
// import Swiper, { SwiperOptions } from 'swiper';
// import { register } from 'swiper/element/bundle';
// import { SwiperSlideProps } from 'swiper/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef, useState, useEffect, ReactNode, RefObject } from 'react'

// register(); 

// type Kebab<
//   T extends string,
//   A extends string = '',
// > = T extends `${infer F}${infer R}`
//   ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
//   : A;


// type KebabObjectKeys<T> = {
//   [key in keyof T as Kebab<key & string>]: T[key] extends Object
//     ? KebabObjectKeys<T[key]>
//     : T[key];
// };

// type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'swiper-container': SwiperContainerAttributes;
//       'swiper-slide': SwiperSlideAttributes;
//     }

//     interface SwiperContainerAttributes extends KebabObjectKeys<SwiperOptions> {
//       ref?: RefObject<SwiperRef>;
//       children?: ReactNode;
//     }
//     interface SwiperSlideAttributes extends KebabObjectKeys<SwiperSlideProps> {}
//   }
// }

// const swiperParams = { 
//     slidePerView: 1,
//     spaceBetween: 10,
//     breakpoints : {
//     640: {
//         slidesPerView: 2,
//         spaceBetween: 40
//     },
//     1024: {
//         slidesPerView: 3,
//         spaceBetween: 40
//     }
//     }
// }

const TestimonySection = () => {
    const swiperRef = useRef(null)
    const swiper = useSwiper();

    const sliderItems = [
        {
            id: 1,
            name: 'Robert Downey Jr',
            testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae molestias delectus earum.consectetur adipisicing elit.consectetur adipisicing elit.',
            img: TestimonialImage,
            stars: [ 
                    <FaStar key={ 1 } style={{color: 'yellow'}} />, 
                    <FaStar key = { 2 } style={{color: 'yellow'}}  />, 
                    <FaStar key = { 3 } style={{color: 'yellow'}} />, 
                    <FaStar key = { 4 } style={{color: 'yellow'}} />,
                    <FaStar key = { 5 } style={{color: 'yellow'}} /> 
                ]
        },
        {
            id: 2,
            name: 'Clark Kent',
            testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae molestias delectus earum.consectetur adipisicing elit.consectetur adipisicing elit.',
            img: TestimonialImage,
            stars: [ 
                <FaStar key={ 1 } style={{color: 'yellow'}} />, 
                <FaStar key = { 2 } style={{color: 'yellow'}}  />, 
                <FaStar key = { 3 } style={{color: 'yellow'}} />, 
                <FaStarHalfAlt key = { 4 } style={{color: 'yellow'}} />,
                <FaStarHalfAlt key = { 5 } style={{color: 'yellow'}} /> 
            ]
        },
        {
            id: 3,
            name: 'Alabama Boy',
            testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae molestias delectus earum.consectetur adipisicing elit.consectetur adipisicing elit.',
            img: TestimonialImage,
            stars: [ 
                <FaStar key={ 1 } style={{color: 'yellow'}} />, 
                <FaStar key = { 2 } style={{color: 'yellow'}}  />, 
                <FaStar key = { 3 } style={{color: 'yellow'}} />, 
                <FaStar key = { 4 } style={{color: 'yellow'}} />,
                <FaStarHalfAlt key = { 5 } style={{color: 'yellow'}} /> 
            ]
        },
        {
            id: 4,
            name: 'Mohbad JTC',
            testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae molestias delectus earum.consectetur adipisicing elit.consectetur adipisicing elit.',
            img: TestimonialImage,
            stars: [ 
                <FaStar key={ 1 } style={{color: 'yellow'}} />, 
                <FaStar key = { 2 } style={{color: 'yellow'}}  />, 
                <FaStar key = { 3 } style={{color: 'yellow'}} />, 
                <FaStar key = { 4 } style={{color: 'yellow'}} />,
                <FaStar key = { 5 } style={{color: 'yellow'}} /> 
            ]
        },
        {
            id: 5,
            name: 'Binafa',
            testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae molestias delectus earum.consectetur adipisicing elit.consectetur adipisicing elit.',
            img: TestimonialImage,
            stars: [ 
                <FaStar key={ 1 } style={{color: 'yellow'}} />, 
                <FaStar key = { 2 } style={{color: 'yellow'}}  />, 
                <FaStar key = { 3 } style={{color: 'yellow'}} />, 
                <FaStar key = { 4 } style={{color: 'yellow'}} />,
                <FaStarHalfAlt key = { 5 } style={{color: 'yellow'}} /> 
            ]
        },
        {
            id: 6,
            name: 'Big Ice Cube',
            testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae molestias delectus earum.consectetur adipisicing elit.consectetur adipisicing elit.',
            img: TestimonialImage,
            stars: [ 
                <FaStar key={ 1 } style={{color:'yellow'}} />, 
                <FaStar key = { 2 } style={{color:'yellow'}}  />, 
                <FaStar key = { 3 } style={{color:'yellow'}} />, 
                <FaStar key = { 4 } style={{color:'yellow'}} />,
                <FaStar key = { 5 } style={{color:'yellow'}} /> 
            ]
        }
    ]

  return (
    <div className='p-2 bg-blue-100 lg:py-32'>
        <div className='my-5'>
            <h1 className='font-bold text-xl text-center lg:text-4xl'>What Our <span className='text-blue-500'>Customers</span> Have To Say</h1>
            <p className='text-center my-3 lg:text-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima sint.</p>
        </div>
          {/* testimonial wrapper */}
          <div className='testimonial-wrapper my-5 p-2 md:w-4/5 md: mx-auto'>
              <Swiper
                 ref = { swiperRef }
                 slidesPerView = { 1 }
                 spaceBetween =  { 10 }
                 breakpoints = {{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
                loop = { true }
                autoplay = {{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation = {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination = {{
                    el:'.swiper-pagination',
                    clickable: true,
                }}
                modules = {[Autoplay, Pagination, Navigation]}
                className = 'mySwiper'
              >
              {sliderItems.map((item) => (
                  <SwiperSlide key={item.id}>
                      {/* slider containere starts here */}
                      <div className='bg-slate-50 rounded-md p-3 shadow-md'>
                          <div className='w-24 h-24 relative overflow-hidden rounded-full'>
                              <Image src={item.img} alt='Tesstimonial Image' fill={true} style={{ objectFit: 'cover' }} />
                          </div>
                          <div className='p-2 my-3'>
                              <h1 className='font-bold'>{item.name}</h1>
                              <p className='my-3'>{item.testimony}</p>
                              <div className='stars-wrapper flex flex-row gap-2'>
                                  {item.stars}
                              </div>
                          </div>
                      </div>
                      {/* slider container ends here */}
                  </SwiperSlide>
              ))}
            </Swiper>
          {/* navigation buttons */}
          <div className='btn-wrapper lg:mt-5'>
              {/* left arrow navigation */}
              <div className='swiper-button-prev swiper-arrow md:!left-1/4 lg:!left-1/3'>
                  <ArrowLeftIcon className='!h-4 text-blue-500' />
              </div>
              {/* right arrow navigation */}
              <div className='swiper-button-next w-14 h-14 p-2 swiper-arrow md:!right-1/4 lg:!right-1/3'>
                  <ArrowRightIcon className='!h-4 text-blue-500' />
              </div>
             <div className='swiper-pagination'></div>
          </div>
      </div>
        {/* testimonial wrapper ends here */}
    </div>
  )
}

export default TestimonySection