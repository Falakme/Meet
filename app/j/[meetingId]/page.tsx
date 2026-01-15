"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"

export default function JoinMeetingPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [deepLink, setDeepLink] = useState<string>("")

  const meetingId = params.meetingId as string
  const password = searchParams.get("pwd")

  useEffect(() => {
    if (meetingId) {
      let link = `zoomus://zoom.us/join?confno=${meetingId}`
      if (password) {
        link += `&pwd=${password}`
      }
      setDeepLink(link)
    }
  }, [meetingId, password])

  const handleJoinApp = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!deepLink) return

    window.location.href = deepLink
  }

  const handleJoinBrowser = () => {
    if (meetingId) {
      let browserUrl = `https://zoom.us/wc/join/${meetingId}`
      if (password) {
        browserUrl += `?pwd=${password}`
      }
      window.location.href = browserUrl
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
            <div className="max-w-sm mx-auto">
              <a
                href={deepLink}
                onClick={handleJoinApp}
                className="block bg-[#2D8CFF] hover:bg-[#1E6FCC] text-white font-medium py-6 rounded-lg text-xl transition-colors"
              >
                Join from Zoom Workplace app
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-8">
            <p className="text-sm text-gray-600">
              Having issues with the Zoom Workplace app?{" "}
              <button onClick={handleJoinBrowser} className="text-[#2D8CFF] hover:underline">
                Join from your browser
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
