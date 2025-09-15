"use client"

import { ShoppingBag } from 'lucide-react'
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function CartButton() {
  // Prosta wersja bez dynamicznego licznika
  return (
    <LocalizedClientLink 
      href="/cart"
      className="relative text-stone-600 hover:text-emerald-600 transition-colors group"
    >
      <ShoppingBag className="w-5 h-5" />
      {/* Licznik będzie dodany później */}
    </LocalizedClientLink>
  )
}