'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function HomePage() {
  const [meetingId, setMeetingId] = useState('')
  const router = useRouter()

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault()
    if (meetingId.trim()) {
      const trimmedId = meetingId.trim()
      // Check if meeting ID contains only numbers (Zoom) or has letters (Google Meet)
      const isNumeric = /^\d+$/.test(trimmedId)
      
      if (isNumeric) {
        // Numeric ID -> Zoom
        router.push(`/z/${trimmedId}`)
      } else {
        // Contains letters -> Google Meet
        router.push(`/g/${trimmedId}`)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Falak Meet" width={160} height={34} className="dark:invert" priority />
        </div>
        
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Falak Meet</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Enter your meeting ID to join</p>
          </div>

          {/* Meeting ID Input Form */}
          <form onSubmit={handleJoinMeeting} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Enter meeting ID"
                value={meetingId}
                onChange={(e) => setMeetingId(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button 
                type="submit" 
                disabled={!meetingId.trim()}
                className="h-12 px-8 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Join
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
