import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'
const FooterContacts = () => {
  return (
    <div className='my-2 p-2'>
      <h1 className='text-blue-100 text-xl font-extrabold'>Contact Info</h1>
      <p className='text-blue-100 my-3'>Lorem ipsum, dolor sit. Asperiores tempora accusantium corrupti.</p>
      <ul className='my-2'>
        <li className='my-3 text-blue-100 flex flex-row gap-3 items-center cursor-pointer'>
          <MapPin className='h-6 text-blue-100' />
          <p>Kubwa, FCT, Abuja</p>
        </li>
        <li className='my-3 text-blue-100 flex flex-row gap-3 items-center cursor-pointer'>
          <Mail className='h-6 text-blue-100' />
          <Link href='mailto:officialdeepinnacle@gmail.com'>odinaka@innovation.com</Link>
        </li>
        <li className='my-3 text-blue-100 flex flex-row gap-3 items-center cursor-pointer'>
          <Phone className='h-6 text-blue-100' />
          <Link href='tel:+234-816-0478-162'>+234-816-0478-162</Link>
        </li>
      </ul>
      <div className='social-media-container my-4 flex flex-row gap-3'>
        <Link href='/'><FaInstagram className='font-style text-orange-100' /></Link> 
        <Link href='/'><FaWhatsapp className='font-style text-orange-100' /></Link>
        <Link href='/'><FaFacebook className='font-style text-orange-100' /></Link>
      </div>
    </div>
  )
}

export default FooterContacts