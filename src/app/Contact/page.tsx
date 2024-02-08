import { Metadata } from 'next';
import Header from "../_components/Header";
import ContactHeaderImage from '/public/T-shirt-01.jpg';
import ContactImage from '/public/newUser4.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Phone,
    MapPin,
    MailOpen,
    HelpCircle,
    MailPlus,
    Users
} from 'lucide-react';
import {
    FaFacebook,
    FaWhatsapp,
    FaInstagram
} from 'react-icons/fa'


export const metadata: Metadata = {
    title: "Contact Us",
    description : "Contact us, printing press, Abuja"
}

const ContactUs = () => {
    const image = ContactHeaderImage 
    const text = 'Get In Touch'
    return (
        <div>
            <Header image={image} text={text} />
            <div className='w-full px-2 py-14 flex flex-col items-center justify-center'>
                <div className='w-full max-w-5xl shadow-lg rounded-lg bg-slate-50 mt-2 mb-8 mx-auto md:grid md:grid-cols-2'>
                    <div className='relative overflow-hidden w-full h-96 rounded-lg md:h-[59.375rem]'>
                        <Image 
                            src={ContactImage}
                            alt = "Contact image"
                            fill={true}
                            priority
                            className='object-cover'
                        />
                    </div>
                    <div className='my-3 p-2'>
                        <h1 className='text-orange-500 text-xl text-center font-bold'>Connecting Always</h1>
                        <h1 className='text-5xl text-center font-bold my-3 leading-normal'>Actively Available 24/7</h1>
                        <p className='text-muted-foreground my-3 text-center'>Our team is available to help with your enquiries on email & phone, or visit our place.</p>
                        <div className='my-3 bg-white border border-solid border-slate-300 px-2 py-5 rounded-lg'>
                            <div className='px-2 py-5 border-b border-solid border-primary'>
                                <h1 className='text-2xl font-bold text-primary'>Quick  Contact</h1>
                                <div className='flex flex-row gap-3 my-3 items-center'>
                                    <div className='flex items-center justify-center h-14 w-14 rounded-full bg-orange-500'>
                                        <Phone className='text-orange-200' />
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-primary font-bold mb-1 text-lg'>Office Line</p>
                                        <Link href='tel:+123-4567-890' className='text-muted-foreground'>+123-4567-890</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 py-5 border-b border-solid border-primary'>
                                <h1 className='text-2xl font-bold text-primary'>Email Address</h1>
                                <div className='flex flex-row gap-3 my-3 items-center'>
                                    <div className='flex items-center justify-center h-14 w-14 rounded-full bg-orange-500'>
                                        <MailOpen className='text-orange-200' />
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-primary font-bold mb-1 text-lg'>Mail to</p>
                                        <Link href='mailto:info@example.com' className='text-muted-foreground'>info@example.com</Link>
                                    </div>
                                </div>
                            </div>
                           
                            <div className='px-2 py-5 border-b border-solid border-primary'>
                                <h1 className='text-2xl font-bold text-primary'>Address/Location</h1>
                                <div className='flex flex-row gap-3 my-3 items-center'>
                                    <div className='flex items-center justify-center h-14 w-14 rounded-full bg-orange-500'>
                                        <MapPin className='text-orange-200' />
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-primary font-bold mb-1 text-lg'>Visit Us At</p>
                                        <p className='text-muted-foreground'>Suleja, Niger State</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 py-5 border-b border-solid border-primary'>
                                <h1 className='text-2xl font-bold text-primary'>Follow Us on</h1>
                                <div className='flex flex-row gap-3 my-3 items-center'>
                                    <Link href='#'><FaInstagram className='h-7 w-7 cursor-pointer' /></Link>
                                    <Link href='#'><FaFacebook className='h-7 w-7 cursor-pointer' /></Link>
                                    <Link href='#'><FaWhatsapp className='h-7 w-7 cursor-pointer' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-5xl shadow-lg rounded-lg bg-slate-50 mx-auto p-2 md:grid md:grid-cols-3 md:gap-3'>
                    <div className='bg-white px-2 my-4 rounded-lg py-14 h-[34.375rem]'>
                        <div className='bg-orange-500 h-24 w-24 mx-auto mb-8 rounded-full flex flex-row items-center justify-center'>
                            <MailPlus className='text-white h-12 w-12 font-light' />
                        </div>
                        <h1 className='text-center text-2xl font-bold'>Chat With Us 24/7</h1>
                        <p className='text-center text-xl font-extralight text-muted-foreground my-8 leading-normal'>Let&apos;s chat with our active experts to get answer your questions.</p>
                        <div className='w-4/5 mx-auto mt-20'>
                            <Button asChild className='w-full' size='lg'>
                                <Link href='tel:+1234-567-8900'>Chat Now</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='bg-white px-2 my-4 rounded-lg py-14 h-[34.375rem]'>
                        <div className='bg-orange-500 h-24 w-24 mx-auto mb-8 rounded-full flex flex-row items-center justify-center'>
                            <Users className='text-white h-12 w-12 font-light' />
                        </div>
                        <h1 className='text-center text-2xl font-bold'>Work With Us</h1>
                        <p className='text-center text-xl font-extralight text-muted-foreground my-8 leading-normal'>Contact Usraya Printing Press for all printing job. If you can think it we can print it.</p>
                        <div className='w-4/5 mx-auto mt-12'>
                            <Button asChild className='w-full' size='lg'>
                                <Link href='mailto:info@example.com'>Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='bg-white px-2 my-4 rounded-lg py-14 h-[34.375rem]'>
                        <div className='bg-orange-500 h-24 w-24 mx-auto mb-8 rounded-full flex flex-row items-center justify-center'>
                            <HelpCircle className='text-white h-12 w-12 font-light' />
                        </div>
                        <h1 className='text-center text-2xl font-bold'>Usraya FAQs</h1>
                        <p className='text-center text-xl font-extralight text-muted-foreground my-8 leading-normal'>You can find the answers in our list of frequently asked questions.</p>
                        <div className='w-4/5 mx-auto mt-12'>
                            <Button asChild className='w-full' size='lg'>
                                <Link href='/FAQs'>Get Answers</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;