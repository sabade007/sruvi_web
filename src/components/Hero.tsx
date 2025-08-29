'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Sparkles, Globe, Smartphone, Code, Zap, Star, Heart, Target, Shield } from "lucide-react";
import Logo from '@/assets/logo.png';

export default function Hero() {
  const t = useTranslations();

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
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  return (
         <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/5">
             {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
         {/* Light mode specific background elements */}
         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:hidden"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)] dark:hidden"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)] dark:hidden"></div>
         
         <motion.div
           className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
           animate={{
             x: [0, 100, 0],
             y: [0, -50, 0],
           }}
           transition={{
             duration: 20,
             repeat: Infinity,
             ease: "linear"
           }}
         />
         <motion.div
           className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
           animate={{
             x: [0, -100, 0],
             y: [0, 50, 0],
           }}
           transition={{
             duration: 25,
             repeat: Infinity,
             ease: "linear"
           }}
         />
         <motion.div
           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
           animate={{
             scale: [1, 1.2, 1],
           }}
           transition={{
             duration: 8,
             repeat: Infinity
           }}
         />
         
         {/* Additional light mode decorative elements */}
         <motion.div
           className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl dark:hidden"
           animate={{
             scale: [1, 1.1, 1],
             opacity: [0.3, 0.6, 0.3],
           }}
           transition={{
             duration: 6,
             repeat: Infinity
           }}
         />
         <motion.div
           className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-lg dark:hidden"
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.2, 0.5, 0.2],
           }}
           transition={{
             duration: 8,
             repeat: Infinity
           }}
         />
       </div>

             {/* Main Content */}
       <motion.div
         className="relative z-10 text-center px-4 w-full"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-divider rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">
            {t('hero.subtitle')}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={itemVariants}
          className="mb-2 leading-tight"
        >
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={Logo.src} 
              alt="Sruvi Logo" 
              className="w-64 h-40 md:w-80 md:h-40 lg:w-96 lg:h-40 object-contain"
            />
          </motion.div>
        </motion.div>

                 {/* Subtitle */}
         <motion.p
           variants={itemVariants}
           className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-5xl mx-auto px-4"
         >
           {t('hero.title')}
         </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as="a"
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
              size="lg"
            >
              {t('hero.getStarted')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as="a"
              href="/services"
              variant="bordered"
              className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
              size="lg"
            >
              {t('hero.learnMore')}
            </Button>
          </motion.div>
        </motion.div>

                 {/* Feature Highlights */}
         <motion.div
           variants={itemVariants}
           className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4"
         >
                     <motion.div
             className="text-center group"
             whileHover={{ y: -10 }}
             transition={{ duration: 0.3 }}
           >
                           <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                variants={pulseVariants}
                animate="animate"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {t('hero.features.web')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('hero.features.webDesc')}
              </p>
           </motion.div>

                       <motion.div
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                variants={pulseVariants}
                animate="animate"
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {t('hero.features.mobile')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('hero.features.mobileDesc')}
              </p>
            </motion.div>

                       <motion.div
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                variants={pulseVariants}
                animate="animate"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {t('hero.features.custom')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('hero.features.customDesc')}
              </p>
            </motion.div>
                 </motion.div>
       </motion.div>

               {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/8 text-primary/20 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/6 text-accent/20 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
        >
          <Globe className="w-6 h-6" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/5 text-primary/20 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
        >
          <Smartphone className="w-6 h-6" />
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/6 right-1/10 text-accent/30 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '0.5s' }}
        >
          <Zap className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/8 text-primary/25 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        >
          <Star className="w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/12 text-accent/20 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1.5s' }}
        >
          <Heart className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 text-primary/30 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '0.8s' }}
        >
          <Target className="w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/6 right-1/6 text-accent/25 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1.2s' }}
        >
          <Shield className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-1/5 right-1/8 text-primary/20 max-w-5xl mx-auto w-full px-4"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '0.3s' }}
        >
          <Code className="w-4 h-4" />
        </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
