'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Aravind",
      company: "Surya Tech",
      content: "Sruvi transformed our digital infrastructure with their innovative solutions. Their team's expertise in modern technologies and attention to detail exceeded our expectations. The seamless integration and outstanding support have made them our go-to technology partner.",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Ragini",
      company: "Imos",
      content: "Working with Sruvi has been an absolute pleasure. Their understanding of our business needs and ability to deliver scalable solutions has been remarkable. The quality of their work and professional approach has significantly enhanced our product offerings.",
      rating: 5,
      avatar: "R"
    },
    {
      name: "Robin",
      company: "Australia",
      content: "Sruvi's team brought our vision to life with exceptional skill and creativity. Their expertise in cutting-edge technologies and commitment to delivering excellence has been instrumental in our success. Highly recommended for any digital project.",
      rating: 5,
      avatar: "R"
    },
    {
      name: "Nikhil Kashyap",
      company: "Entrepreneur",
      content: "Sruvi's innovative approach to problem-solving and their deep technical expertise have been invaluable to our business growth. Their solutions are not just technically sound but also strategically aligned with our long-term objectives.",
      rating: 5,
      avatar: "N"
    },
    {
      name: "Shalini",
      company: "HR",
      content: "Sruvi's team demonstrates exceptional professionalism and technical excellence. Their collaborative approach and ability to understand our organizational needs have made them an integral part of our digital transformation journey.",
      rating: 5,
      avatar: "S"
    }
  ];

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background to-accent/5 dark:from-background dark:via-background dark:to-accent/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
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
              <Star className="w-4 h-4" />
              Client Testimonials
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight py-2"
          >
            What Our
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Clients Say</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Discover why leading companies trust Sruvi to deliver exceptional digital solutions and transform their business.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background/80 via-background/60 to-primary/5 dark:from-background/80 dark:via-background/60 dark:to-primary/5 backdrop-blur-xl border border-divider/20 p-12">
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="text-center"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 italic"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Rating */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </motion.div>

              {/* Client Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                                 <div className="text-left">
                   <h4 className="text-xl font-bold text-foreground">
                     {testimonials[currentIndex].name}
                   </h4>
                   <p className="text-muted-foreground">
                     {testimonials[currentIndex].company}
                   </p>
                 </div>
              </motion.div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-divider rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-divider rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex justify-center gap-2 mt-8"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-divider hover:bg-primary/50'
                }`}
              />
            ))}
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
              {t('testimonials.cta.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('testimonials.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                as="a"
                href="/contact"
                className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6 rounded-2xl"
                size="lg"
              >
                {t('testimonials.cta.primaryButton')}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                as="a"
                href="tel:+919731171611"
                variant="bordered" 
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
                size="lg"
              >
                {t('testimonials.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
