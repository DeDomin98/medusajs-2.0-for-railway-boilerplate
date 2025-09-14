// Plik: backend/src/scripts/seed-jewelry-products.ts

// src/scripts/seed-jewelry-products.ts
import type { ExecArgs } from "@medusajs/framework/types"
import {
  ContainerRegistrationKeys,
  Modules,
  ProductStatus,
} from "@medusajs/framework/utils"
import {
  createCollectionsWorkflow,
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  createInventoryLevelsWorkflow,
} from "@medusajs/medusa/core-flows"

// DANE PRODUKTÓW - BIŻUTERIA Z KAMIENI NATURALNYCH
const PRODUCTS_DATA = [
  // === NASZYJNIKI ===
  {
    title: "Naszyjnik Szmaragdowa Łza",
    subtitle: "Ekskluzywny naszyjnik z naturalnym szmaragdem",
    handle: "naszyjnik-szmaragdowa-lza",
    description: "Elegancki naszyjnik z centralnym szmaragdem o wadze 2 karatów, oprawiony w srebro 925. Kamień pochodzi z Brazylii i charakteryzuje się głęboką, intensywną zielenią. Długość naszyjnika to 45cm z możliwością regulacji.",
    is_giftcard: false,
    discountable: true,
    weight: 25,
    status: "published",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    tags: ["bestseller", "premium"],
    collection_handles: ["naszyjniki", "bestsellery"],
    categories: ["kamienie-szlachetne-szmaragd", "typ-bizuterii-naszyjniki"],
    variants: [
      {
        title: "Srebro 925",
        sku: "NSZ-001-S925",
        barcode: "1234567890123",
        inventory_quantity: 5,
        manage_inventory: true,
        weight: 25,
        prices: [
          { currency_code: "PLN", amount: 89900 },
          { currency_code: "EUR", amount: 19900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Srebro 925" }
        ]
      },
      {
        title: "Złoto 14k",
        sku: "NSZ-001-G14K",
        barcode: "1234567890124",
        inventory_quantity: 2,
        manage_inventory: true,
        weight: 28,
        prices: [
          { currency_code: "PLN", amount: 249900 },
          { currency_code: "EUR", amount: 54900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Złoto 14k" }
        ]
      }
    ],
    metadata: {
      stone_type: "Szmaragd",
      stone_weight: "2ct",
      stone_origin: "Brazylia",
      metal: "Srebro 925 / Złoto 14k",
      length: "45cm",
      certificate: "Tak",
      care_instructions: "Czyścić miękką szmatką, unikać kontaktu z chemikaliami"
    }
  },
  {
    title: "Naszyjnik Rubinowe Serce",
    subtitle: "Romantyczny naszyjnik z rubinem",
    handle: "naszyjnik-rubinowe-serce",
    description: "Piękny naszyjnik z rubinem w kształcie serca. Kamień o wadze 1.5 karata osadzony w delikatnej oprawie. Idealny prezent dla ukochanej osoby.",
    is_giftcard: false,
    discountable: true,
    weight: 20,
    status: "published",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    tags: ["new"],
    collection_handles: ["naszyjniki"],
    categories: ["kamienie-szlachetne-rubin", "typ-bizuterii-naszyjniki"],
    variants: [
      {
        title: "Srebro 925",
        sku: "NRU-001-S925",
        barcode: "1234567890125",
        inventory_quantity: 8,
        manage_inventory: true,
        weight: 20,
        prices: [
          { currency_code: "PLN", amount: 69900 },
          { currency_code: "EUR", amount: 15900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Srebro 925" }
        ]
      }
    ],
    metadata: {
      stone_type: "Rubin",
      stone_weight: "1.5ct",
      stone_origin: "Myanmar",
      metal: "Srebro 925",
      length: "40cm",
      certificate: "Tak"
    }
  },
  {
    title: "Naszyjnik Szafirowa Noc",
    subtitle: "Elegancki naszyjnik z szafirem królewskim",
    handle: "naszyjnik-szafirowa-noc",
    description: "Wyjątkowy naszyjnik z szafirem królewskim o intensywnie niebieskiej barwie. Kamień o wadze 2.5 karata, pochodzący ze Sri Lanki.",
    is_giftcard: false,
    discountable: true,
    weight: 30,
    status: "published",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    tags: ["premium", "limited"],
    collection_handles: ["naszyjniki", "bestsellery"],
    categories: ["kamienie-szlachetne-szafir", "typ-bizuterii-naszyjniki"],
    variants: [
      {
        title: "Złoto białe 14k",
        sku: "NSZ-001-WG14K",
        barcode: "1234567890126",
        inventory_quantity: 1,
        manage_inventory: true,
        weight: 30,
        prices: [
          { currency_code: "PLN", amount: 389900 },
          { currency_code: "EUR", amount: 84900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Złoto białe 14k" }
        ]
      }
    ],
    metadata: {
      stone_type: "Szafir",
      stone_weight: "2.5ct",
      stone_origin: "Sri Lanka",
      metal: "Złoto białe 14k",
      length: "45cm",
      certificate: "GIA",
      limited_edition: "true"
    }
  },

  // === BRANSOLETKI ===
  {
    title: "Bransoletka Kwarc Różowy Harmonia",
    subtitle: "Delikatna bransoletka z kwarcu różowego",
    handle: "bransoletka-kwarc-rozowy-harmonia",
    description: "Elastyczna bransoletka wykonana z naturalnych kamieni kwarcu różowego. Każda kulka ma średnicę 8mm. Kwarc różowy znany jest jako kamień miłości i harmonii.",
    is_giftcard: false,
    discountable: true,
    weight: 15,
    status: "published",
    images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
    tags: ["bestseller"],
    collection_handles: ["bransoletki", "bestsellery"],
    categories: ["kamienie-szlachetne-kwarc-rozowy", "typ-bizuterii-bransoletki"],
    variants: [
      {
        title: "Rozmiar S/M",
        sku: "BKR-001-SM",
        barcode: "1234567890127",
        inventory_quantity: 15,
        manage_inventory: true,
        weight: 15,
        prices: [
          { currency_code: "PLN", amount: 29900 },
          { currency_code: "EUR", amount: 6900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "S/M" }
        ]
      },
      {
        title: "Rozmiar L/XL",
        sku: "BKR-001-LXL",
        barcode: "1234567890128",
        inventory_quantity: 12,
        manage_inventory: true,
        weight: 18,
        prices: [
          { currency_code: "PLN", amount: 32900 },
          { currency_code: "EUR", amount: 7400 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "L/XL" }
        ]
      }
    ],
    metadata: {
      stone_type: "Kwarc różowy",
      beads_size: "8mm",
      bracelet_type: "Elastyczna",
      properties: "Kamień miłości, harmonii i spokoju"
    }
  },
  {
    title: "Bransoletka Tygrysie Oko Siła",
    subtitle: "Męska bransoletka z tygrysiего oka",
    handle: "bransoletka-tygrysie-oko-sila",
    description: "Masywna bransoletka z kamieni tygrysiего oka. Idealna dla mężczyzn ceniących naturalne materiały. Tygrysie oko to kamień ochrony i odwagi.",
    is_giftcard: false,
    discountable: true,
    weight: 20,
    status: "published",
    images: ["https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400",
    tags: ["new"],
    collection_handles: ["bransoletki"],
    categories: ["kamienie-szlachetne-tygrysie-oko", "typ-bizuterii-bransoletki"],
    variants: [
      {
        title: "Rozmiar M",
        sku: "BTO-001-M",
        barcode: "1234567890129",
        inventory_quantity: 10,
        manage_inventory: true,
        weight: 20,
        prices: [
          { currency_code: "PLN", amount: 39900 },
          { currency_code: "EUR", amount: 8900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "M" }
        ]
      },
      {
        title: "Rozmiar L",
        sku: "BTO-001-L",
        barcode: "1234567890130",
        inventory_quantity: 8,
        manage_inventory: true,
        weight: 25,
        prices: [
          { currency_code: "PLN", amount: 44900 },
          { currency_code: "EUR", amount: 9900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "L" }
        ]
      }
    ],
    metadata: {
      stone_type: "Tygrysie oko",
      beads_size: "10mm",
      bracelet_type: "Elastyczna",
      properties: "Kamień ochrony, odwagi i siły",
      gender: "Męska"
    }
  },
  {
    title: "Bransoletka Ametyst Medytacja",
    subtitle: "Bransoletka z ametystem dla równowagi",
    handle: "bransoletka-ametyst-medytacja",
    description: "Piękna bransoletka z naturalnego ametystu w odcieniach fioletu. Ametyst wspiera medytację i przynosie spokój umysłu.",
    is_giftcard: false,
    discountable: true,
    weight: 18,
    status: "published",
    images: ["https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400",
    tags: [],
    collection_handles: ["bransoletki"],
    categories: ["kamienie-szlachetne-ametyst", "typ-bizuterii-bransoletki"],
    variants: [
      {
        title: "Uniwersalny",
        sku: "BAM-001-UNI",
        barcode: "1234567890131",
        inventory_quantity: 20,
        manage_inventory: true,
        weight: 18,
        prices: [
          { currency_code: "PLN", amount: 34900 },
          { currency_code: "EUR", amount: 7900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "Uniwersalny" }
        ]
      }
    ],
    metadata: {
      stone_type: "Ametyst",
      beads_size: "8mm",
      bracelet_type: "Elastyczna",
      properties: "Kamień medytacji, spokoju i intuicji"
    }
  },

  // === KOLCZYKI ===
  {
    title: "Kolczyki Labradoryt Moonlight",
    subtitle: "Mistyczne kolczyki z labradorytu",
    handle: "kolczyki-labradoryt-moonlight",
    description: "Wiszące kolczyki z labradorytu o niesamowitej grze barw. Każdy kamień mieni się odcieniami błękitu i zieleni.",
    is_giftcard: false,
    discountable: true,
    weight: 8,
    status: "published",
    images: ["https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400",
    tags: ["bestseller", "new"],
    collection_handles: ["kolczyki", "bestsellery"],
    categories: ["kamienie-szlachetne-labradoryt", "typ-bizuterii-kolczyki"],
    variants: [
      {
        title: "Srebro 925",
        sku: "KLA-001-S925",
        barcode: "1234567890132",
        inventory_quantity: 6,
        manage_inventory: true,
        weight: 8,
        prices: [
          { currency_code: "PLN", amount: 44900 },
          { currency_code: "EUR", amount: 9900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Srebro 925" }
        ]
      }
    ],
    metadata: {
      stone_type: "Labradoryt",
      earring_type: "Wiszące",
      metal: "Srebro 925",
      properties: "Kamień transformacji i ochrony"
    }
  },
  {
    title: "Kolczyki Szmaragdowe Kropelki",
    subtitle: "Eleganckie kolczyki ze szmaragdami",
    handle: "kolczyki-szmaragdowe-kropelki",
    description: "Delikatne kolczyki w kształcie kropli z naturalnymi szmaragdami. Klasyczna elegancja na każdą okazję.",
    is_giftcard: false,
    discountable: true,
    weight: 6,
    status: "published",
    images: ["https://images.unsplash.com/photo-1602751584552-8ba1ed9e3c26?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1602751584552-8ba1ed9e3c26?w=400",
    tags: ["premium"],
    collection_handles: ["kolczyki"],
    categories: ["kamienie-szlachetne-szmaragd", "typ-bizuterii-kolczyki"],
    variants: [
      {
        title: "Złoto 14k",
        sku: "KSZ-001-G14K",
        barcode: "1234567890133",
        inventory_quantity: 3,
        manage_inventory: true,
        weight: 6,
        prices: [
          { currency_code: "PLN", amount: 159900 },
          { currency_code: "EUR", amount: 34900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Złoto 14k" }
        ]
      }
    ],
    metadata: {
      stone_type: "Szmaragd",
      stone_weight: "0.8ct (para)",
      earring_type: "Sztyfty",
      metal: "Złoto 14k"
    }
  },
  {
    title: "Kolczyki Agat Boho",
    subtitle: "Kolczyki w stylu boho z agatem",
    handle: "kolczyki-agat-boho",
    description: "Długie kolczyki z plasterkami naturalnego agatu. Każda para jest unikalna ze względu na naturalny wzór kamienia.",
    is_giftcard: false,
    discountable: true,
    weight: 10,
    status: "published",
    images: ["https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400",
    tags: [],
    collection_handles: ["kolczyki"],
    categories: ["kamienie-szlachetne-agat", "typ-bizuterii-kolczyki"],
    variants: [
      {
        title: "Srebro 925",
        sku: "KAG-001-S925",
        barcode: "1234567890134",
        inventory_quantity: 10,
        manage_inventory: true,
        weight: 10,
        prices: [
          { currency_code: "PLN", amount: 29900 },
          { currency_code: "EUR", amount: 6900 }
        ],
        options: [
          { option_name: "Metal", option_value: "Srebro 925" }
        ]
      }
    ],
    metadata: {
      stone_type: "Agat",
      earring_type: "Długie wiszące",
      metal: "Srebro 925",
      style: "Boho"
    }
  },

  // === PIERŚCIONKI ===
  {
    title: "Pierścionek Szafir Królewski",
    subtitle: "Klasyczny pierścionek z szafirem",
    handle: "pierscionek-szafir-krolewski",
    description: "Elegancki pierścionek z centralnym szafirem otoczonym drobnymi cyrkoniami. Design inspirowany biżuterią królewską.",
    is_giftcard: false,
    discountable: true,
    weight: 5,
    status: "published",
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    tags: ["premium", "bestseller"],
    collection_handles: ["pierscionki", "bestsellery"],
    categories: ["kamienie-szlachetne-szafir", "typ-bizuterii-pierscionki"],
    variants: [
      {
        title: "Rozmiar 14",
        sku: "PSZ-001-14",
        barcode: "1234567890135",
        inventory_quantity: 2,
        manage_inventory: true,
        weight: 5,
        prices: [
          { currency_code: "PLN", amount: 189900 },
          { currency_code: "EUR", amount: 41900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "14" }
        ]
      },
      {
        title: "Rozmiar 16",
        sku: "PSZ-001-16",
        barcode: "1234567890136",
        inventory_quantity: 2,
        manage_inventory: true,
        weight: 5,
        prices: [
          { currency_code: "PLN", amount: 189900 },
          { currency_code: "EUR", amount: 41900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "16" }
        ]
      },
      {
        title: "Rozmiar 18",
        sku: "PSZ-001-18",
        barcode: "1234567890137",
        inventory_quantity: 1,
        manage_inventory: true,
        weight: 5,
        prices: [
          { currency_code: "PLN", amount: 189900 },
          { currency_code: "EUR", amount: 41900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "18" }
        ]
      }
    ],
    metadata: {
      stone_type: "Szafir",
      stone_weight: "1.2ct",
      metal: "Srebro 925",
      accent_stones: "Cyrkonie"
    }
  },
  {
    title: "Pierścionek Rubin Passion",
    subtitle: "Pierścionek zaręczynowy z rubinem",
    handle: "pierscionek-rubin-passion",
    description: "Wyjątkowy pierścionek z rubinem w otoczeniu białego złota. Idealny na zaręczyny lub jako prezent na szczególną okazję.",
    is_giftcard: false,
    discountable: false,
    weight: 6,
    status: "published",
    images: ["https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400",
    tags: ["premium", "limited"],
    collection_handles: ["pierscionki"],
    categories: ["kamienie-szlachetne-rubin", "typ-bizuterii-pierscionki"],
    variants: [
      {
        title: "Rozmiar 15",
        sku: "PRU-001-15",
        barcode: "1234567890138",
        inventory_quantity: 1,
        manage_inventory: true,
        weight: 6,
        prices: [
          { currency_code: "PLN", amount: 449900 },
          { currency_code: "EUR", amount: 98900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "15" }
        ]
      },
      {
        title: "Rozmiar 17",
        sku: "PRU-001-17",
        barcode: "1234567890139",
        inventory_quantity: 1,
        manage_inventory: true,
        weight: 6,
        prices: [
          { currency_code: "PLN", amount: 449900 },
          { currency_code: "EUR", amount: 98900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "17" }
        ]
      }
    ],
    metadata: {
      stone_type: "Rubin",
      stone_weight: "2ct",
      metal: "Złoto białe 14k",
      occasion: "Zaręczyny",
      certificate: "GIA"
    }
  },

  // === ZESTAWY PREZENTOWE ===
  {
    title: "Zestaw Prezentowy Szmaragdowa Elegancja",
    subtitle: "Komplet naszyjnik + kolczyki ze szmaragdami",
    handle: "zestaw-szmaragdowa-elegancja",
    description: "Ekskluzywny zestaw biżuterii składający się z naszyjnika i kolczyków z naturalnymi szmaragdami. Zapakowany w eleganckie pudełko prezentowe.",
    is_giftcard: false,
    discountable: true,
    weight: 35,
    status: "published",
    images: ["https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400",
    tags: ["bestseller", "premium"],
    collection_handles: ["zestawy-prezentowe", "bestsellery"],
    categories: ["kamienie-szlachetne-szmaragd"],
    variants: [
      {
        title: "Zestaw kompletny",
        sku: "ZSE-001-SET",
        barcode: "1234567890140",
        inventory_quantity: 3,
        manage_inventory: true,
        weight: 35,
        prices: [
          { currency_code: "PLN", amount: 129900 },
          { currency_code: "EUR", amount: 28900 }
        ],
        options: [
          { option_name: "Typ", option_value: "Zestaw kompletny" }
        ]
      }
    ],
    metadata: {
      stone_type: "Szmaragd",
      set_includes: "Naszyjnik + Kolczyki",
      metal: "Srebro 925",
      packaging: "Eleganckie pudełko prezentowe",
      gift_ready: "Tak"
    }
  },
  {
    title: "Zestaw Prezentowy Harmonia Kamieni",
    subtitle: "Trzy bransoletki z różnych kamieni",
    handle: "zestaw-harmonia-kamieni",
    description: "Zestaw trzech bransoletek: kwarc różowy (miłość), ametyst (spokój) i tygrysie oko (ochrona). Idealny prezent dla osoby ceniącej właściwości kamieni.",
    is_giftcard: false,
    discountable: true,
    weight: 45,
    status: "published",
    images: ["https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800"],
    thumbnail: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400",
    tags: ["new"],
    collection_handles: ["zestawy-prezentowe"],
    categories: [],
    variants: [
      {
        title: "Rozmiar S/M",
        sku: "ZHK-001-SM",
        barcode: "1234567890141",
        inventory_quantity: 5,
        manage_inventory: true,
        weight: 45,
        prices: [
          { currency_code: "PLN", amount: 89900 },
          { currency_code: "EUR", amount: 19900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "S/M" }
        ]
      },
      {
        title: "Rozmiar L/XL",
        sku: "ZHK-001-LXL",
        barcode: "1234567890142",
        inventory_quantity: 4,
        manage_inventory: true,
        weight: 50,
        prices: [
          { currency_code: "PLN", amount: 94900 },
          { currency_code: "EUR", amount: 20900 }
        ],
        options: [
          { option_name: "Rozmiar", option_value: "L/XL" }
        ]
      }
    ],
    metadata: {
      stone_types: "Kwarc różowy, Ametyst, Tygrysie oko",
      set_includes: "3 bransoletki",
      bracelet_type: "Elastyczne",
      packaging: "Woreczek z naturalnego lnu",
      properties: "Zestaw dla równowagi emocjonalnej"
    }
  }
]

// KOLEKCJE DO UTWORZENIA
const COLLECTIONS = [
  {
    title: "Naszyjniki",
    handle: "naszyjniki",
    metadata: { featured: true, order: 1 }
  },
  {
    title: "Bransoletki",
    handle: "bransoletki",
    metadata: { featured: true, order: 2 }
  },
  {
    title: "Kolczyki",
    handle: "kolczyki",
    metadata: { featured: true, order: 3 }
  },
  {
    title: "Pierścionki",
    handle: "pierscionki",
    metadata: { featured: false, order: 4 }
  },
  {
    title: "Zestawy prezentowe",
    handle: "zestawy-prezentowe",
    metadata: { featured: true, order: 5 }
  },
  {
    title: "Bestsellery",
    handle: "bestsellery",
    metadata: { featured: true, order: 0 }
  }
]

// KATEGORIE DO UTWORZENIA
const CATEGORIES = [
  // Kamienie szlachetne
  { name: "Kamienie szlachetne", handle: "kamienie-szlachetne", parent: null },
  { name: "Szmaragd", handle: "kamienie-szlachetne-szmaragd", parent: "kamienie-szlachetne" },
  { name: "Rubin", handle: "kamienie-szlachetne-rubin", parent: "kamienie-szlachetne" },
  { name: "Szafir", handle: "kamienie-szlachetne-szafir", parent: "kamienie-szlachetne" },
  { name: "Ametyst", handle: "kamienie-szlachetne-ametyst", parent: "kamienie-szlachetne" },
  { name: "Kwarc różowy", handle: "kamienie-szlachetne-kwarc-rozowy", parent: "kamienie-szlachetne" },
  { name: "Labradoryt", handle: "kamienie-szlachetne-labradoryt", parent: "kamienie-szlachetne" },
  { name: "Tygrysie oko", handle: "kamienie-szlachetne-tygrysie-oko", parent: "kamienie-szlachetne" },
  { name: "Agat", handle: "kamienie-szlachetne-agat", parent: "kamienie-szlachetne" },
  
  // Typ biżuterii
  { name: "Typ biżuterii", handle: "typ-bizuterii", parent: null },
  { name: "Naszyjniki", handle: "typ-bizuterii-naszyjniki", parent: "typ-bizuterii" },
  { name: "Bransoletki", handle: "typ-bizuterii-bransoletki", parent: "typ-bizuterii" },
  { name: "Kolczyki", handle: "typ-bizuterii-kolczyki", parent: "typ-bizuterii" },
  { name: "Pierścionki", handle: "typ-bizuterii-pierscionki", parent: "typ-bizuterii" }
]
// --- helper: mapowanie produktu do DTO dla createProductsWorkflow ---
const buildProductDTO = (p: any, categoryIdByHandle: Record<string, string>, defaultSalesChannel?: { id: string }) => {
  const optionTitles = Array.from(
    new Set(
      (p.variants ?? []).flatMap((v: any) => v.options?.map((o: any) => o.option_name) ?? [])
    )
  )

  const optionValuesByTitle: Record<string, Set<string>> = {}
  optionTitles.forEach((t) => (optionValuesByTitle[t] = new Set()))
  ;(p.variants ?? []).forEach((v: any) => {
    (v.options ?? []).forEach((o: any) => optionValuesByTitle[o.option_name].add(o.option_value))
  })

  return {
    title: p.title,
    subtitle: p.subtitle,
    handle: p.handle,
    description: p.description,
    is_giftcard: !!p.is_giftcard,
    status: (p.status === "published" ? ProductStatus.PUBLISHED : ProductStatus.DRAFT),
    discountable: !!p.discountable,
    images: (p.images ?? []).map((url: string) => ({ url })),
    metadata: p.metadata ?? {},

    options: optionTitles.map((title) => ({
      title,
      values: Array.from(optionValuesByTitle[title]),
    })),

    variants: (p.variants ?? []).map((v: any) => ({
      title: v.title,
      sku: v.sku,
      barcode: v.barcode,
      prices: (v.prices ?? []).map((pr: any) => ({
        currency_code: String(pr.currency_code || "").toLowerCase(),
        amount: pr.amount,
      })),
      options: Object.fromEntries((v.options ?? []).map((o: any) => [o.option_name, o.option_value])),
    })),

    sales_channels: defaultSalesChannel ? [{ id: defaultSalesChannel.id }] : [],

    categories:
      (p.categories ?? [])
        .map((h: string) => categoryIdByHandle[h])
        .filter(Boolean)
        .map((id: string) => ({ id })) ?? [],

    tags: (p.tags ?? []).map((t: string) => ({ value: t })),
  }
}

export default async function seedJewelry({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  // sales channel (Default Sales Channel)
  const salesChannelModule = container.resolve(Modules.SALES_CHANNEL)
  const [defaultSalesChannel] = await salesChannelModule.listSalesChannels({
    name: "Default Sales Channel",
  })

  logger.info("🌱 Start seeda biżuterii (Medusa v2)…")

  // 1) KOLEKCJE — utwórz tylko brakujące (idempotentnie)
  logger.info("📂 Tworzę kolekcje…")
  const collectionIdByHandle: Record<string, string> = {}

  // odczytaj istniejące kolekcje
  const { data: existingCollections } = await query.graph({
    entity: "product_collection",
    fields: ["id", "handle"],
  })
  existingCollections.forEach((c: any) => (collectionIdByHandle[c.handle] = c.id))

  const toCreateCollections =
    (typeof COLLECTIONS !== "undefined" ? COLLECTIONS : [])
      .filter((c: any) => c && typeof c.handle === "string" && !collectionIdByHandle[c.handle])

  if (toCreateCollections.length) {
    const { result: createdCollections } = await createCollectionsWorkflow(container).run({
      input: {
        collections: toCreateCollections.map((c: any) => ({
          title: c.title,
          handle: c.handle,
          metadata: c.metadata ?? {},
        })),
      },
    })
    createdCollections.forEach((c: any) => (collectionIdByHandle[c.handle] = c.id))
    logger.info(`✅ Utworzono ${createdCollections.length} nowych kolekcji`)
  } else {
    logger.info("ℹ️ Wszystkie kolekcje już istnieją — pomijam tworzenie")
  }

  // 2) KATEGORIE — najpierw rooty, potem dzieci (z walidacją)
  logger.info("🏷️ Tworzę kategorie…")

  const categoryIdByHandle: Record<string, string> = {}

  const rawRoots = (typeof CATEGORIES !== "undefined" ? CATEGORIES : []).filter((c: any) => c && !c.parent)
  const roots = rawRoots
    .filter((c: any) => typeof c.handle === "string" && typeof c.name === "string")
    .filter((c: any, i: number, arr: any[]) => arr.findIndex((x) => x.handle === c.handle) === i)
    .map((c: any) => ({
      name: c.name,
      handle: c.handle,
      is_active: true,
    }))

  if (!roots.length) {
    logger.warn("⚠️ Brak poprawnych kategorii głównych w CATEGORIES")
  }

  const { result: rootCats } = roots.length
    ? await createProductCategoriesWorkflow(container).run({ input: { categories: roots } })
    : { result: [] as any[] }

  rootCats.forEach((c: any) => c?.handle && (categoryIdByHandle[c.handle] = c.id))

  const rawChildren = (typeof CATEGORIES !== "undefined" ? CATEGORIES : []).filter((c: any) => c && c.parent)
  const children = rawChildren
    .filter(
      (c: any) =>
        typeof c.handle === "string" &&
        typeof c.name === "string" &&
        typeof c.parent === "string" &&
        !!categoryIdByHandle[c.parent]
    )
    .map((c: any) => ({
      name: c.name,
      handle: c.handle,
      parent_category_id: categoryIdByHandle[c.parent],
      is_active: true,
    }))

  if (children.length) {
    const { result: childCats } = await createProductCategoriesWorkflow(container).run({
      input: { categories: children },
    })
    childCats.forEach((c: any) => c?.handle && (categoryIdByHandle[c.handle] = c.id))
  } else {
    logger.warn("ℹ️ Brak dzieci lub brak dopasowanego rodzica — pomijam podkategorie")
  }

  // 3) PRODUKTY — twórz tylko brakujące (po handle)
  logger.info("💎 Dodaję produkty…")

  const { data: existingProducts } = await query.graph({
    entity: "product",
    fields: ["id", "handle"],
  })
  const existingHandles = new Set<string>((existingProducts ?? []).map((p: any) => p.handle))

  const allProductsInput =
    (typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA : []).map((p: any) =>
      buildProductDTO(p, categoryIdByHandle, defaultSalesChannel)
    )

  const productsToCreate = allProductsInput.filter((p: any) => !existingHandles.has(p.handle))

  if (!productsToCreate.length) {
    logger.info("ℹ️ Wszystkie produkty już istnieją — nic do utworzenia")
  } else {
    const { result: createdProducts } = await createProductsWorkflow(container).run({
      input: { products: productsToCreate },
    })
    logger.info(`✅ Utworzono ${createdProducts.length} produktów`)
  }

  // 4) STANY MAGAZYNOWE — prosto: 100 szt. w pierwszej lokalizacji (jeśli istnieje)
  logger.info("📦 Dodaję poziomy zapasów…")
  const { data: stockLocations } = await query.graph({
    entity: "stock_location",
    fields: ["id"],
  })
  if (stockLocations.length) {
    const { data: inventoryItems } = await query.graph({
      entity: "inventory_item",
      fields: ["id"],
    })

    const levels = (inventoryItems ?? []).map((it: any) => ({
      location_id: stockLocations[0].id,
      inventory_item_id: it.id,
      stocked_quantity: 100,
    }))

    if (levels.length) {
      await createInventoryLevelsWorkflow(container).run({
        input: { inventory_levels: levels },
      })
      logger.info(`✅ Ustawiono stany dla ${levels.length} pozycji`)
    } else {
      logger.info("ℹ️ Brak pozycji inventory_item — pomijam ustawianie stanów")
    }
  } else {
    logger.warn("⚠️ Brak lokalizacji magazynowej — pomijam poziomy zapasów")
  }

  logger.info("✨ Seed zakończony pomyślnie.")
}