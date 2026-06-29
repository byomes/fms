'use client'

import { useState, useEffect } from 'react'

export default function EmailPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (sessionStorage.getItem('fms_popup_dismissed')) return
    const timer = setTimeout(() => setVisible(true), 20000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    sessionStorage.setItem('fms_popup_dismissed', '1')
    setVisible(false)
  }

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
      setTimeout(() => dismiss(), 2000)
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <p className="text-[#1e3a5f] font-semibold text-xs uppercase tracking-widest">
          Free Resources
        </p>
        <h2 className="text-gray-900 text-2xl font-bold mt-1">
          Stay equipped to defend your faith.
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Join thousands of Christians getting free apologetics resources from Faith Makes Sense.
        </p>

        {status === 'success' ? (
          <p className="text-green-600 text-sm text-center mt-3">
            You&apos;re in! Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="border border-gray-300 rounded-md px-4 py-3 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] mt-4"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#1e3a5f] text-white font-semibold py-3 rounded-md hover:bg-[#16304f] w-full mt-3 disabled:opacity-60"
            >
              {status === 'loading' ? 'Subscribing…' : 'Send Me Free Resources'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Try again.</p>
            )}
          </form>
        )}

        <span
          onClick={dismiss}
          className="text-gray-400 text-xs text-center mt-3 block cursor-pointer hover:text-gray-600"
        >
          No thanks
        </span>
      </div>
    </div>
  )
}
