'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Globe, Smartphone, Code, Database, Palette, Shield, Zap, Users, BarChart3, Cloud, Brain, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from '@/i18n/navigation';
import { useEffect, useState } from 'react';

export default function Services() {
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
        duration: prefersReducedMotion ? 0.3 : 0.6,
        staggerChildren: prefersReducedMotion ? 0.1 : 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.5,
        ease: "easeOut" as const
      }
    }
  };

  // Disable complex animations on mobile or when reduced motion is preferred
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  // Service-specific features arrays
  const serviceFeatures = {
    web: ["React/Next.js", "Responsive Design", "SEO Optimized", "Performance Focused"],
    mobile: ["React Native", "Native iOS/Android", "Cross-platform", "App Store Ready"],
    cloud: ["AWS/Azure/GCP Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Serverless Architecture"],
    ai: ["Custom AI Models", "Data Analytics", "Chatbot Development", "Predictive Analytics"],
    marketing: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    consulting: ["Technology Strategy", "Digital Transformation", "Project Management", "Technical Audits"]
  };

  // Helper function to get service-specific features
  const getServiceFeatures = (serviceKey: string) => {
    return serviceFeatures[serviceKey as keyof typeof serviceFeatures] || [];
  };

  const services = [
    {
      key: 'web',
      icon: Globe,
      title: t('services.items.web.title'),
      description: t('services.items.web.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      key: 'mobile',
      icon: Smartphone,
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description'),
      color: "from-purple-500 to-pink-500"
    },
    {
      key: 'cloud',
      icon: Cloud,
      title: t('services.items.cloud.title'),
      description: t('services.items.cloud.description'),
      color: "from-orange-500 to-red-500"
    },
    {
      key: 'ai',
      icon: Brain,
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      color: "from-green-500 to-emerald-500"
    },
    {
      key: 'marketing',
      icon: TrendingUp,
      title: t('services.items.marketing.title'),
      description: t('services.items.marketing.description'),
      color: "from-indigo-500 to-purple-500"
    },
    {
      key: 'consulting',
      icon: Lightbulb,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/5 overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {shouldAnimate ? (
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-2xl md:blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ) : (
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-2xl md:blur-3xl"></div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            {t('services.badge')}
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t('services.title')}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative bg-card border border-divider rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-200"
                whileHover={shouldAnimate ? { y: -5 } : {}}
                whileTap={shouldAnimate ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
              >
                {/* Service Icon */}
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-200`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6 md:mb-8">
                  {getServiceFeatures(service.key).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button
                  as={Link}
                  href="/services"
                  variant="ghost"
                  className="text-primary hover:text-primary/80 px-4 py-2 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200 rounded-lg"
                >
                  {t('services.learnMore')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              {t('services.cta.title')}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={shouldAnimate ? { scale: 1.02 } : {}}
                whileTap={shouldAnimate ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
              >
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-gradient-to-r from-primary to-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  {t('services.cta.primaryButton')}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={shouldAnimate ? { scale: 1.02 } : {}}
                whileTap={shouldAnimate ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
              >
                <Button
                  as={Link}
                  href="/products"
                  variant="bordered"
                  className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-200 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl"
                >
                  {t('services.cta.secondaryButton')}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
