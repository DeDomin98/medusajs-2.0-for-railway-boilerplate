import { HttpTypes } from "@medusajs/types"

// Funkcja do logowania kolekcji
export function logCollections(collections: HttpTypes.StoreCollection[] | null) {
  console.group("🛍️ KOLEKCJE")
  
  if (!collections || collections.length === 0) {
    console.log("❌ Brak kolekcji")
    console.groupEnd()
    return
  }

  console.log(`📊 Liczba kolekcji: ${collections.length}`)
  
  collections.forEach((collection, index) => {
    console.group(`📁 Kolekcja ${index + 1}: ${collection.title}`)
    console.log(`🆔 ID: ${collection.id}`)
    console.log(`🔗 Handle: ${collection.handle}`)
    console.log(`📝 Opis: ${collection.description || 'Brak opisu'}`)
    console.log(`🖼️ Obraz: ${collection.thumbnail || 'Brak obrazu'}`)
    console.log(`📅 Data utworzenia: ${collection.created_at}`)
    console.log(`📅 Data aktualizacji: ${collection.updated_at}`)
    
    if (collection.products && collection.products.length > 0) {
      console.log(`📦 Produkty w kolekcji: ${collection.products.length}`)
      collection.products.forEach((product: any, productIndex: number) => {
        console.log(`  ${productIndex + 1}. ${product.title} (${product.id})`)
      })
    } else {
      console.log("📦 Brak produktów w kolekcji")
    }
    
    console.groupEnd()
  })
  
  console.groupEnd()
}

// Funkcja do logowania produktów
export function logProducts(products: HttpTypes.StoreProduct[] | null) {
  console.group("🛒 PRODUKTY")
  
  if (!products || products.length === 0) {
    console.log("❌ Brak produktów")
    console.groupEnd()
    return
  }

  console.log(`📊 Liczba produktów: ${products.length}`)
  
  products.forEach((product, index) => {
    console.group(`📦 Produkt ${index + 1}: ${product.title}`)
    console.log(`🆔 ID: ${product.id}`)
    console.log(`🔗 Handle: ${product.handle}`)
    console.log(`📝 Opis: ${product.description || 'Brak opisu'}`)
    console.log(`🏷️ Kategoria ID: ${product.category_id || 'Brak kategorii'}`)
    console.log(`📁 Kolekcja ID: ${product.collection_id || 'Brak kolekcji'}`)
    console.log(`📅 Data utworzenia: ${product.created_at}`)
    console.log(`📅 Data aktualizacji: ${product.updated_at}`)
    
    if (product.variants && product.variants.length > 0) {
      console.log(`💰 Warianty (${product.variants.length}):`)
      product.variants.forEach((variant: any, variantIndex: number) => {
        console.log(`  ${variantIndex + 1}. ${variant.title}`)
        console.log(`     💵 Cena: ${variant.calculated_price?.calculated_amount ? 
          (variant.calculated_price.calculated_amount / 100).toFixed(2) + ' ' + variant.calculated_price.currency_code : 
          'Brak ceny'}`)
        console.log(`     📦 Dostępność: ${variant.inventory_quantity || 0}`)
      })
    } else {
      console.log("💰 Brak wariantów")
    }
    
    if (product.images && product.images.length > 0) {
      console.log(`🖼️ Obrazy (${product.images.length}):`)
      product.images.forEach((image: any, imageIndex: number) => {
        console.log(`  ${imageIndex + 1}. ${image.url}`)
      })
    } else {
      console.log("🖼️ Brak obrazów")
    }
    
    console.groupEnd()
  })
  
  console.groupEnd()
}

