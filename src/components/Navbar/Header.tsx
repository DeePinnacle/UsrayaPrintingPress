"use client";
import Logo from "./Logo";
import ToggleOpenBtn from "./ToggleOpenBtn";
import ToggleCloseBtn from "./ToggleCloseBtn";
import Navbar from "./Navbar";
import { useState } from 'react';

const Header = () => {
    const [ toggle, setToggle ] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='bg-orange-300 w-full min-h-16'>
            <div className='flex flex-row justify-between items-center p-2 md:hidden'>
                <Logo />
                {
                    toggle ? (<ToggleCloseBtn handleToggle = {handleToggle} />)
                           : (<ToggleOpenBtn handleToggle = { handleToggle } />)
                }
            </div>
            <div className={`${toggle ? 'block' : 'hidden'}`}>
                <Navbar />
            </div>
            <div className='bg-primary p-2 w-full hidden md:block'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;