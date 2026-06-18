'use client'

import { useState } from 'react'
import { portfolio } from '@/src/data/portfolio'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      setForm({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-white text-gray-900">
      <div className="max-w-xl w-full">
        <h2 className="text-4xl font-bold text-black mb-12">Get in Touch</h2>

        <div className="border border-gray-300 rounded-xl p-8 bg-white">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">Let&apos;s Connect</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mb-8 leading-relaxed">
            Want to chat? Send me a message below or email me at{' '}
            <a href={`mailto:${portfolio.email}`} className="text-black font-medium hover:underline">
              {portfolio.email}
            </a>
          </p>

          <div className="relative flex items-center mb-8">
            <div className="grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500 shrink-0">Email Form</span>
            <div className="grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-center text-green-600 font-medium">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-center text-red-600 font-medium">
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
