'use client'

import Image from 'next/image'
import { GitBranch, Music, Heart, Mail, MapPin, CheckCircle } from 'lucide-react'
import { portfolio } from '@/src/data/portfolio'

export default function HeroSection() {
  const handleDownloadCV = () => {
    window.open(portfolio.cvUrl, '_blank')
  }

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-6 pt-20 bg-white">
      <div className="max-w-7xl w-full flex gap-12 items-center">
        <div className="flex-1 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Available for freelance work</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Hi, I&apos;m {portfolio.name}
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-1">
            <span>{portfolio.role}</span>
            <span className="blink-cursor">|</span>
          </div>

          <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-sm">
            {portfolio.bio}
          </p>

          <div className="flex gap-3 mb-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm">
              <MapPin size={16} />
              <span>Based in {portfolio.location.split(',')[0]}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm">
              <CheckCircle size={16} />
              <span>{portfolio.status}</span>
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
              <span>→</span> Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-2.5 bg-white text-black border-2 border-black rounded-lg font-medium hover:scale-105 transition-transform duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <span>⬇</span> Download CV
            </button>
          </div>

          <div className="h-px bg-gray-300 mb-8 max-w-xs"></div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Follow me:</span>
            <div className="flex gap-4">
              <a href={portfolio.github} className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <GitBranch size={22} />
              </a>
              <a href={portfolio.discord} className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <Music size={22} />
              </a>
              <a href={portfolio.linkedin} className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <Heart size={22} />
              </a>
              <a href={portfolio.instagram} className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <Image
            src="/portfolio_guy.png"
            alt="Portfolio"
            width={300}
            height={400}
            className="float-animation"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  )
}
