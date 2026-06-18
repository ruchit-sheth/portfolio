'use client'

import { GitBranch, Heart } from 'lucide-react'
import { portfolio } from '@/src/data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Contact</h2>
        
        <p className="text-lg text-gray-600 mb-12">Let&apos;s work together</p>

        <a
          href={`mailto:${portfolio.email}`}
          className="text-4xl font-bold text-black hover:underline transition-all duration-300 mb-12 inline-block"
        >
          {portfolio.email}
        </a>

        <div className="flex justify-center gap-6 mt-12">
          <a href={portfolio.github} className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300">
            <GitBranch size={28} />
          </a>
          <a href={portfolio.linkedin} className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300">
            <Heart size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
