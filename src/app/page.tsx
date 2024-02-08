import AboutSection from "@/components/AboutSection";
import HeroPage from "@/components/HeroPage";
import ServiceSection from "@/components/ServiceSection";
import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import FAQs from '@/components/FAQs';
import PrintingProcess from '@/components/PrintingProcess';
import Usraya from "@/components/Usraya";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroPage />
      <AboutSection />
      <ServiceSection />
      <CTA />
      <PrintingProcess />
      <Portfolio />
      <FAQs />
      <Usraya />
      <Testimonies />
      <Footer />
    </div>
  );
}

