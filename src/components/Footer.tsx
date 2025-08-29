'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@heroui/react";
import { useTranslations } from 'next-intl';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github, 
  ArrowUp,
  Heart,
  Globe,
  Code,
  Smartphone,
  Palette,
  Server
} from "lucide-react";
import Logo from '../assets/logo.png';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Web Development", icon: Globe },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Custom Software", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Backend Development", icon: Server }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-foreground/5 via-foreground/10 to-primary/5 dark:from-foreground/10 dark:via-foreground/20 dark:to-primary/10 border-t border-divider/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
                             <div className="flex items-center gap-3 mb-6">
                 <img
                   src={Logo.src}
                   alt="Sruvi Logo"
                  
                   className="h-10 w-auto"
                   style={{ imageRendering: 'crisp-edges' }}
                 
                 />
               </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 bg-background/80 backdrop-blur-sm border border-divider/50 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground mb-6">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground mb-6">{t('footer.services')}</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground mb-6">{t('footer.contactInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">hello@incsruvi.com</p>
                    <p className="text-muted-foreground text-sm">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">+91 9731171611</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri 9am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">No 99, 3rd floor</p>
                    <p className="text-muted-foreground text-sm">PoornaPragna Layout, BSK 3rd stage</p>
                    <p className="text-muted-foreground text-sm">Bengaluru-560070</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-t border-divider/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground mb-4">
              {t('footer.newsletter.title')}
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-8">
              {t('footer.newsletter.subtitle')}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-background/80 backdrop-blur-sm border border-divider/50 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <Button
                className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg hover:shadow-primary/25 transition-all duration-300 px-6 py-3 rounded-xl"
              >
                {t('footer.newsletter.button')}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-divider/30 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground">
            <span>{t('footer.copyright')}</span>
            <span>•</span>
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>{t('footer.inIndia')}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-300">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-300">
              {t('footer.terms')}
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors duration-300">
              {t('footer.cookies')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3, scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
