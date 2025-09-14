import Link from 'next/link'
import { Sparkles, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-gradient rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-emerald-600">
                Emerald Stone
              </span>
            </div>
            <p className="text-sm text-stone-600">
              Ekskluzywna biżuteria z kamieni naturalnych. 
              Każdy element to unikalne dzieło sztuki.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors">
                <Instagram className="w-4 h-4 text-emerald-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors">
                <Facebook className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
          </div>

          {/* Kolekcje */}
          <div>
            <h4 className="font-medium text-stone-800 mb-4">Kolekcje</h4>
            <ul className="space-y-2">
              <li><Link href="/collections/necklaces" className="text-sm text-stone-600 hover:text-emerald-600">Naszyjniki</Link></li>
              <li><Link href="/collections/bracelets" className="text-sm text-stone-600 hover:text-emerald-600">Bransoletki</Link></li>
              <li><Link href="/collections/earrings" className="text-sm text-stone-600 hover:text-emerald-600">Kolczyki</Link></li>
              <li><Link href="/collections/rings" className="text-sm text-stone-600 hover:text-emerald-600">Pierścionki</Link></li>
            </ul>
          </div>

          {/* Informacje */}
          <div>
            <h4 className="font-medium text-stone-800 mb-4">Informacje</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-stone-600 hover:text-emerald-600">O nas</Link></li>
              <li><Link href="/delivery" className="text-sm text-stone-600 hover:text-emerald-600">Dostawa</Link></li>
              <li><Link href="/returns" className="text-sm text-stone-600 hover:text-emerald-600">Zwroty</Link></li>
              <li><Link href="/care" className="text-sm text-stone-600 hover:text-emerald-600">Pielęgnacja biżuterii</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-medium text-stone-800 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span className="text-sm text-stone-600">ul. Zielona 15<br/>Zabrze, 41-800</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-stone-600">+48 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-stone-600">kontakt@emeraldstone.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-stone-500">
              © 2025 Emerald Stone. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-stone-500 hover:text-emerald-600">Polityka prywatności</Link>
              <Link href="/terms" className="text-sm text-stone-500 hover:text-emerald-600">Regulamin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer