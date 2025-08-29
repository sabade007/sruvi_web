'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Users, Target, Award, Clock, CheckCircle, Star, Zap, Heart, Shield } from "lucide-react";

export default function About() {
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

  const stats = [
    { icon: Users, value: "30+", label: t('about.stats.clients'), color: "from-blue-500 to-cyan-500" },
    { icon: Target, value: "35+", label: t('about.stats.projects'), color: "from-purple-500 to-pink-500" },
    { icon: Award, value: "5+", label: t('about.stats.experience'), color: "from-green-500 to-emerald-500" }
  ];

  const values = [
    {
      icon: Heart,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background to-accent/5 dark:from-background dark:via-background dark:to-accent/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
              <Users className="w-4 h-4" />
              About Us
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight py-2"
          >
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Digital Reality</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We are a passionate team of innovators, designers, and developers dedicated to creating 
            exceptional digital experiences that drive business growth and user engagement.
          </motion.p>
        </motion.div>

                 {/* Main Content Grid */}
         <div className="mb-20">
           {/* Our Story Section */}
           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             className="mb-16"
           >
             <motion.div variants={itemVariants} className="text-center mb-12">
               <h3 className="text-4xl font-bold mb-6 text-foreground">
                 {t('about.story.title')}
               </h3>
               <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
                 <p>
                   {t('about.story.content')}
                 </p>
               </div>
             </motion.div>
           </motion.div>

                       {/* Our Mission Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-6 text-foreground">
                  {t('about.mission.title')}
                </h3>
                <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    {t('about.mission.content')}
                  </p>
                </div>
                                 <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                   <Button 
                     as="a"
                     href="/contact"
                     className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                     size="lg"
                   >
                     {t('about.mission.primaryButton')}
                     <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                   <Button 
                     as="a"
                     href="tel:+919731171611"
                     variant="bordered" 
                     className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                     size="lg"
                   >
                     {t('about.mission.secondaryButton')}
                   </Button>
                 </div>
              </motion.div>
            </motion.div>

            {/* Why Choose Sruvi Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-8 text-foreground">
                  {t('about.stats.title')}
                </h3>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-8 bg-background/80 backdrop-blur-xl border border-divider/50 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 min-w-[200px]"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-lg text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
         </div>

                 {/* Values Section */}
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           className="bg-foreground/5 dark:bg-foreground/10 rounded-3xl p-12 -mx-4"
         >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {t('about.values.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {t('about.cta.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                as="a"
                href="/contact"
                className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
                size="lg"
              >
                {t('about.cta.primaryButton')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                as="a"
                href="tel:+919731171611"
                variant="bordered" 
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
                size="lg"
              >
                {t('about.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
