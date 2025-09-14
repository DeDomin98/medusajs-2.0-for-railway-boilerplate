import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import { logAllData } from "@lib/utils/logger"
import Hero from "@modules/home/components/hero"
import FeaturedProducts from "@modules/home/components/featured-products"
import Collections from "@modules/home/components/collections"
import StoneGuide from "@modules/home/components/stone-guide"
import Testimonials from "@modules/home/components/testimonials"
import Newsletter from "@modules/home/components/newsletter"
import Benefits from "@modules/home/components/benefits"
import Instagram from "@modules/home/components/instagram"
import About from "@modules/home/components/about"
import DataInfoPanel from "@modules/common/components/data-info-panel"

export const metadata: Metadata = {
  title: "Emerald Stone - Ekskluzywna biżuteria z kamieni naturalnych",
  description: "Odkryj wyjątkową kolekcję biżuterii z naturalnych kamieni szlachetnych. Szmaragdy, rubiny, szafiry - każdy element to unikalne dzieło sztuki.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  // Logowanie danych aplikacji
  await logAllData(countryCode)
  
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Benefity */}
      <Benefits />
      
      {/* Produkty wyróżnione */}
      <FeaturedProducts />
      
      {/* Kolekcje */}
      <Collections />
      
      {/* O nas - krótka sekcja */}
      <About />
      
      {/* Przewodnik po kamieniach */}
      <StoneGuide />
      
      {/* Opinie klientów */}
      <Testimonials />
      
      {/* Instagram feed */}
      <Instagram />
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Panel informacji o danych */}
      <DataInfoPanel />
    </>
  )
}
