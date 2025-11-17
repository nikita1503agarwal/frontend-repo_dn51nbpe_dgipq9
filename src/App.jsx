import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-rose-25">
      <Navbar />
      <Hero />
      <MenuGrid />
      <About />
      <Contact />
      <footer className="border-t border-rose-100 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-rose-800/70">© {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved.</p>
          <a href="/test" className="text-rose-700 hover:underline">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
