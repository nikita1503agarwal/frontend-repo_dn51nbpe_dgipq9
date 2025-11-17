import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setStatus('')
      const res = await fetch(`${BACKEND}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will get back to you within a day.')
      setName(''); setEmail(''); setMessage('')
    } catch (e) {
      setStatus(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl shadow ring-1 ring-rose-100 grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black text-rose-900">Get in touch</h2>
          <p className="mt-3 text-rose-800/80">Custom cakes, catering, or wholesale inquiries — send us a note.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-rose-900">Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-rose-900">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-rose-900">Message</label>
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} required className="mt-1 w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </div>
            <div className="flex items-center gap-3">
              <button disabled={loading} className="px-5 py-2.5 rounded-full bg-rose-600 text-white font-semibold hover:bg-rose-700 disabled:opacity-60">{loading ? 'Sending...' : 'Send Message'}</button>
              {status && <span className="text-sm text-rose-700">{status}</span>}
            </div>
          </form>
        </div>
        <div className="p-8 md:p-12 bg-rose-50 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl border-t md:border-t-0 md:border-l border-rose-100">
          <div className="space-y-4">
            <p className="text-rose-800/80">Visit us</p>
            <p className="font-semibold text-rose-900">123 Baker Street, Sweetville</p>
            <p className="text-rose-800/80">Open Tue–Sun · 7:00 AM – 3:00 PM</p>
          </div>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden ring-1 ring-rose-100">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop" alt="Bakery interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
