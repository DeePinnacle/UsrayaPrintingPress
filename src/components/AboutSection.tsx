import GenWrapper from "./GenWrapper";
import TagHeader from "./TagHeader";
import Link from 'next/link';
import  { 
            Mail, 
            PhoneCall  
        } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AboutImage from '/public/HeroImage-01.webp';
import { data } from '@/config/data';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const AboutSection = () => {
    const headerText='About Us';
    const headerTagline = 'Who We Are';
    const Tagline="Crafting Impressions, Inspiring Connections: Where Precision Meets Passion.";
    return (
        <GenWrapper>
            <TagHeader headerText={headerText} headerTagline={headerTagline} Tagline={Tagline} />
            {/* flex inner container */}
            <div className='w-full max-w-4xl my-3'>
                <div className='md:grid grid-cols-2 gap-3'>
                    {/* about text starts */}
                    <div className='px-2 py-5 bg-slate-50 rounded-md'>
                        <p className='max-w-prose leading-relaxed'>
                            <span className='text-4xl font-bold'>At</span> <span className='font-bold text-xl text-orange-500'>Usraya Printing Press, 
                            </span> we&apos;re more than just a printing press, 
                            we&apos;re a team of dedicated professionals passionate about transforming your concepts into tangible, eye-catching prints.
                            With years of experience, state-of-the-art technology, and commitment to excellence, we take pride in being your reliable partner for all your printing needs.
                        </p>
                        <div className='my-2'>
                            <p className='text-muted-foreground my-2 flex flex-row items-center gap-3'>
                                <Mail />
                                <Link href='mailto:example@gmail.com'>example@gmail.com</Link>
                            </p>
                            <p className='text-muted-foreground flex flex-row items-center gap-3'>
                                <PhoneCall />
                                <Link href='mailto:example@gmail.com'>+234-8123-456-678</Link>
                            </p>
                            <div className='my-2 flex flex-row gap-3 items-center'>
                                <Link href='#'><FaFacebook className='text-muted-foreground' /></Link>
                                <Link href='#'><FaInstagram className='text-muted-foreground' /></Link>
                                <Link href='#'><FaWhatsapp className='text-muted-foreground' /></Link>
                            </div>
                            <div className='w-full my-3 flex flex-row items-center'>                     
                                <Button asChild className='w-11/12'>
                                    <Link href='/About'>Read More &rarr;</Link>
                                </Button>            
                            </div>
                        </div>
                    </div>
                    {/* about text ends  */}
                    
                    {/* about image starts */}

                    <div className='relative h-72 w-72 overflow-hidden rounded-tr-3xl rounded-bl-3xl my-3 mx-auto  md:order-first'>
                        <Image 
                        src={AboutImage}
                        alt='about-us-image'
                        fill
                        priority
                        className='object-cover'
                        />
                    </div>
                    {/* about image ends */}
                </div>

                {/* mission and vision starts */}
                <div className='my-8 p-2 md:grid md:grid-cols-3 md:gap-3'>
                    {
                        data.map((item, index)=>(
                            <div key={ index } className='bg-orange-200 px-2 py-10 mx-auto my-3 rounded-lg'>
                                <div className='bg-orange-300 w-16 h-16 flex flex-row items-center justify-center mx-auto rounded-xl'>
                                    {<item.icon className='text-orange-500 h-24' />}
                                </div>
                                <p className='text-center my-8 text-muted-foreground font-bold text-2xl'>{ item.title }</p>
                                <p className="text-center my-4 leading-tight text-muted-foreground">{ item.description }</p>
                            </div>
                        ))
                    }
                </div>
                {/* mission and vision ends here */}
            </div>
        </GenWrapper>
    )
}
export default AboutSection;