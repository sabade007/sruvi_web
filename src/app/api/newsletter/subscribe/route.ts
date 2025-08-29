import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore'

export async function POST(request: NextRequest) {
  try {
    console.log('Newsletter subscription API called')
    
    const body = await request.json()
    console.log('Request body:', body)
    
    const { email, locale = 'en', source = 'blog_page' } = body

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Check if email already exists
    try {
      const existingQuery = query(
        collection(db, 'newsletter_subscriptions'),
        where('email', '==', email.toLowerCase()),
        where('status', '==', 'active')
      )
      
      const existingDocs = await getDocs(existingQuery)
      
      if (!existingDocs.empty) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 409 }
        )
      }
    } catch (firebaseError) {
      console.error('Error checking existing subscription:', firebaseError)
      // Continue with subscription even if check fails
    }

    // Insert into Firebase Firestore
    console.log('Attempting to insert newsletter subscription into Firebase...')
    
    try {
      const docRef = await addDoc(collection(db, 'newsletter_subscriptions'), {
        email: email.toLowerCase(),
        subscribedAt: serverTimestamp(),
        status: 'active',
        source: source,
        locale: locale
      })
      
      console.log('Successfully inserted newsletter subscription with ID:', docRef.id)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully subscribed to newsletter!',
          id: docRef.id
        },
        { status: 201 }
      )
    } catch (firebaseError) {
      console.error('Firebase error:', firebaseError)
      return NextResponse.json(
        { error: `Failed to subscribe to newsletter: ${firebaseError}` },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
