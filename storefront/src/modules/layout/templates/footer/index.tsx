import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Instagram, Facebook, Mail, Phone, MapPin, Gem } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-display text-3xl font-bold tracking-wider text-emerald-600">
                HARDÉ
              </span>
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Ekskluzywna biżuteria z naturalnych kamieni szlachetnych. 
              Każdy element to unikalne dzieło sztuki stworzone przez naturę.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/harde_jewelry" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all"
              >
                <Instagram className="w-5 h-5 text-stone-600" />
              </a>
              <a 
                href="https://facebook.com/hardejewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all"
              >
                <Facebook className="w-5 h-5 text-stone-600" />
              </a>
            </div>
          </div>

          {/* Kolekcje */}
          <div>
            <h4 className="font-semibold text-stone-800 mb-4">Kolekcje</h4>
            <ul className="space-y-2">
              <li>
                <LocalizedClientLink 
                  href="/categories/naszyjniki" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Naszyjniki
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/categories/bransoletki" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Bransoletki
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/categories/kolczyki" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Kolczyki
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/categories/pierscionki" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Pierścionki
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/store?collection=bestsellery" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  Bestsellery ⭐
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* Informacje */}
          <div>
            <h4 className="font-semibold text-stone-800 mb-4">Informacje</h4>
            <ul className="space-y-2">
              <li>
                <LocalizedClientLink 
                  href="/about" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  O Hardé
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/shipping" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Dostawa i płatności
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/returns" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Zwroty i reklamacje
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/care" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Pielęgnacja biżuterii
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink 
                  href="/size-guide" 
                  className="text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  Tabela rozmiarów
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-stone-800 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-stone-600">
                  ul. Zielona 15<br/>
                  41-800 Zabrze
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-stone-600">+48 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-stone-600">kontakt@harde.pl</span>
              </li>
            </ul>
            
            {/* Godziny otwarcia */}
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-xs font-medium text-stone-700 mb-1">Godziny otwarcia:</p>
              <p className="text-xs text-stone-600">Pon-Pt: 10:00-18:00</p>
              <p className="text-xs text-stone-600">Sob: 10:00-14:00</p>
            </div>
          </div>
        </div>

        {/* Dolny pasek */}
        <div className="mt-12 pt-8 border-t border-stone-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gem className="w-4 h-4 text-emerald-600" />
              <p className="text-sm text-stone-500">
                © 2025 Hardé. Wszystkie prawa zastrzeżone.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <LocalizedClientLink 
                href="/privacy" 
                className="text-sm text-stone-500 hover:text-emerald-600 transition-colors"
              >
                Polityka prywatności
              </LocalizedClientLink>
              <LocalizedClientLink 
                href="/terms" 
                className="text-sm text-stone-500 hover:text-emerald-600 transition-colors"
              >
                Regulamin
              </LocalizedClientLink>
              <LocalizedClientLink 
                href="/cookies" 
                className="text-sm text-stone-500 hover:text-emerald-600 transition-colors"
              >
                Polityka cookies
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer