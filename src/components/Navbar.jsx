import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-[#1E1E1E]/80 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#C6A664' }} />
            Loyalty
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#footer" className="text-white/80 hover:text-white transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="text-white/90 hover:text-white px-3 py-1.5 rounded-md transition"
          >
            Login
          </a>
          <a
            href="#signup"
            className="rounded-md px-4 py-2 font-medium text-[#1E1E1E]"
            style={{ backgroundColor: '#C6A664' }}
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  )
}
