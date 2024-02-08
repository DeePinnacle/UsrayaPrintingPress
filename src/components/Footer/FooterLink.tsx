import React from 'react'
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
const FooterLink = () => {
  return (
    <div className='p-2 my-2 md:w-1/2 md:mx-auto'>
      <h1 className='text-orange-100 text-xl font-extrabold'>Quick Link</h1>
      <ul className='my-3'>
        <li className='my-3 text-orange-100 cursor-pointer flex flex-row items-center gap-3'>
          <MoveRight className='h-4 text-blue-100' />
          <Link href = '/'>Home</Link>
        </li>
        <li className='my-3 text-orange-100 cursor-pointer flex flex-row items-center gap-3'>
          <MoveRight className='h-4 text-blue-100' />
          <Link href = '/About'>About</Link>
        </li>
        <li className='my-3 text-orange-100 cursor-pointer flex flex-row items-center gap-3'>
          <MoveRight className='h-4 text-blue-100' />
          <Link href = '/Services'>Services</Link>
        </li>
        <li className='my-3 text-orange-100 cursor-pointer flex flex-row items-center gap-3'>
          <MoveRight className='h-4 text-blue-100' />
          <Link href = '/Features'>Features</Link>
        </li>
        <li className='my-3 text-orange-100 cursor-pointer flex flex-row items-center gap-3'>
          <MoveRight className='h-4 text-blue-100' />
          <Link href = '/FAQ'>FAQs</Link>
        </li>
        <li className='my-3 text-orange-100 cursor-pointer flex flex-row items-center gap-3'>
          <MoveRight className='h-4 text-blue-100' />
          <Link href = '/Contact'>Contacts</Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterLink