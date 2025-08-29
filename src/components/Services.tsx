'use client';

import { useTranslations } from 'next-intl';
import { motion, easeOut } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Globe, Smartphone, Code, Database, Palette, Shield, Zap, Users, BarChart3 } from "lucide-react";

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
        ease: easeOut
      }
    }
  };

  const services = [
    {
      icon: Globe,
      title: t('services.items.web.title'),
      description: t('services.items.web.description'),
      features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Performance Focused"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description'),
      features: ["React Native", "Native iOS/Android", "Cross-platform", "App Store Ready"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: t('services.items.custom.title'),
      description: t('services.items.custom.description'),
      features: ["Custom Architecture", "Scalable Solutions", "API Development", "Database Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: t('services.items.backend.title'),
      description: t('services.items.backend.description'),
      features: ["Node.js/Python", "RESTful APIs", "Database Design", "Cloud Integration"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: t('services.items.uiux.title'),
      description: t('services.items.uiux.description'),
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: t('services.items.devops.title'),
      description: t('services.items.devops.description'),
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Monitoring", "Security"],
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
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                                 {/* Learn More Button */}
                 <Button
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
              className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
              size="lg"
            >
              {t('services.cta.primaryButton')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
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
