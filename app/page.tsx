export default function HomePage() {
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
            <p className="text-gray-600 text-lg">Enter your meeting link to join</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 text-center mb-3">
            ©2025 Falak Meet, All rights reserved.
          </p>
          
        </div>
      </footer>
    </div>
  )
}
