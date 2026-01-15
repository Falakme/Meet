export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#2D8CFF] border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-600">Loading meeting...</p>
      </div>
    </div>
  )
}
