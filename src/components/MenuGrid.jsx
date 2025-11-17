import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm ring-1 ring-rose-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-rose-900 text-lg">{item.title}</h3>
          <span className="px-2 py-1 rounded-full bg-rose-50 text-rose-700 text-sm font-semibold">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-sm text-rose-800/80 line-clamp-2">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded bg-rose-100 text-rose-700">{item.category}</span>
          {item.in_stock ? (
            <span className="text-xs text-green-700">In stock</span>
          ) : (
            <span className="text-xs text-rose-700">Sold out</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MenuGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`${BACKEND}/products`)
      if (!res.ok) throw new Error(`Failed ${res.status}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const seed = async () => {
    try {
      await fetch(`${BACKEND}/seed`, { method: 'POST' })
      await load()
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-rose-900">Our Favorites</h2>
          <p className="text-rose-800/80">A rotating selection baked fresh every morning.</p>
        </div>
        <button onClick={seed} className="px-4 py-2 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700">Load Sample Menu</button>
      </div>

      {loading && (
        <p className="text-rose-700">Loading menu...</p>
      )}
      {error && (
        <div className="p-3 rounded-lg bg-rose-50 text-rose-700 ring-1 ring-rose-200">{error}</div>
      )}

      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <ProductCard key={it.id} item={it} />
          ))}
        </div>
      )}
    </section>
  )
}
