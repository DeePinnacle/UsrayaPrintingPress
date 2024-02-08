import { ReactNode } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
type HeaderProps = {
    image: StaticImport,
    text: string
}
const Header = ({ image, text }:HeaderProps) => {
    return (
        <div className='relative w-full h-64 overflow-hidden lg:h-96'>
            <Image 
                src = { image }
                alt ="Header Image"
                fill = { true }
                priority
                className = 'object-cover'
            />
            <div className='absolute inset-0 h-full w-full bg-black/50'>
                <h1 className='absolute text-center text-3xl text-muted-foreground font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:text-7xl'>{ text }</h1>
            </div>
        </div>
    )
}
export default Header;