'use client';

import { useTranslations } from 'next-intl';
import { motion, easeOut } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, ExternalLink, FolderOpen, Users, Shield, Zap, Star, Globe, Database, Lock } from "lucide-react";

export default function Portfolio() {
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

  const projectFeatures = [
    {
      icon: FolderOpen,
      title: t('portfolio.features.fileManagement'),
      description: "Advanced file organization with folders, tags, and search capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: t('portfolio.features.teamCollaboration'),
      description: "Real-time collaboration with role-based permissions and sharing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: t('portfolio.features.enterpriseSecurity'),
      description: "Bank-level encryption, compliance, and advanced security protocols",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: t('portfolio.features.highPerformance'),
      description: "Lightning-fast uploads, downloads, and seamless synchronization",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: t('portfolio.features.aiFileManagement'),
      description: "Intelligent file categorization, auto-tagging, and smart search capabilities",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const techStack = [
    { name: t('portfolio.techStack.frontend'), category: "Frontend" },
    { name: t('portfolio.techStack.backend'), category: "Backend" },
    { name: t('portfolio.techStack.database'), category: "Database" },
    { name: t('portfolio.techStack.storage'), category: "Storage" },
    { name: t('portfolio.techStack.cache'), category: "Cache" },
    { name: t('portfolio.techStack.deployment'), category: "Deployment" }
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
              <FolderOpen className="w-4 h-4" />
              {t('portfolio.badge')}
            </span>
          </motion.div>
          
                     <motion.h2 
             variants={itemVariants}
             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight py-2"
           >
             {t('portfolio.title')}
           </motion.h2>
          
                     <motion.p 
             variants={itemVariants}
             className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
           >
             {t('portfolio.subtitle')}
           </motion.p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Project Image */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative">
                {/* Placeholder for project image */}
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center">
                  <div className="text-center">
                    <FolderOpen className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Project Image</p>
                    <p className="text-sm text-muted-foreground/70">(Space reserved for Drive project screenshot)</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Globe className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Project Details */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Project Overview
              </h3>
                             <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-8">
                 <p>
                   {t('portfolio.description')}
                 </p>
               </div>

              

              <div className="flex flex-col sm:flex-row gap-4">
                                 <Button 
                   className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                   size="lg"
                 >
                   {t('portfolio.requestDemo')}
                   <ExternalLink className="ml-2 w-4 h-4" />
                 </Button>
                <Button 
                  variant="bordered" 
                  className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  size="lg"
                >
                  Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

                          {/* Key Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20 bg-gradient-to-br from-background/50 via-background/30 to-primary/5 dark:from-background/50 dark:via-background/30 dark:to-primary/5 rounded-3xl p-12 border border-divider/20"
          >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Key Features
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities designed to meet enterprise requirements and enhance team productivity.
            </p>
          </motion.div>

                     <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
           >
            {projectFeatures.map((feature, index) => {
              console.log(`Rendering feature ${index}:`, feature.title);
              return (
              <motion.div
                key={index}
                variants={itemVariants}
                                 className={`group text-center ${index >= 3 ? 'lg:col-span-1.5' : ''}`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
            })}
          </motion.div>
        </motion.div>

                 {/* Technology Stack */}
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           className="mb-20 bg-gradient-to-br from-accent/5 via-background/30 to-background/50 dark:from-accent/5 dark:via-background/30 dark:to-background/50 rounded-3xl p-12 border border-divider/20"
         >
                     <motion.div variants={itemVariants} className="text-center mb-8">
             <h3 className="text-3xl font-bold mb-4 text-foreground">
               {t('portfolio.techStack.title')}
             </h3>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Built with modern technologies for scalability, performance, and maintainability.
             </p>
           </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-background/80 backdrop-blur-xl border border-divider/50 rounded-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-lg font-semibold text-foreground mb-2">{tech.name}</div>
                <div className="text-sm text-muted-foreground">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Collaboration Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {t('portfolio.collaboration')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              This project was developed in partnership with industry leaders to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-6"
          >
            {/* Indryve Logo Placeholder */}
            <div className="w-48 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <Star className="w-8 h-8 text-primary/50 mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">Indryve Logo</p>
              </div>
            </div>

            {/* Indryve Link */}
            <div className="flex items-center gap-4">
              <span className="text-lg text-muted-foreground">Visit our partner:</span>
              <Button 
                variant="bordered" 
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                size="lg"
                as="a"
                href="https://www.indryve.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('portfolio.visitWebsite')}
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

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
              {t('portfolio.cta.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('portfolio.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
                size="lg"
              >
                {t('portfolio.cta.primaryButton')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="bordered" 
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
                size="lg"
              >
                {t('portfolio.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
