import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link'
const TopContact = () => {
  return (
    <div className='bg-orange-500 p-3 md:flex flex-row justify-around'>
      <div className='flex flex-row items-center gap-2'>
        <MapPin className='text-primary h-5' />
        <p className='text-primary'>Kubwa, phase 4, Fed Housing</p>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <Mail className='text-primary h-5' />
        <Link href='mailto:odinakainnovation@gmail.com' className='text-primary'>usrayaprintingpress@gmail.com</Link>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <Phone className='text-primary h-5' />
        <Link href='tel:+234-1234-567-890' className='text-primary'>Phone: +234-1234-567-890</Link>
      </div>
    </div>
  )
}

export default TopContact;