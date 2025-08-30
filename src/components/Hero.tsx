'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Sparkles, Globe, Smartphone, Code, Zap, Star, Heart, Target, Shield } from "lucide-react";
import Logo from '@/assets/logo.png';
import { useEffect, useState } from 'react';

export default function Hero() {
  const t = useTranslations();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified animations for mobile and reduced motion preferences
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        staggerChildren: prefersReducedMotion ? 0.1 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Disable complex animations on mobile or when reduced motion is preferred
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  const floatingVariants = shouldAnimate ? {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  } : {
    animate: {
      y: 0,
      transition: {
        duration: 0
      }
    }
  };

  const pulseVariants = shouldAnimate ? {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  } : {
    animate: {
      scale: 1,
      transition: {
        duration: 0
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/5">
      {/* Optimized Background Elements - Reduced complexity for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static background gradients - no animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:hidden"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)] dark:hidden"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.05),transparent_50%)] dark:hidden"></div>
        
        {/* Conditional animated background elements */}
        {shouldAnimate && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-2xl md:blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -25, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-2xl md:blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-primary/3 rounded-full blur-xl md:blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
        
        {/* Static decorative elements for mobile */}
        {!shouldAnimate && (
          <>
            <div className="absolute top-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-lg md:blur-xl dark:hidden"></div>
            <div className="absolute bottom-1/3 left-1/3 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-200/10 to-blue-200/10 rounded-full blur-md md:blur-lg dark:hidden"></div>
          </>
        )}
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
          className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-divider rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-foreground/80">
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
            whileHover={shouldAnimate ? { scale: 1.02 } : {}}
            whileTap={shouldAnimate ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={Logo.src} 
              alt="Sruvi Logo" 
              className="w-48 h-32 md:w-64 md:h-40 lg:w-80 lg:h-40 xl:w-96 xl:h-40 object-contain"
              loading="eager"
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
        >
          {t('hero.title')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16"
        >
          <motion.div
            whileHover={shouldAnimate ? { scale: 1.02 } : {}}
            whileTap={shouldAnimate ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
          >
            <Button
              as="a"
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg hover:shadow-primary/25 transition-all duration-200 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl"
              size="lg"
            >
              {t('hero.getStarted')}
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={shouldAnimate ? { scale: 1.02 } : {}}
            whileTap={shouldAnimate ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
          >
            <Button
              as="a"
              href="/services"
              variant="bordered"
              className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-200 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl backdrop-blur-sm"
              size="lg"
            >
              {t('hero.learnMore')}
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Highlights - Simplified for mobile */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4"
        >
          <motion.div
            className="text-center group"
            whileHover={shouldAnimate ? { y: -5 } : {}}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg"
              variants={pulseVariants}
              animate="animate"
            >
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
              {t('hero.features.web')}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t('hero.features.webDesc')}
            </p>
          </motion.div>

          <motion.div
            className="text-center group"
            whileHover={shouldAnimate ? { y: -5 } : {}}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg"
              variants={pulseVariants}
              animate="animate"
            >
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
              {t('hero.features.mobile')}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t('hero.features.mobileDesc')}
            </p>
          </motion.div>

          <motion.div
            className="text-center group"
            whileHover={shouldAnimate ? { y: -5 } : {}}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg"
              variants={pulseVariants}
              animate="animate"
            >
              <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
              {t('hero.features.custom')}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t('hero.features.customDesc')}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Conditional floating elements - only on desktop */}
      {shouldAnimate && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/8 text-primary/20 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/3 right-1/6 text-accent/20 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
          >
            <Globe className="w-5 h-5" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/5 text-primary/20 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
          >
            <Smartphone className="w-5 h-5" />
          </motion.div>

          <motion.div
            className="absolute top-1/6 right-1/10 text-accent/30 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
          >
            <Zap className="w-4 h-4" />
          </motion.div>

          <motion.div
            className="absolute top-2/3 right-1/8 text-primary/25 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          >
            <Star className="w-3 h-3" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/12 text-accent/20 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1.5s' }}
          >
            <Heart className="w-4 h-4" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-1/4 text-primary/30 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '0.8s' }}
          >
            <Target className="w-3 h-3" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/6 right-1/6 text-accent/25 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1.2s' }}
          >
            <Shield className="w-4 h-4" />
          </motion.div>

          <motion.div
            className="absolute top-1/5 right-1/8 text-primary/20 max-w-4xl mx-auto w-full px-4 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '0.3s' }}
          >
            <Code className="w-3 h-3" />
          </motion.div>
        </>
      )}

      {/* Scroll Indicator - Simplified */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={shouldAnimate ? {
          y: [0, 8, 0],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 md:h-3 bg-primary rounded-full mt-2"
            animate={shouldAnimate ? {
              y: [0, 10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
