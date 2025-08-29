'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button, Input } from "@heroui/react";
import { Calendar, Clock, User, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { getBlogPosts, getBlogCategories, BlogPost } from '@/lib/blog';
import { Link } from '@/i18n/navigation';

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  
  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  // Fetch blog posts and categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogPosts, blogCategories] = await Promise.all([
          getBlogPosts(),
          getBlogCategories()
        ]);
        
        setPosts(blogPosts);
        setFilteredPosts(blogPosts);
        setCategories(['all', ...blogCategories]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);

  // Format date helper
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Get featured post (first post)
  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  // Newsletter subscription handler
  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Please enter your email address');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus('idle');
    setSubscriptionMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          locale: locale,
          source: 'blog_page'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubscriptionStatus('success');
        setSubscriptionMessage(result.message);
        setNewsletterEmail('');
        // Reset status after 5 seconds
        setTimeout(() => setSubscriptionStatus('idle'), 5000);
      } else {
        setSubscriptionStatus('error');
        setSubscriptionMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubscribing(false);
    }
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

      {/* Category Filter */}
      <section className="py-8 border-b border-divider">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === selectedCategory
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                {category === 'all' ? t('categories.all') : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {loading ? (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded mb-4"></div>
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </section>
      ) : featuredPost ? (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-card border border-divider rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  {featuredPost.featuredImage ? (
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center text-foreground/60">
                        <div className="text-4xl mb-2">📝</div>
                        <div className="text-sm">No Image</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime} {t('readTime')}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                        {t('readMore')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card border border-divider rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-6">
                    <div className="h-4 bg-muted rounded mb-3"></div>
                    <div className="h-6 bg-muted rounded mb-3"></div>
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : remainingPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <article key={post.id} className="bg-card border border-divider rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center text-foreground/60">
                          <div className="text-2xl mb-1">📝</div>
                          <div className="text-xs">No Image</div>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} {t('readTime')}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <button className="text-primary hover:text-accent font-semibold transition-colors flex items-center gap-1">
                          {t('readMore')} <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2">{t('noPosts')}</h3>
              <p className="text-foreground/60">No blog posts found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            {t('newsletter.subtitle')}
          </p>
          
          <form onSubmit={handleNewsletterSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1"
                variant="bordered"
                classNames={{
                  input: "text-foreground",
                  inputWrapper: "border-divider/50 hover:border-primary focus-within:border-primary"
                }}
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isSubscribing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  t('newsletter.subscribe')
                )}
              </Button>
            </div>
            
            {/* Status Messages */}
            {subscriptionStatus === 'success' && (
              <div className="flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span>{subscriptionMessage}</span>
              </div>
            )}

            {subscriptionStatus === 'error' && (
              <div className="flex items-center justify-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300">
                <AlertCircle className="w-5 h-5" />
                <span>{subscriptionMessage}</span>
              </div>
            )}
          </form>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}
