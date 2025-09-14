import Link from 'next/link'
import { ArrowRight, Award, Users, Gem } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Obrazek */}
          <div className="relative">
            <div className="relative h-[500px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Gem className="w-32 h-32 text-white/30" />
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-gold" />
                <div>
                  <p className="font-bold text-2xl text-stone-800">10+</p>
                  <p className="text-sm text-stone-600">Lat doświadczenia</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="font-bold text-2xl text-stone-800">5000+</p>
                  <p className="text-sm text-stone-600">Zadowolonych klientów</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tekst */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold text-stone-800">
              Pasja do kamieni naturalnych od 2014 roku
            </h2>
            
            <p className="text-stone-600 leading-relaxed">
              Emerald Stone to więcej niż sklep z biżuterią - to miejsce, gdzie natura 
              spotyka się z kunsztem jubilerskim. Każdy kamień jest starannie wyselekcjonowany, 
              a każde dzieło tworzone z pasją i dbałością o najmniejsze detale.
            </p>
            
            <p className="text-stone-600 leading-relaxed">
              Wierzymy, że biżuteria z kamieni naturalnych to nie tylko ozdoba, 
              ale także talizman niosący energię i właściwości swojego kamienia.
            </p>
            
            <Link 
              href="/about"
              className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group"
            >
              Poznaj naszą historię
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}