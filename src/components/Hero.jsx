export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-sm font-semibold border border-rose-100">Freshly baked daily</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-black text-rose-900 leading-tight">Artisan breads, pastries, and cakes made with love</h1>
          <p className="mt-5 text-rose-800/80 text-lg">From flaky croissants to crusty sourdough, everything is crafted by hand using simple, high-quality ingredients.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition-colors">Explore Menu</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white border border-rose-200 text-rose-700 font-semibold hover:bg-rose-50">Custom Orders</a>
          </div>
        </div>
        <div className="relative">
          <img className="rounded-3xl shadow-2xl ring-1 ring-rose-100" src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop" alt="Bakery assortment" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4 ring-1 ring-rose-100">
            <p className="text-2xl font-extrabold text-rose-700">1000+ happy customers</p>
            <p className="text-sm text-rose-800/70">Since 2015</p>
          </div>
        </div>
      </div>
    </section>
  )
}
