'use client'

import Link from 'next/link'
import { Button } from '@heroui/react'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as={Link}
            href="/"
            className="bg-primary text-white hover:bg-primary/90"
            startContent={<Home className="w-4 h-4" />}
          >
            Go home
          </Button>
          <Button
            variant="bordered"
            onClick={() => window.history.back()}
            startContent={<ArrowLeft className="w-4 h-4" />}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  )
}
