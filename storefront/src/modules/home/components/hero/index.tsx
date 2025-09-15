import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight, Sparkles, Gem } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-stone-50 via-emerald-50/30 to-stone-50 overflow-hidden">
      {/* Animowane tło */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur text-emerald-700 px-5 py-2.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">KOLEKCJA 2025</span>
            </div>
            
            {/* Główny heading */}
            <div>
              <h1 className="font-display text-6xl md:text-7xl font-bold text-stone-900 leading-tight mb-4">
                Biżuteria z
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  naturalnych kamieni
                </span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                Odkryj kolekcję Hardé - gdzie natura spotyka się z elegancją. 
                Każdy kamień to unikalna historia.
              </p>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink 
                href="/store"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-600/20 group"
              >
                Odkryj kolekcję
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </LocalizedClientLink>
              
              <LocalizedClientLink 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-full transition-colors"
              >
                Poznaj Hardé
              </LocalizedClientLink>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Gem className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">100%</p>
                  <p className="text-xs text-stone-600">Naturalne</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-stone-900">Certyfikat</p>
                  <p className="text-xs text-stone-600">Autentyczności</p>
                </div>
              </div>
            </div>
          </div>

          {/* Obraz */}
          <div className="relative">
            <div className="relative w-full h-[600px]">
              {/* Główny kontener na obraz */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder z eleganckim designem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <Gem className="w-32 h-32 text-white/40" />
                      <div className="absolute inset-0 animate-pulse">
                        <Gem className="w-32 h-32 text-white/20" />
                      </div>
                    </div>
                    <p className="text-white/60 font-medium mt-4 tracking-widest">HARDÉ</p>
                  </div>
                </div>
                
                {/* Efekt shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_3s_infinite]"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-stone-800">Premium Quality</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gold text-white px-6 py-3 rounded-full shadow-xl animate-float animation-delay-1000">
                <span className="font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Edycja limitowana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero