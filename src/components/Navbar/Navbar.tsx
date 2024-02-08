import { Navitems } from '@/config/NavItems';
import Link from 'next/link';
import Logo from './Logo';
const Navbar = () => {
    return (
        <nav className='w-11/12 bg-primary flex flex-row items-center justify-around mx-auto shadow-md md:shadow-none'>
            <div className='hidden md:block'>
                <Logo />
            </div>
            <ul className='Navbar-list md:flex flex-row items-center'>
                {
                    Navitems.map((link, index)=>(
                    <li key={ index } className='list'>
                        <Link href={link.link} className='anchor'>{link.Link_Title}</Link>
                    </li>

                    ))
                }
            </ul>
        </nav>
    )
}
export default Navbar;