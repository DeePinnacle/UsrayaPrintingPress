import { Metadata } from 'next';
import Flyer from '/public/flyer.jpg';
import Header from '../_components/Header';
import AboutSection from '@/components/AboutSection';
import FAQs from '@/components/FAQs';
import CTA from '@/components/CTA';
import Usraya from '@/components/Usraya';

export const metadata: Metadata = {
    title: "FAQs",
    description: "Frequently asked questions, printing press, Abuja"
}

const FAQsPage = () => {
    const image = Flyer;
    const text = 'Frequently Asked Questions'
    return (
        <>
            <Header text = {text} image = {image} />
            <Usraya />
            <FAQs />
            {/* <AboutSection /> */}
            <CTA />
        </>
    )
}

export default FAQsPage;