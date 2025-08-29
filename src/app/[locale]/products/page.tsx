'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button } from "@heroui/react";
import { ArrowRight, FileText, Zap, Building, Smartphone, Database } from "lucide-react";
import { Link } from '@/i18n/navigation';

export default function ProductsPage() {
  const t = useTranslations('products');

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

        {/* Featured Product */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-card border border-divider rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                    {t('featured.badge')}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t('featured.title')}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-8">
                    {t('featured.subtitle')}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {t.raw('featured.features').map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      as="a"
                      href="https://indryve.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {t('featured.requestDemo')}
                    </Button>
                    <Button 
                      as="a"
                      href="https://indryve.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="bordered" 
                      className="border border-divider text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-all duration-300"
                    >
                      {t('featured.learnMore')}
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  {/* INDRYVE Image Space */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for INDRYVE Image */}
                    <div className="text-center relative z-10">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <FileText className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">INDRYVE</h3>
                      <p className="text-foreground/60">Enterprise File Management</p>
                      <p className="text-sm text-foreground/50 mt-2">AI-Powered Platform</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* AI Powered Badge */}
                  <div className="absolute -top-4 -right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    AI Powered
                  </div>
                  
                  {/* Image Upload Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-2xl">
                    <div className="text-center text-white">
                      <FileText className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Click to upload INDRYVE image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('categories.title')}
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                {t('categories.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SaaS Solutions */}
              <div className="bg-card border border-divider rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('categories.saas.title')}</h3>
                <p className="text-foreground/70 mb-6">
                  {t('categories.saas.description')}
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  {t.raw('categories.saas.features').map((feature: string, index: number) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Mobile Apps */}
              <div className="bg-card border border-divider rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('categories.mobile.title')}</h3>
                <p className="text-foreground/70 mb-6">
                  {t('categories.mobile.description')}
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  {t.raw('categories.mobile.features').map((feature: string, index: number) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Enterprise Software */}
              <div className="bg-card border border-divider rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('categories.enterprise.title')}</h3>
                <p className="text-foreground/70 mb-6">
                  {t('categories.enterprise.description')}
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  {t.raw('categories.enterprise.features').map((feature: string, index: number) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('techStack.title')}
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                {t('techStack.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Python', icon: '🐍' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
              ].map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-foreground/80">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as="a"
                href="https://indryve.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('cta.scheduleDemo')}
              </Button>
              <Button 
                as="a"
                href="https://indryve.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered" 
                className="border border-divider text-foreground px-8 py-4 rounded-2xl font-semibold hover:bg-muted transition-all duration-300"
              >
                {t('cta.contactSales')}
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
