'use client';

import { useTranslations } from 'next-intl';
import { motion, easeOut } from 'framer-motion';
import { useState } from 'react';
import { Button, Input, Textarea } from "@heroui/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function Contact() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: t('contact.info.email.value'),
      description: t('contact.info.email.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: t('contact.info.phone.value'),
      description: t('contact.info.phone.description'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      details: t('contact.info.address.value'),
      description: t('contact.info.address.description'),
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-divider rounded-full px-4 py-2 text-sm font-medium text-primary">
              <MessageCircle className="w-4 h-4" />
              {t('contact.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight py-2"
          >
            {t('contact.title')}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
           {/* Contact Form */}
           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             className="order-2 lg:order-1 h-full flex flex-col"
           >
             <motion.div variants={itemVariants} className="mb-8">
               <h3 className="text-3xl font-bold mb-4 text-foreground">
                 {t('contact.form.title')}
               </h3>
               <p className="text-muted-foreground text-lg">
                 {t('contact.form.subtitle')}
               </p>
             </motion.div>

             <motion.form
               variants={itemVariants}
               onSubmit={handleSubmit}
               className="space-y-6 flex-1 flex flex-col"
             >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Input
                   type="text"
                   label={t('contact.form.name')}
                   placeholder={t('contact.form.namePlaceholder')}
                   value={formData.name}
                   onChange={(e) => handleInputChange('name', e.target.value)}
                   className="w-full"
                   variant="bordered"
                   classNames={{
                     input: "text-foreground",
                     inputWrapper: "border-divider/50 hover:border-primary focus-within:border-primary"
                   }}
                 />
                 <Input
                   type="email"
                   label={t('contact.form.email')}
                   placeholder={t('contact.form.emailPlaceholder')}
                   value={formData.email}
                   onChange={(e) => handleInputChange('email', e.target.value)}
                   className="w-full"
                   variant="bordered"
                   classNames={{
                     input: "text-foreground",
                     inputWrapper: "border-divider/50 hover:border-primary focus-within:border-primary"
                   }}
                 />
               </div>

               <Input
                 type="text"
                 label={t('contact.form.company')}
                 placeholder={t('contact.form.companyPlaceholder')}
                 value={formData.company}
                 onChange={(e) => handleInputChange('company', e.target.value)}
                 className="w-full"
                 variant="bordered"
                 classNames={{
                   input: "text-foreground",
                   inputWrapper: "border-divider/50 hover:border-primary focus-within:border-primary"
                 }}
               />

               <Textarea
                 label={t('contact.form.message')}
                 placeholder={t('contact.form.messagePlaceholder')}
                 value={formData.message}
                 onChange={(e) => handleInputChange('message', e.target.value)}
                 className="w-full flex-1"
                 variant="bordered"
                 minRows={5}
                 classNames={{
                   input: "text-foreground",
                   inputWrapper: "border-divider/50 hover:border-primary focus-within:border-primary"
                 }}
               />

               <Button
                 type="submit"
                 className="w-full bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg py-6 rounded-2xl"
                 size="lg"
               >
                 Send Message
                 <Send className="ml-2 w-5 h-5" />
               </Button>
             </motion.form>
           </motion.div>

           {/* Contact Information */}
           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             className="order-1 lg:order-2 h-full flex flex-col"
           >
             <motion.div variants={itemVariants} className="mb-8">
               <h3 className="text-3xl font-bold mb-4 text-foreground">
                 {t('contact.info.title')}
               </h3>
               <p className="text-muted-foreground text-lg">
                 {t('contact.info.subtitle')}
               </p>
             </motion.div>

             {/* Contact Info Cards */}
             <div className="space-y-6 flex-1 flex flex-col justify-center">
               {contactInfo.map((info, index) => (
                 <motion.div
                   key={index}
                   variants={itemVariants}
                   className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-xl border border-divider/50 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                 >
                   <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}>
                     <info.icon className="w-6 h-6 text-white" />
                   </div>
                   <div className="flex-1">
                     <h4 className="text-lg font-semibold text-foreground mb-1">
                       {info.title}
                     </h4>
                     <p className="text-primary font-medium mb-1">
                       {info.details}
                     </p>
                     <p className="text-muted-foreground text-sm">
                       {info.description}
                     </p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>

         {/* Full Width Sections */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Social Media Links */}
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             className="lg:col-span-2"
           >
             <motion.div variants={itemVariants} className="text-center mb-8">
               <h4 className="text-3xl font-bold mb-4 text-foreground">
                 {t('contact.social.title')}
               </h4>
               <p className="text-muted-foreground text-lg mb-8">
                 {t('contact.social.subtitle')}
               </p>
               <div className="flex justify-center gap-6">
                 {socialLinks.map((social, index) => (
                   <motion.a
                     key={index}
                     href={social.href}
                     whileHover={{ y: -5, scale: 1.1 }}
                     className="w-16 h-16 bg-background/80 backdrop-blur-xl border border-divider/50 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                     aria-label={social.label}
                   >
                     <social.icon className="w-8 h-8" />
                   </motion.a>
                 ))}
               </div>
             </motion.div>
           </motion.div>

           {/* Office Hours */}
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             className="lg:col-span-2"
           >
             <motion.div variants={itemVariants} className="bg-gradient-to-br from-background/50 via-background/30 to-primary/5 dark:from-background/50 dark:via-background/30 dark:to-primary/5 rounded-3xl p-12 border border-divider/20 text-center">
               <h4 className="text-3xl font-bold mb-6 text-foreground">
                 {t('contact.hours.title')}
               </h4>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                 <div className="space-y-2">
                   <h5 className="text-lg font-semibold text-foreground">{t('contact.hours.weekdays')}</h5>
                   <p className="text-muted-foreground">{t('contact.hours.weekdaysTime')}</p>
                 </div>
                 <div className="space-y-2">
                   <h5 className="text-lg font-semibold text-foreground">{t('contact.hours.saturday')}</h5>
                   <p className="text-muted-foreground">{t('contact.hours.saturdayTime')}</p>
                 </div>
                 <div className="space-y-2">
                   <h5 className="text-lg font-semibold text-foreground">{t('contact.hours.sunday')}</h5>
                   <p className="text-muted-foreground">{t('contact.hours.sundayTime')}</p>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {t('contact.cta.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('contact.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
                size="lg"
              >
                {t('contact.cta.primaryButton')}
                <Phone className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="bordered" 
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
                size="lg"
              >
                {t('contact.cta.secondaryButton')}
                <Globe className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
