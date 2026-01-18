import Link from 'next/link'
import Image from 'next/image'

export function PageHeader() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-500">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image 
            src="https://falakme.github.io/brand-assets/logos/products/falak-meet.svg" 
            alt="Falak Meet" 
            width={0}
            height={0}
            style={{ width: 'auto', height: '32px' }}
            className="dark:invert" 
            priority 
          />
        </Link>
      </div>
    </header>
  )
}
