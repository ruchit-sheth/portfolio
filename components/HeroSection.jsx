'use client'

import Image from 'next/image'
import { MapPin, CheckCircle } from 'lucide-react'
import { portfolio } from '@/src/data/portfolio'
import { GitHubIcon, LinkedInIcon, DiscordIcon, InstagramIcon } from './SocialIcons'

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = portfolio.cvUrl
    link.download = 'Ruchit_Sheth_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-6 pt-20 bg-white text-gray-900">
      <div className="max-w-7xl w-full flex gap-12 items-center">
        <div className="flex-1 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Available for freelance work</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Hi, I&apos;m {portfolio.name}
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-black mb-6">
            <span>{portfolio.role}</span>
          </div>

          <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-sm">
            {portfolio.bio}
          </p>

          <div className="flex gap-3 mb-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-400 rounded-full text-sm text-gray-900">
              <MapPin size={16} className="text-gray-900 shrink-0" />
              <span className="font-medium">Based in {portfolio.location.split(',')[0]}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-400 rounded-full text-sm text-gray-900">
              <CheckCircle size={16} className="text-gray-900 shrink-0" />
              <span className="font-medium">{portfolio.status}</span>
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
              <span>⬇</span> Download Résumé
            </button>
          </div>

          <div className="h-px bg-gray-300 mb-8 max-w-xs"></div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Follow me:</span>
            <div className="flex gap-4">
              <a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300">
                <GitHubIcon size={22} />
              </a>
              <a href={portfolio.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300">
                <DiscordIcon size={22} />
              </a>
              <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300">
                <LinkedInIcon size={22} />
              </a>
              <a href={portfolio.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300">
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <Image
            src="/portfolio_guy.png"
            alt="Portfolio"
            width={480}
            height={640}
            className="float-animation w-full max-w-xl h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
