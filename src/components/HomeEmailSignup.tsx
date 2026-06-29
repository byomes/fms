'use client'

import { useState } from 'react'

export default function HomeEmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://watson.tail0243ff.ts.net/api/kit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tag: 'fms' }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-[#1e3a5f] py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-white font-bold text-2xl">Stay Equipped</h2>
        <p className="text-white/70 text-base mt-2">
          Free apologetics resources, new handouts, and ministry updates —{' '}
          delivered to your inbox.
        </p>
        {status === 'success' ? (
          <p className="text-white font-medium mt-6">You&apos;re in. Welcome to FMS.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white px-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-white rounded-md sm:rounded-r-none sm:rounded-l-md flex-1 w-full"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-[#1e3a5f] font-semibold px-6 py-3 hover:bg-blue-50 rounded-md sm:rounded-l-none sm:rounded-r-md mt-2 sm:mt-0 disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </div>
            {status === 'error' && (
              <p className="text-white/80 mt-2 text-sm">Something went wrong. Try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
