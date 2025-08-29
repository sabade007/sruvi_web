'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';

import { Button } from "@heroui/react";
import { ArrowRight, Globe, Smartphone, Cloud, Brain, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";
import { Link } from '@/i18n/navigation';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'web',
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      key: 'mobile',
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      key: 'cloud',
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    {
      key: 'ai',
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      key: 'marketing',
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10"
    },
    {
      key: 'consulting',
      icon: Lightbulb,
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-500/10 to-blue-500/10"
    }
  ];

  // Service-specific content arrays
  const serviceContent = {
    web: {
      features: ["React & Next.js Development", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
      process: ["Requirements Analysis", "UI/UX Design", "Development & Testing", "Deployment & Maintenance"],
      benefits: ["Responsive across all devices", "SEO optimized for better visibility", "Fast loading times", "Scalable architecture"]
    },
    mobile: {
      features: ["React Native Apps", "Flutter Development", "Native iOS/Android", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      process: ["Platform Strategy", "UI/UX Design", "Development & Testing", "App Store Submission"],
      benefits: ["Native performance on all devices", "Cross-platform compatibility", "App store optimization", "Offline functionality"]
    },
    cloud: {
      features: ["AWS/Azure/GCP Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Serverless Architecture"],
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
      process: ["Cloud Strategy Planning", "Infrastructure Design", "Migration & Setup", "Monitoring & Optimization"],
      benefits: ["Scalable infrastructure", "Cost optimization", "High availability", "Automated deployments"]
    },
    ai: {
      features: ["Custom AI Models", "Data Analytics", "Chatbot Development", "Predictive Analytics"],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "AWS SageMaker", "Google AI"],
      process: ["Data Analysis", "Model Development", "Training & Testing", "Integration & Deployment"],
      benefits: ["Automated decision making", "Improved efficiency", "Data-driven insights", "Competitive advantage"]
    },
    marketing: {
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot", "Mailchimp", "SEMrush"],
      process: ["Market Research", "Strategy Development", "Implementation", "Analysis & Optimization"],
      benefits: ["Increased online visibility", "Higher conversion rates", "Measurable results", "Cost-effective marketing"]
    },
    consulting: {
      features: ["Technology Strategy", "Digital Transformation", "Project Management", "Technical Audits"],
      technologies: ["Strategic Planning", "Technology Assessment", "Process Optimization", "Change Management"],
      process: ["Business Analysis", "Technology Assessment", "Strategy Development", "Implementation Support"],
      benefits: ["Clear technology roadmap", "Reduced implementation risks", "Improved efficiency", "Competitive advantage"]
    }
  };

  // Helper function to get service-specific content
  const getServiceContent = (serviceKey: string, contentType: 'features' | 'technologies' | 'process' | 'benefits') => {
    return serviceContent[serviceKey as keyof typeof serviceContent]?.[contentType] || [];
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.key}
                  className="group relative"
                >
                  <div className="relative bg-card border border-divider rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold mb-4">
                      {t(`items.${service.key}.title`)}
                    </h3>

                    {/* Service Description */}
                    <p className="text-foreground/70 mb-6">
                      {t(`items.${service.key}.description`)}
                    </p>

                    {/* Service Features */}
                    <ul className="space-y-2 text-sm text-foreground/60 mb-6">
                      {getServiceContent(service.key, 'features').map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <Button
                      as="a"
                      href={`#${service.key}`}
                      variant="ghost"
                      className="text-primary hover:text-primary/80 px-4 py-2 h-auto font-medium group-hover:translate-x-2 transition-transform duration-300 rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(service.key);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {t('learnMore')}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        {services.map((service, index) => (
          <section key={service.key} id={service.key} className={`py-20 ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.bgColor} text-primary rounded-full text-sm font-medium mb-6`}>
                    {t(`items.${service.key}.title`)}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t(`items.${service.key}.detailed.title`)}
                  </h2>
                  
                  <p className="text-lg text-foreground/70 mb-8">
                    {t(`items.${service.key}.detailed.subtitle`)}
                  </p>
                  
                  <p className="text-foreground/80 mb-8 leading-relaxed">
                    {t(`items.${service.key}.detailed.description`)}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getServiceContent(service.key, 'features').map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {getServiceContent(service.key, 'technologies').map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                    <div className="space-y-3">
                      {getServiceContent(service.key, 'process').map((step: string, stepIndex: number) => (
                        <div key={stepIndex} className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                            {stepIndex + 1}
                          </div>
                          <span className="text-foreground/80">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getServiceContent(service.key, 'benefits').map((benefit: string, benefitIndex: number) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-foreground/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    as={Link}
                    href="/contact"
                    className={`bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center relative z-10">
                      <div className={`w-32 h-32 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                        <service.icon className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {t(`items.${service.key}.detailed.title`)}
                      </h3>
                      <p className="text-foreground/60">
                        {t(`items.${service.key}.detailed.subtitle`)}
                      </p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {t('cta.primaryButton')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  as={Link}
                  href="/products"
                  variant="bordered"
                  className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl"
                >
                  {t('cta.secondaryButton')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
