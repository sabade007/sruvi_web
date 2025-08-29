'use client'
import { useTranslations } from 'next-intl';
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio"; // New import
import Testimonials from "../../components/Testimonials"; // New import
import Contact from "../../components/Contact"; // New import
import Footer from "../../components/Footer"; // New import


export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
                   <Services />
             <About />
             <Portfolio /> {/* New component added */}
             <Testimonials /> {/* New component added */}
             <Contact /> {/* New component added */}
             <Footer /> {/* New component added */}
       
    </div>
  );
}
