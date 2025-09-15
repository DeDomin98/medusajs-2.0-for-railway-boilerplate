"use client"

import { Suspense, useState } from "react"
import { useParams, usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Search, Menu, X, User, Heart } from 'lucide-react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { countryCode } = useParams()

  // Funkcja do sprawdzania aktywnego linku
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/")
  }

  return (
    <>
      {/* Górny pasek informacyjny */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>✨ Darmowa dostawa od 500 zł</span>
            <span>📞 Kontakt: +48 123 456 789</span>
          </div>
        </div>
      </div>

      {/* Główna nawigacja */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Hardé */}
            <LocalizedClientLink 
              href="/"
              className="flex items-center space-x-2 group"
            >
              <div className="flex items-center">
                {/* Eleganckie logo tekstowe */}
                <span className="font-display text-3xl font-bold tracking-wider text-emerald-600 group-hover:text-emerald-700 transition-colors">
                  HARDÉ
                </span>
                <div className="ml-2 w-2 h-2 bg-gold rounded-full"></div>
              </div>
            </LocalizedClientLink>

            {/* Menu główne - desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <LocalizedClientLink 
                href="/store"
                className={`font-medium transition-colors ${
                  isActive(`/${countryCode}/store`) 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-stone-700 hover:text-emerald-600'
                }`}
              >
                Sklep
              </LocalizedClientLink>

              {/* Dropdown dla kategorii */}
              <div className="relative group">
                <button className="font-medium text-stone-700 hover:text-emerald-600 transition-colors flex items-center">
                  Kategorie
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-lg border border-stone-200 py-2">
                    <LocalizedClientLink 
                      href="/categories/naszyjniki"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Naszyjniki
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/categories/bransoletki"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Bransoletki
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/categories/kolczyki"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Kolczyki
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/categories/pierscionki"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Pierścionki
                    </LocalizedClientLink>
                    <div className="border-t border-stone-200 my-2"></div>
                    <LocalizedClientLink 
                      href="/categories/zestawy"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Zestawy prezentowe
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>

              {/* Dropdown dla kamieni */}
              <div className="relative group">
                <button className="font-medium text-stone-700 hover:text-emerald-600 transition-colors flex items-center">
                  Kamienie
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-lg border border-stone-200 py-2">
                    <LocalizedClientLink 
                      href="/stones/szmaragd"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Szmaragd
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/stones/rubin"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Rubin
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/stones/szafir"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Szafir
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/stones/ametyst"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Ametyst
                    </LocalizedClientLink>
                    <LocalizedClientLink 
                      href="/stones/kwarc-rozowy"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Kwarc różowy
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>

              <LocalizedClientLink 
                href="/collections"
                className={`font-medium transition-colors ${
                  isActive(`/${countryCode}/collections`) 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-stone-700 hover:text-emerald-600'
                }`}
              >
                Kolekcje
              </LocalizedClientLink>

              <LocalizedClientLink 
                href="/about"
                className={`font-medium transition-colors ${
                  isActive(`/${countryCode}/about`) 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-stone-700 hover:text-emerald-600'
                }`}
              >
                O nas
              </LocalizedClientLink>
            </div>

            {/* Ikony akcji */}
            <div className="flex items-center space-x-4">
              {/* Wyszukiwarka */}
              <LocalizedClientLink 
                href="/search"
                className="text-stone-600 hover:text-emerald-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </LocalizedClientLink>

              {/* Wishlist */}
              <button className="text-stone-600 hover:text-emerald-600 transition-colors relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Konto */}
              <LocalizedClientLink 
                href="/account"
                className="text-stone-600 hover:text-emerald-600 transition-colors"
              >
                <User className="w-5 h-5" />
              </LocalizedClientLink>

              {/* Koszyk */}
              <Suspense
                fallback={
                  <LocalizedClientLink href="/cart" className="hover:text-emerald-600">
                    <div className="relative">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>

              {/* Menu mobilne */}
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
              <LocalizedClientLink 
                href="/store"
                className="block text-stone-700 hover:text-emerald-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sklep
              </LocalizedClientLink>
              <LocalizedClientLink 
                href="/categories"
                className="block text-stone-700 hover:text-emerald-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategorie
              </LocalizedClientLink>
              <LocalizedClientLink 
                href="/collections"
                className="block text-stone-700 hover:text-emerald-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kolekcje
              </LocalizedClientLink>
              <LocalizedClientLink 
                href="/about"
                className="block text-stone-700 hover:text-emerald-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                O nas
              </LocalizedClientLink>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}