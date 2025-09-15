import { Text } from "@medusajs/ui"
import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { Heart, ShoppingBag, Sparkles, Award } from 'lucide-react'

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  // Sprawdź czy productPreview istnieje
  if (!productPreview?.id) {
    return null
  }

  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  // Metadata z bezpiecznym dostępem
  const stoneType = productPreview.metadata?.stone_type as string || ""
  const isNew = productPreview.created_at ? 
    new Date(productPreview.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) : 
    false
  const isBestseller = productPreview.tags?.some(tag => tag.value === "bestseller") || false
  const isPremium = productPreview.tags?.some(tag => tag.value === "premium") || false

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div className="relative">
        {/* Thumbnail */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-stone-50">
          <Thumbnail
            thumbnail={productPreview.thumbnail}
            size="square"
            isFeatured={isFeatured}
            className="group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay na hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                NOWOŚĆ
              </span>
            )}
            {isBestseller && (
              <span className="bg-gold text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center gap-1">
                <Award className="w-3 h-3" />
                BESTSELLER
              </span>
            )}
            {isPremium && (
              <span className="bg-gradient-to-r from-stone-800 to-stone-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                PREMIUM
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute bottom-4 right-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
            <button 
              onClick={(e) => {
                e.preventDefault()
                // Dodaj do wishlist
              }}
              className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
            >
              <Heart className="w-5 h-5 text-stone-600 hover:text-red-500 transition-colors" />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault()
                // Quick add to cart
              }}
              className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 hover:scale-110 transition-all shadow-lg"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informacje o produkcie */}
        <div className="mt-4 space-y-2">
          {stoneType && (
            <Text className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">
              {stoneType}
            </Text>
          )}
          <h3 className="font-medium text-stone-800 group-hover:text-emerald-600 transition-colors line-clamp-1">
            {productPreview.title || "Untitled Product"}
          </h3>
          <div className="flex items-center justify-between">
            <PreviewPrice price={cheapestPrice} />
            {productPreview.variants && productPreview.variants.length > 1 && (
              <span className="text-xs text-stone-500">
                {productPreview.variants.length} warianty
              </span>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}