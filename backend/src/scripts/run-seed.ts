// src/scripts/run-seed.ts
import { initializeContainer } from "../loaders"
import { seedJewelryProducts } from "./seed-jewelry-products"

async function main() {
  console.log("🚀 Uruchamiam seed produktów...")
  
  try {
    const container = await initializeContainer()
    await seedJewelryProducts(container)
    
    console.log("✅ Import zakończony!")
    process.exit(0)
  } catch (error) {
    console.error("❌ Błąd podczas importu:", error)
    process.exit(1)
  }
}

main()