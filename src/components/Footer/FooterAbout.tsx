import React from 'react';
import Link from 'next/link';
const FooterAbout = () => {
  return (
    <div className='p-2 my-2'>
        <h1 className='text-orange-100 text-xl font-extrabold'>Usraya Printing Press</h1>
        <p className='my-3 text-orange-100'>
          At Usraya Printing Press, we&apos;re more than just a printing press, we&apos;re a team of dedicated professionals passionate about transforming your concepts into tangible, eye-catching prints. With years of experience, state-of-the-art technology, and commitment to excellence, we take pride in being your reliable partner for all your printing needs.
        </p>
        <Link href='/About'>
            <div className='hero-btn-2 bg-orange-100 w-full py-3 px-6 rounded-lg '>
                <p className='text-orange-500 text-center hover:text-orange-500'>Read More</p>
            </div>
        </Link>
    </div>
  )
}

export default FooterAbout
