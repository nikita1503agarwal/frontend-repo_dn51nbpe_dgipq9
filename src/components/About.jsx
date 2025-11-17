export default function About() {
  return (
    <section id="about" className="relative bg-rose-50 border-y border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-rose-900">Our Story</h2>
          <p className="mt-4 text-rose-800/90 leading-relaxed">
            We started as a tiny neighborhood bakery with one oven and a dream: to bring
            honest, slow-fermented bread and flaky, buttery pastries to our community.
            We source local flour, seasonal produce, and churn our own butter to ensure
            every bite is pure comfort.
          </p>
          <p className="mt-4 text-rose-800/90 leading-relaxed">
            Today, we still bake in small batches and sell out often. Come early, say hello,
            and take home something warm.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img className="rounded-2xl shadow ring-1 ring-rose-100" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop" alt="Baker kneading dough" />
          <img className="rounded-2xl shadow mt-6 ring-1 ring-rose-100" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Freshly baked breads" />
        </div>
      </div>
    </section>
  )
}
