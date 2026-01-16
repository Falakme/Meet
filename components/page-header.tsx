import Link from 'next/link'
import Image from 'next/image'

export function PageHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="Falak Meet" 
            width={160} 
            height={32} 
            className="dark:invert" 
            priority 
          />
        </Link>
      </div>
    </header>
  )
}
