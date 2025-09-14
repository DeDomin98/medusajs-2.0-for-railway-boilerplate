import { Text } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { Heart, ShoppingBag, Sparkles } from 'lucide-react'

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  // Sprawdź metadata dla typu kamienia
  const stoneType = product.metadata?.stone_type || "Kamień naturalny"
  const isNew = product.created_at ? new Date(product.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) : false // Nowy jeśli dodany w ciągu 30 dni

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group"
    >
      <div className="relative">
        {/* Thumbnail z efektami */}
        <div className="relative overflow-hidden rounded-xl bg-stone-100">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="square"
            isFeatured={isFeatured}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlay gradient na hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Nowość
              </span>
            )}
            {isFeatured && (
              <span className="bg-gold text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Premium
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform">
            <button 
              onClick={(e) => {
                e.preventDefault()
                // Dodaj do wishlist
              }}
              className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <Heart className="w-4 h-4 text-stone-600 hover:text-red-500" />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault()
                // Quick add to cart
              }}
              className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 text-stone-600 hover:text-emerald-600" />
            </button>
          </div>
        </div>

        {/* Informacje o produkcie */}
        <div className="mt-4 space-y-2">
          <div>
            <Text className="text-stone-500 text-xs uppercase tracking-wide font-medium">
              {String(stoneType)}
            </Text>
            <h3 className="font-medium text-stone-800 group-hover:text-emerald-600 transition-colors line-clamp-1">
              {product.title}
            </h3>
          </div>

          {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
