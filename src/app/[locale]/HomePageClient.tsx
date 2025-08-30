'use client'
import { useTranslations } from 'next-intl';
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function HomePageClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
