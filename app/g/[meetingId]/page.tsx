"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import Image from "next/image"

export default function GoogleMeetPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [meetUrl, setMeetUrl] = useState<string>("")

  const meetingId = params.meetingId as string
  const authuser = searchParams.get("authuser")
  const sc = searchParams.get("sc")

  useEffect(() => {
    if (meetingId) {
      const queryParams = new URLSearchParams()
      if (sc) queryParams.append("sc", sc)
      if (authuser) queryParams.append("authuser", authuser)
      const queryString = queryParams.toString()
      
      let url = `https://meet.google.com/${meetingId}`
      if (queryString) url += `?${queryString}`
      setMeetUrl(url)
    }
  }, [meetingId, authuser, sc])

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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Join Google Meet</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Meeting ID: <span className="font-mono font-semibold">{meetingId}</span>
            </p>
          </div>

          {/* Join Options */}
          <div className="space-y-4 max-w-md mx-auto">
            <a
              href={meetUrl}
              className="block w-full h-12 px-6 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 text-white font-medium rounded-md transition-colors flex items-center justify-center"
            >
              Join Meeting
            </a>
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click to join the Google Meet session in your browser
          </p>
        </div>
      </main>
    </div>
  )
}
