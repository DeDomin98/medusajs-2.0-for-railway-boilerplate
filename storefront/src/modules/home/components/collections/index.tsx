import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    name: "Naszyjniki",
    handle: "naszyjniki",
    image: "/images/collections/necklaces.jpg",
    count: 24,
    gradient: "from-emerald-400 to-emerald-600"
  },
  {
    name: "Bransoletki",
    handle: "bransoletki",
    image: "/images/collections/bracelets.jpg",
    count: 18,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    name: "Kolczyki",
    handle: "kolczyki",
    image: "/images/collections/earrings.jpg",
    count: 32,
    gradient: "from-purple-400 to-purple-600"
  },
  {
    name: "Zestawy",
    handle: "zestawy-prezentowe",
    image: "/images/collections/sets.jpg",
    count: 12,
    gradient: "from-gold to-yellow-600"
  }
]

export default function Collections() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Odkryj nasze kolekcje
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Każda kolekcja to starannie wyselekcjonowane dzieła sztuki jubilerskiej, 
            łączące naturalne piękno kamieni z mistrzowskim rzemiosłem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link 
              key={collection.handle}
              href={`/collections/${collection.handle}`}
              className="group relative"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden">
                {/* Placeholder image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`}></div>
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-display text-2xl font-bold mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {collection.count} produktów
                  </p>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Zobacz kolekcję</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/collections"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Zobacz wszystkie kolekcje
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}