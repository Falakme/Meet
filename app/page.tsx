'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  const [meetingId, setMeetingId] = useState('')
  const router = useRouter()

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault()
    if (meetingId.trim()) {
      router.push(`/j/${meetingId.trim()}`)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#2D8CFF] font-logo">Falak Meet</h1>
        </div>
        
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Welcome to Falak Meet</h2>
            <p className="text-gray-600 text-lg">Enter your meeting ID to join</p>
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
                className="h-12 px-8 bg-[#2D8CFF] hover:bg-[#1a73e8]"
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
