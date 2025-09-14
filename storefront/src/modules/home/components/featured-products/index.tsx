import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
  {
    id: "1",
    name: "Naszyjnik z szmaragdem",
    price: "2,499 zł",
    image: "/images/products/emerald-necklace.jpg",
    href: "/products/emerald-necklace"
  },
  {
    id: "2", 
    name: "Bransoletka z rubinem",
    price: "1,899 zł",
    image: "/images/products/ruby-bracelet.jpg",
    href: "/products/ruby-bracelet"
  },
  {
    id: "3",
    name: "Kolczyki z szafirem",
    price: "1,299 zł", 
    image: "/images/products/sapphire-earrings.jpg",
    href: "/products/sapphire-earrings"
  },
  {
    id: "4",
    name: "Pierścionek z diamentem",
    price: "3,999 zł",
    image: "/images/products/diamond-ring.jpg", 
    href: "/products/diamond-ring"
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Produkty wyróżnione
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Odkryj nasze najpiękniejsze dzieła sztuki jubilerskiej, 
            stworzone z najwyższej jakości kamieni naturalnych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id}
              href={product.href}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-stone-100">
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                  <span className="text-stone-500 text-sm">Zdjęcie produktu</span>
                </div>
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-display text-lg font-semibold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Zobacz wszystkie produkty
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
