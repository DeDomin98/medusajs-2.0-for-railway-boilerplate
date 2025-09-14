import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-stone-50 to-emerald-50 overflow-hidden">
      {/* Dekoracyjne elementy tła */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Nowa kolekcja 2025</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-800 leading-tight">
              Naturalne piękno
              <span className="block text-emerald-600">w Twoich rękach</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              Odkryj ekskluzywną kolekcję biżuterii z najszlachetniejszych kamieni naturalnych. 
              Każdy element to unikalne dzieło sztuki stworzone przez naturę.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/collections"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-gradient text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all group"
              >
                Odkryj kolekcję
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Poznaj nas
              </Link>
            </div>
          </div>

          {/* Obraz/Placeholder */}
          <div className="relative">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder dla obrazu */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-20 h-20 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 font-medium">Hero Image</p>
                </div>
              </div>
              
              {/* Efekt shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-white px-6 py-3 rounded-full shadow-lg animate-float">
              <span className="font-bold">100% Naturalne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero