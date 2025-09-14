"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-emerald-gradient rounded-full flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-shadow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-emerald-gradient rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-emerald-600">
                Emerald Stone
              </span>
              <span className="text-xs text-stone-500 -mt-1">Natural Jewelry</span>
            </div>
          </Link>

          {/* Menu główne - desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              Kolekcje
            </Link>
            <Link href="/stones" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              Kamienie
            </Link>
            <Link href="/about" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              O nas
            </Link>
            <Link href="/contact" className="text-stone-700 hover:text-emerald-600 font-medium transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Ikony akcji */}
          <div className="flex items-center space-x-4">
            <button className="text-stone-600 hover:text-emerald-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="relative text-stone-600 hover:text-emerald-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-stone-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobilne */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="/collections" className="block text-stone-700 hover:text-emerald-600 font-medium">
              Kolekcjenpm install lucide-react
            </Link>
            <Link href="/stones" className="block text-stone-700 hover:text-emerald-600 font-medium">
              Kamienie
            </Link>
            <Link href="/about" className="block text-stone-700 hover:text-emerald-600 font-medium">
              O nas
            </Link>
            <Link href="/contact" className="block text-stone-700 hover:text-emerald-600 font-medium">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav