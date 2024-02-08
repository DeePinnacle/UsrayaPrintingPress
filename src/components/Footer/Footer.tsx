import React from 'react';
import FooterAbout from './FooterAbout';
import FooterLink from  './FooterLink';
import FooterContacts from './FooterContacts'; 
const Footer = ()=> {
    return (
        <div className='footer-container bg-orange-500 p-2 py-10 lg:py-28'>
           {/* footer inner wrapper starts */}
           <div className='footer-wrapper p-2 md:grid md:grid-cols-3 md:justify-between'>
                {/* footer about */}
                <FooterAbout />
                {/* footer link */}
                <FooterLink />    
                {/* footer contacts */}
                <FooterContacts />
           </div>
           {/* footer inner wrapper ends */}
        </div>
    )
} 

export default Footer;