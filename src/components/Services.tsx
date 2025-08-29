'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Globe, Smartphone, Code, Database, Palette, Shield, Zap, Users, BarChart3, Cloud, Brain, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from '@/i18n/navigation';

export default function Services() {
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
        duration: 0.8,

      }
    }
  };

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
            repeat: Infinity
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
            repeat: Infinity
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
              <Zap className="w-4 h-4" />
              {t('services.badge')}
            </span>
          </motion.div>
          
                     <motion.h2 
             variants={itemVariants}
             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight py-2"
           >
             {t('services.title')}
           </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
                             <div className="relative bg-background/80 backdrop-blur-xl border border-divider/50 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {getServiceFeatures(service.key).map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                                 {/* Learn More Button */}
                 <Button
                   as={Link}
                   href="/services"
                   variant="ghost"
                   className="text-primary hover:text-primary/80 px-4 py-2 h-auto font-medium group-hover:translate-x-2 transition-transform duration-300 rounded-lg"
                 >
                   {t('services.learnMore')}
                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                 </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {t('services.cta.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              as="a"
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
              size="lg"
            >
              {t('services.cta.primaryButton')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              as="a"
              href="/products"
              variant="bordered" 
              className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
              size="lg"
            >
              {t('services.cta.secondaryButton')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
