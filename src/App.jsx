import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen scroll-smooth" style={{ backgroundColor: '#1E1E1E', fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system' }}>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
      </main>
      <Footer />
    </div>
  )
}

export default App
