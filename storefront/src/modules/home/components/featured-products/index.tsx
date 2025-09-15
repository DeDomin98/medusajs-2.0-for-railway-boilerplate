import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"
import { getCollectionsList } from "@lib/data/collections"


export default async function FeaturedProducts({
  countryCode,
}: {
  countryCode: string
}) {
  const { collections } = await getCollectionsList(0, 3)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Nagłówek sekcji */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Wyróżnione produkty
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Odkryj nasze najpiękniejsze kreacje - biżuteria Hardé łączy w sobie 
            elegancję i naturalną energię kamieni szlachetnych
          </p>
        </div>

        {/* Lista kolekcji */}
        <ul className="flex flex-col gap-x-6 gap-y-16">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ProductRail collection={collection} region={region} />
            </li>
          ))}
        </ul>

        {/* CTA do sklepu */}
        <div className="text-center mt-16">
          <LocalizedClientLink 
            href="/store"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-600/20 group"
          >
            Zobacz wszystkie produkty
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

async function getRegion(countryCode: string): Promise<Region | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/regions`,
      {
        headers: {
          "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
        },
        next: {
          revalidate: 900,
        },
      }
    )

    const { regions } = await response.json()
    
    return regions?.find((r: Region) => 
      r.countries?.some(c => c.iso_2 === countryCode.toUpperCase())
    ) || regions?.[0] || null
  } catch (error) {
    console.error("Error fetching region:", error)
    return null
  }
}