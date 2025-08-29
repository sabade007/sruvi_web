import { db } from './firebase';
import { collection, addDoc, getDocs, getDoc, doc, Timestamp, query, where } from 'firebase/firestore';

// Blog post interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  publishedAt: Date;
  updatedAt: Date;
  featuredImage?: string;
  tags: string[];
  category: string;
  readTime: number;
  metaTitle?: string;
  metaDescription?: string;
  status: 'published' | 'draft';
}

// Get all published blog posts
export async function getBlogPosts(limitCount?: number): Promise<BlogPost[]> {
  try {
    // First get all documents and filter client-side to avoid index requirement
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const posts: BlogPost[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status === 'published') {
        posts.push({
          id: doc.id,
          ...data,
          publishedAt: data.publishedAt.toDate(),
          updatedAt: data.updatedAt.toDate(),
        } as BlogPost);
      }
    });
    
    // Sort by publishedAt descending
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    
    // Apply limit if specified
    if (limitCount) {
      return posts.slice(0, limitCount);
    }
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(
      collection(db, 'blogs'),
      where('slug', '==', slug),
      where('status', '==', 'published')
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    const data = doc.data();
    
    return {
      id: doc.id,
      ...data,
      publishedAt: data.publishedAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    } as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    // Get all documents and filter client-side to avoid index requirement
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const posts: BlogPost[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status === 'published' && data.category === category) {
        posts.push({
          id: doc.id,
          ...data,
          publishedAt: data.publishedAt.toDate(),
          updatedAt: data.updatedAt.toDate(),
        } as BlogPost);
      }
    });
    
    // Sort by publishedAt descending
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
}

// Get related blog posts (excluding current post)
export async function getRelatedBlogPosts(currentPostId: string, category: string, limitCount: number = 3): Promise<BlogPost[]> {
  try {
    // Get all documents and filter client-side to avoid index requirement
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const posts: BlogPost[] = [];
    
    querySnapshot.forEach((doc) => {
      if (doc.id !== currentPostId) {
        const data = doc.data();
        if (data.status === 'published' && data.category === category) {
          posts.push({
            id: doc.id,
            ...data,
            publishedAt: data.publishedAt.toDate(),
            updatedAt: data.updatedAt.toDate(),
          } as BlogPost);
        }
      }
    });
    
    // Sort by publishedAt descending and limit
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    
    return posts.slice(0, limitCount);
  } catch (error) {
    console.error('Error fetching related blog posts:', error);
    return [];
  }
}

// Get all blog categories
export async function getBlogCategories(): Promise<string[]> {
  try {
    // Get all documents and filter client-side to avoid index requirement
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const categories = new Set<string>();
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status === 'published' && data.category) {
        categories.add(data.category);
      }
    });
    
    return Array.from(categories);
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
}
