'use client'
import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TestimoniesData } from '@/config/testimoniesData';

const Testimonies = () => {
  return (
    <div className="p-2 bg-primary lg:py-32">
      <div className="my-5">
        <h1 className="font-bold text-xl text-center text-muted-foreground lg:text-4xl">
          What Our <span>Customers</span> Have To Say
        </h1>
        <p className="text-center my-3 text-muted-foreground lg:text-normal">
          Hear What Our Satisfied Customers Have to Say. Discover Why Usraya is Their Trusted Choice For Printing Excellence.
        </p>
      </div>
      {/* testimonial wrapper */}
      <div className="testimonial-wrapper my-5 p-2 md:w-4/5 md: mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {TestimoniesData.map((item, index) => (
            <SwiperSlide key={index}>
              {/* slider containere starts here */}
              <div className="bg-primary rounded-md p-3 shadow-md border border-solid border-slate-800">
                <div className="w-24 h-24 relative overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt="Tesstimonial Image"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-2 my-3">
                  <h1 className="font-bold text-muted-foreground">{item.name}</h1>
                  <p className="my-3 text-muted-foreground">{item.testimony}</p>
                  <div className="stars-wrapper flex flex-row gap-2">
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                  </div>
                </div>
              </div>
              {/* slider container ends here */}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* navigation buttons */}
        <div className="btn-wrapper lg:mt-5">
          {/* left arrow navigation */}
          <div className="swiper-button-prev swiper-arrow md:!left-1/4 lg:!left-1/3">
            &larr;
          </div>
          {/* right arrow navigation */}
          <div className="swiper-button-next text-red-500 w-14 h-14 p-2 swiper-arrow md:!right-1/4 lg:!right-1/3">
            &rarr;
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      {/* testimonial wrapper ends here */}
    </div>
  );
};

export default Testimonies;
