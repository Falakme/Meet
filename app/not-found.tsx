import Link from 'next/link'
import { PageHeader } from '@/components/page-header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <PageHeader />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4 max-w-md mx-auto">
            <Link
              href="/"
              className="block w-full h-12 px-6 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 text-white font-medium rounded-md transition-colors flex items-center justify-center"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
