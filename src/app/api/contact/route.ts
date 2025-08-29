import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(request: NextRequest) {
  try {
    console.log('API route called')
    
    const body = await request.json()
    console.log('Request body:', body)
    
    const { name, email, phone, company, projectName, projectBudget, projectTimeline, projectType, message } = body

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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

    // Insert into Firebase Firestore
    console.log('Attempting to insert into Firebase...')
    
    try {
      const docRef = await addDoc(collection(db, 'contact_submissions'), {
        name,
        email,
        phone: phone || null,
        company: company || null,
        projectName: projectName || null,
        projectBudget: projectBudget || null,
        projectTimeline: projectTimeline || null,
        projectType: projectType || null,
        message: message || null,
        timestamp: serverTimestamp()
      })
      
      console.log('Successfully inserted data with ID:', docRef.id)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact information saved successfully to database!',
          id: docRef.id
        },
        { status: 201 }
      )
    } catch (firebaseError) {
      console.error('Firebase error:', firebaseError)
      return NextResponse.json(
        { error: `Failed to save contact information: ${firebaseError}` },
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
