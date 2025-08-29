import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Type for contact form submission
export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  company?: string
  projectName?: string
  projectBudget?: string
  projectTimeline?: string
  projectType?: string
  message?: string
  timestamp?: Date
}

// Type for newsletter subscription
export interface NewsletterSubscription {
  email: string
  subscribedAt: Date
  status: 'active' | 'unsubscribed'
  source: 'blog_page' | 'footer' | 'popup'
  locale: string
}
