"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"

export default function JoinMeetingPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [appLink, setAppLink] = useState<string>("")
  const [browserUrl, setBrowserUrl] = useState<string>("")

  const meetingId = params.meetingId as string
  const password = searchParams.get("pwd")

  useEffect(() => {
    if (meetingId) {
      // App deep link
      let link = `zoomus://zoom.us/join?confno=${meetingId}`
      if (password) link += `&pwd=${password}`
      setAppLink(link)
      
      // Browser URL
      let url = `https://zoom.us/wc/join/${meetingId}`
      if (password) url += `?pwd=${password}`
      setBrowserUrl(url)
    }
  }, [meetingId, password])

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
            <h2 className="text-3xl font-bold text-gray-900">Join Zoom Meeting</h2>
            <p className="text-gray-600 text-lg">
              Meeting ID: <span className="font-mono font-semibold">{meetingId}</span>
            </p>
          </div>

          {/* Join Options */}
          <div className="space-y-4 max-w-md mx-auto">
            <a
              href={appLink}
              className="block w-full h-12 px-6 bg-[#2D8CFF] hover:bg-[#1a73e8] text-white font-medium rounded-md transition-colors flex items-center justify-center"
            >
              Open in Zoom App
            </a>
            
            <a
              href={browserUrl}
              className="block w-full h-12 px-6 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-md transition-colors flex items-center justify-center"
            >
              Join from Browser
            </a>
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-500">
            Click "Open in Zoom App" to launch the desktop or mobile app,
            <br />
            or "Join from Browser" to join via web browser.
          </p>
        </div>
      </main>
    </div>
  )
}
