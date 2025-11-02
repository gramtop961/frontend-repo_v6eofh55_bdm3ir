export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© {new Date().getFullYear()} Loyalty. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-white/80">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
