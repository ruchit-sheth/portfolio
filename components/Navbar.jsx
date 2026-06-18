'use client'

import { useState, useEffect } from 'react'

const navItems = ['home', 'about', 'projects', 'skills', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [hasScroll, setHasScroll] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    navItems.forEach((item) => {
      const element = document.getElementById(item)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      setHasScroll(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${hasScroll ? 'shadow-md' : ''}`}>
      <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full backdrop-blur-sm">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
              active === item
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