// Funkcja do logowania kategorii
export function logCategories(categories: any[] | null) {
  console.group("📂 KATEGORIE")
  
  if (!categories || categories.length === 0) {
    console.log("❌ Brak kategorii")
    console.groupEnd()
    return
  }

  console.log(`📊 Liczba kategorii: ${categories.length}`)
  
  categories.forEach((category, index) => {
    console.group(`📁 Kategoria ${index + 1}: ${category.name}`)
    console.log(`🆔 ID: ${category.id}`)
    console.log(`🔗 Handle: ${category.handle}`)
    console.log(`📝 Opis: ${category.description || 'Brak opisu'}`)
    console.log(`🖼️ Obraz: ${category.thumbnail || 'Brak obrazu'}`)
    console.log(`📅 Data utworzenia: ${category.created_at}`)
    console.log(`📅 Data aktualizacji: ${category.updated_at}`)
    
    if (category.category_children && category.category_children.length > 0) {
      console.log(`👶 Podkategorie (${category.category_children.length}):`)
      category.category_children.forEach((child: any, childIndex: number) => {
        console.log(`  ${childIndex + 1}. ${child.name} (${child.id})`)
      })
    } else {
      console.log("👶 Brak podkategorii")
    }
    
    console.groupEnd()
  })
  
  console.groupEnd()
}

// Funkcja do logowania regionów
export function logRegions(regions: any[] | null) {
  console.group("🌍 REGIONY")
  
  if (!regions || regions.length === 0) {
    console.log("❌ Brak regionów")
    console.groupEnd()
    return
  }

  console.log(`📊 Liczba regionów: ${regions.length}`)
  
  regions.forEach((region, index) => {
    console.group(`🌍 Region ${index + 1}: ${region.name}`)
    console.log(`🆔 ID: ${region.id}`)
    console.log(`🏷️ Kod kraju: ${region.countries?.map((c: any) => c.iso_2).join(', ') || 'Brak'}`)
    console.log(`💰 Waluta: ${region.currency_code}`)
    console.log(`📅 Data utworzenia: ${region.created_at}`)
    console.log(`📅 Data aktualizacji: ${region.updated_at}`)
    console.groupEnd()
  })
  
  console.groupEnd()
}

// Funkcja do logowania wszystkich danych
export async function logAllData(countryCode: string) {
  console.clear()
  console.log("🚀 ROZPOCZYNAM LOGOWANIE DANYCH APLIKACJI")
  console.log("=" .repeat(50))
  
  try {
    // Import funkcji pobierających dane
    const { getCollectionsList } = await import("@lib/data/collections")
    const { getProductsList } = await import("@lib/data/products")
    const { listCategories } = await import("@lib/data/categories")
    const { getRegion } = await import("@lib/data/regions")
    
    // Pobierz i zaloguj kolekcje
    console.log("📥 Pobieranie kolekcji...")
    const { collections } = await getCollectionsList(0, 100)
    logCollections(collections)
    
    // Pobierz i zaloguj produkty
    console.log("📥 Pobieranie produktów...")
    const { response: productsResponse } = await getProductsList({
      countryCode,
      queryParams: { limit: 50 }
    })
    logProducts(productsResponse.products)
    
    // Pobierz i zaloguj kategorie
    console.log("📥 Pobieranie kategorii...")
    const categories = await listCategories()
    logCategories(categories)
    
    // Pobierz i zaloguj regiony
    console.log("📥 Pobieranie regionów...")
    const region = await getRegion(countryCode)
    if (region) {
      logRegions([region])
    } else {
      logRegions(null)
    }
    
    console.log("✅ LOGOWANIE ZAKOŃCZONE")
    console.log("=" .repeat(50))
    
  } catch (error) {
    console.error("❌ BŁĄD PODCZAS LOGOWANIA:", error)
  }
}

// Funkcja do szybkiego logowania podstawowych statystyk
export function logQuickStats(collections: number, products: number, categories: number, regions: number) {
  console.log("📊 SZYBKIE STATYSTYKI:")
  console.log(`🛍️ Kolekcje: ${collections}`)
  console.log(`🛒 Produkty: ${products}`)
  console.log(`📂 Kategorie: ${categories}`)
  console.log(`🌍 Regiony: ${regions}`)
}

// Funkcja do logowania błędów API
export function logApiError(endpoint: string, error: any) {
  console.group("❌ BŁĄD API")
  console.log(`🔗 Endpoint: ${endpoint}`)
  console.log(`📝 Błąd:`, error)
  console.log(`⏰ Czas: ${new Date().toLocaleString()}`)
  console.groupEnd()
}

// Funkcja do logowania wydajności
export function logPerformance(operation: string, startTime: number) {
  const endTime = performance.now()
  const duration = endTime - startTime
  
  console.log(`⏱️ ${operation}: ${duration.toFixed(2)}ms`)
}
