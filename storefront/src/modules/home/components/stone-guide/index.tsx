import { Sparkles, Heart, Shield, Star } from 'lucide-react'

const stones = [
  {
    name: "Szmaragd",
    color: "bg-emerald-500",
    description: "Kamień miłości i mądrości",
    properties: "Wzmacnia intuicję, przynosi harmonię",
    icon: Heart
  },
  {
    name: "Szafir",
    color: "bg-blue-600",
    description: "Symbol prawdy i wierności",
    properties: "Wspiera koncentrację, łagodzi stres",
    icon: Star
  },
  {
    name: "Rubin",
    color: "bg-red-600",
    description: "Kamień pasji i energii",
    properties: "Dodaje pewności siebie, chroni",
    icon: Shield
  },
  {
    name: "Ametyst",
    color: "bg-purple-600",
    description: "Kryształ spokoju",
    properties: "Oczyszcza umysł, wspiera medytację",
    icon: Sparkles
  }
]

export default function StoneGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Przewodnik po kamieniach
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Poznaj właściwości i znaczenie kamieni naturalnych. 
            Wybierz ten, który najlepiej odpowiada Twoim potrzebom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stones.map((stone) => {
            const Icon = stone.icon
            return (
              <div key={stone.name} className="bg-stone-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${stone.color} rounded-full mr-4`}></div>
                  <Icon className="w-6 h-6 text-stone-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-800 mb-2">
                  {stone.name}
                </h3>
                <p className="text-sm text-stone-600 mb-3">
                  {stone.description}
                </p>
                <p className="text-xs text-emerald-600 font-medium">
                  {stone.properties}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-emerald-gradient text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
            Dowiedz się więcej o kamieniach
          </button>
        </div>
      </div>
    </section>
  )
}