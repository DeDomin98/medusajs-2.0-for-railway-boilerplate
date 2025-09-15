import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Award, Users, Gem, Heart, Shield, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "O nas - Hardé | Historia i wartości",
  description: "Poznaj historię Hardé. Od 2014 roku tworzymy wyjątkową biżuterię z naturalnych kamieni szlachetnych.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-stone-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              Historia Hardé
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Od ponad 10 lat tworzymy biżuterię, która łączy w sobie 
              naturalne piękno kamieni szlachetnych z mistrzowskim rzemiosłem.
            </p>
          </div>
        </div>
      </section>

      {/* Nasza historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-stone-900 mb-6">
                Nasza historia zaczęła się w 2014 roku
              </h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Hardé powstało z pasji do naturalnego piękna i fascynacji kamieniami szlachetnymi. 
                  Każdy kamień ma swoją historię, energię i niepowtarzalny charakter - dokładnie jak 
                  osoby, które noszą naszą biżuterię.
                </p>
                <p>
                  Rozpoczęliśmy jako małe rodzinne przedsiębiorstwo w Zabrzu, tworząc biżuterię 
                  ręcznie, kamień po kamieniu. Dziś, po latach doświadczeń, pozostajemy wierni 
                  naszej filozofii - każdy element biżuterii Hardé to małe dzieło sztuki.
                </p>
                <p>
                  Współpracujemy bezpośrednio z dostawcami kamieni z Brazylii, Sri Lanki, 
                  Madagaskaru i innych zakątków świata, aby zapewnić najwyższą jakość 
                  i autentyczność każdego kamienia.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden">
              {/* Placeholder dla zdjęcia */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Gem className="w-32 h-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wartości */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-stone-900 mb-12">
            Nasze wartości
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <Gem className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-3">
                Autentyczność
              </h3>
              <p className="text-stone-600">
                Używamy wyłącznie naturalnych kamieni szlachetnych. 
                Każdy produkt posiada certyfikat autentyczności.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-3">
                Pasja
              </h3>
              <p className="text-stone-600">
                Każdy element tworzymy z pasją i dbałością o najdrobniejsze 
                detale. To więcej niż praca - to nasza misja.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-3">
                Zaufanie
              </h3>
              <p className="text-stone-600">
                Ponad 5000 zadowolonych klientów. Oferujemy 30 dni na zwrot 
                i dożywotnią gwarancję na kamienie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liczby */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-emerald-600 mb-2">
                10+
              </div>
              <p className="text-stone-600">Lat doświadczenia</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-emerald-600 mb-2">
                5000+
              </div>
              <p className="text-stone-600">Zadowolonych klientów</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-emerald-600 mb-2">
                100%
              </div>
              <p className="text-stone-600">Naturalne kamienie</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-emerald-600 mb-2">
                30
              </div>
              <p className="text-stone-600">Dni na zwrot</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Odkryj magię naturalnych kamieni
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Dołącz do grona osób, które wybrały Hardé i noszą biżuterię 
            stworzoną z pasją i najwyższą starannością.
          </p>
          <LocalizedClientLink 
            href="/store"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:shadow-xl transition-all group"
          >
            Zobacz kolekcję
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </LocalizedClientLink>
        </div>
      </section>
    </div>
  )
}