'use client'

import { useEffect } from 'react'
import { Button } from '@heroui/react'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            We encountered an unexpected error. Please try refreshing the page or go back to the homepage.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-primary text-white hover:bg-primary/90"
            startContent={<RefreshCw className="w-4 h-4" />}
          >
            Try again
          </Button>
          <Button
            variant="bordered"
            onClick={() => window.location.href = '/'}
            startContent={<Home className="w-4 h-4" />}
          >
            Go home
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left max-w-2xl mx-auto">
            <summary className="cursor-pointer text-sm text-muted-foreground">
              Error details (development only)
            </summary>
            <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
