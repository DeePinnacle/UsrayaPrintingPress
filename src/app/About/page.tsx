import { Metadata } from 'next';
import Header from "../_components/Header";
import HeaderImage from '/public/bizcard.jpg';
import GenWrapper from "@/components/GenWrapper";
import Link from 'next/link';
import  { 
            Mail, 
            PhoneCall  
        } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AboutImage from '/public/HeroImage-01.webp';
import { data } from '@/config/data';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import TagHeader from '@/components/TagHeader';
import { Teams } from '@/config/team';


export const metadata: Metadata = {
    title: "About Usraya",
    description: "Printing Press in FCT, Abuja",
  };

const About = () => {
    const image = HeaderImage;
    const text = 'About Us'
    return (
        <div>
            <Header image = { image } text = { text } />
            <GenWrapper>
            {/* flex inner container */}
            <div className='w-full max-w-4xl my-3 lg:max-w-7xl'>
                <div className='md:grid grid-cols-2 gap-3 lg:max-w-5xl lg:mx-auto'>
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
                <div className='my-8 p-2 md:grid md:grid-cols-3 md:gap-3 lg:max-w-5xl lg:mx-auto'>
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
                <div className='bg-primary w-full px-2 py-10 mx-auto lg:max-w-5xl'>
                    <div className='w-full md:grid md:grid-cols-2 md:gap-3 md:items-center'>
                        <div className='w-64 h-64 mx-auto bg-slate-50 rounded-full border-8 border-solid border-orange-300 flex flex-col items-center justify-center'>
                            <p className='text-muted-foreground text-5xl text-center font-bolder'>Our <br /> Story</p>
                            <p className='text-orange-500 text-center my-3'>How we started!</p>
                        </div>
                        <div className='my-3 mx-auto p-2'>
                            <p className='text-muted-foreground'>
                                In the quiet hum of machinery, our story began-a journey etched in ink and bounded by passion. Founded in the year 2023, our printing press emerged from the vision <br />
                                of Usraya, a dream to transform ideas into tangible expressions. Starting with modest equipment and unwavering determination, we embraced the challenge of translating creativity onto paper.
                                As the years unfolded, our commitment to quality and innovation propelled us forward. Today, we stand as a testment to the humble beginnings that sparked a printing revolution.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 flex flex-col items-center'>
                    <TagHeader headerText = 'Our Team ' Tagline='Crafting Impressions, One Print at a Time: Meet the Team Behind Your Vision.' />
                    <div className='max-w-5xl w-full bg-slate-100 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-4 lg:gap-3 lg:max-w-7xl'>
                        {
                            Teams.map((team, index)=>(
                                <div key = {index} className='bg-slate-50 px-2 py-8 my-3 rounded-lg shadow-md'>
                                    <div className=''>
                                        <div className='relative w-28 h-28 rounded-full overflow-hidden mx-auto'>
                                            <Image 
                                                src = { team.image }
                                                alt="Team Image"
                                                fill= {true}
                                                priority
                                                className='object-fit'
                                            />
                                        </div>
                                        <div className='p-2 my-3'>
                                            <h1 className='text-muted-foreground text-center my-3 text-md'>{team.name}</h1>
                                            <p className='font-bold text-muted-foreground text-center text-lg'>{team.role}</p>
                                        </div>
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-center text-muted-foreground'>{team.content}</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-5 my-3'>
                                        <FaEnvelope className='text-muted-foreground' />
                                        <FaInstagram className='text-muted-foreground' />
                                        <FaFacebook className='text-muted-foreground' />
                                        <FaWhatsapp className='text-muted-foreground' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </GenWrapper>   
        </div>
    )
}
export default About;