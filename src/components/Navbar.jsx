import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/70 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🥐</span>
          <span className="font-extrabold text-rose-700 text-xl tracking-tight">Sweet Crumbs Bakery</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-rose-800/80 hover:text-rose-700 font-medium">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition-colors">
            Order Inquiry
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-rose-50">
          <Menu className="w-6 h-6 text-rose-700" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white/80">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-rose-800/90 hover:bg-rose-50">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
