interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {children}
      </div>
    </main>
  )
}
