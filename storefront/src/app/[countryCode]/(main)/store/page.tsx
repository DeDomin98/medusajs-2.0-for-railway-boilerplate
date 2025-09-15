import { Metadata } from "next"
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import ProductGrid from "@modules/products/components/product-grid/page
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Gem, Filter, ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Sklep - Hardé | Biżuteria z kamieni naturalnych",
  description: "Odkryj pełną kolekcję biżuterii Hardé. Naszyjniki, bransoletki, kolczyki i pierścionki z naturalnymi kamieniami szlachetnymi.",
}

export default async function StorePage({
  params,
  searchParams,
}: {
  params: { countryCode: string }
  searchParams: {
    page?: string
    collection?: string
    sortBy?: string
  }
}) {
  const { countryCode } = params
  const page = parseInt(searchParams.page || "1")
  
  const { products, count } = await getProductsList({
    pageParam: page,
    countryCode,
    collectionHandle: searchParams.collection,
    sortBy: searchParams.sortBy as any || "created_at"
  })

  const { collections } = await getCollectionsList()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero sklepu */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-stone-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Gem className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-900 mb-4">
              Sklep Hardé
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Odkryj naszą pełną kolekcję biżuterii z naturalnymi kamieniami szlachetnymi. 
              Każdy element to unikalne dzieło sztuki stworzone przez naturę.
            </p>
          </div>

          {/* Szybkie filtry */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <LocalizedClientLink
              href="/store"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !searchParams.collection 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-stone-700 hover:bg-emerald-50'
              }`}
            >
              Wszystkie
            </LocalizedClientLink>
            {collections?.map((collection) => (
              <LocalizedClientLink
                key={collection.id}
                href={`/store?collection=${collection.handle}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  searchParams.collection === collection.handle
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white text-stone-700 hover:bg-emerald-50'
                }`}
              >
                {collection.title}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      </div>

      {/* Sekcja produktów */}
      <div className="container mx-auto px-4 py-12">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-stone-600">
            Znaleziono <span className="font-semibold text-stone-900">{count}</span> produktów
          </p>
          
          {/* Sortowanie */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <select 
                className="appearance-none bg-white border border-stone-200 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => {
                  window.location.href = `/store?sortBy=${e.target.value}${searchParams.collection ? `&collection=${searchParams.collection}` : ''}`
                }}
                defaultValue={searchParams.sortBy || "created_at"}
              >
                <option value="created_at">Najnowsze</option>
                <option value="price_asc">Cena: rosnąco</option>
                <option value="price_desc">Cena: malejąco</option>
                <option value="title">Alfabetycznie</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Grid produktów */}
        <ProductGrid 
          products={products}
          countryCode={countryCode}
        />

        {/* Paginacja */}
        {count > 12 && (
          <div className="mt-16 flex justify-center gap-3">
            {page > 1 && (
              <LocalizedClientLink
                href={`/store?page=${page - 1}${searchParams.collection ? `&collection=${searchParams.collection}` : ''}${searchParams.sortBy ? `&sortBy=${searchParams.sortBy}` : ''}`}
                className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-colors"
              >
                ← Poprzednia strona
              </LocalizedClientLink>
            )}
            
            <span className="px-6 py-3 text-stone-600">
              Strona {page} z {Math.ceil(count / 12)}
            </span>
            
            {page * 12 < count && (
              <LocalizedClientLink
                href={`/store?page=${page + 1}${searchParams.collection ? `&collection=${searchParams.collection}` : ''}${searchParams.sortBy ? `&sortBy=${searchParams.sortBy}` : ''}`}
                className="px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                Następna strona →
              </LocalizedClientLink>
            )}
          </div>
        )}
      </div>
    </div>
  )
}