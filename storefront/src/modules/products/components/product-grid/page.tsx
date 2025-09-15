import { Product } from "@medusajs/medusa"
import ProductPreview from "../product-preview"
import { getRegion } from "@lib/data/regions"

export default async function ProductGrid({
  products,
  countryCode
}: {
  products: Product[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductPreview
          key={product.id}
          productPreview={product}
          region={region}
        />
      ))}
    </div>
  )
}