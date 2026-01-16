"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { PageHeader } from "@/components/page-header"

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
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <PageHeader />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Join Zoom Meeting</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Meeting ID: <span className="font-mono font-semibold">{meetingId}</span>
            </p>
          </div>

          {/* Join Options */}
          <div className="space-y-4 max-w-md mx-auto">
            <a
              href={appLink}
              className="block w-full h-12 px-6 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded-md transition-colors flex items-center justify-center"
            >
              Open in Zoom App
            </a>
            
            <a
              href={browserUrl}
              className="block w-full h-12 px-6 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-md transition-colors flex items-center justify-center"
            >
              Join from Browser
            </a>
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-500 dark:text-gray-400 px-30">
            Click "Open in Zoom App" to launch the desktop or mobile app, or "Join from Browser" to join via web browser.
          </p>
        </div>
      </main>
    </div>
  )
}
