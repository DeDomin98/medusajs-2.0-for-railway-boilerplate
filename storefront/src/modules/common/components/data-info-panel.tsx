"use client"

import { useEffect, useState } from "react"

interface DataInfo {
  collections: number
  products: number
  categories: number
  regions: number
}

export default function DataInfoPanel() {
  const [dataInfo, setDataInfo] = useState<DataInfo | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Nasłuchuj na logi w konsoli
    const originalLog = console.log
    console.log = (...args) => {
      originalLog(...args)
      
      // Sprawdź czy to nasze logi
      if (args[0]?.includes?.("📊 Liczba")) {
        const logText = args[0]
        if (logText.includes("kolekcji")) {
          const count = parseInt(logText.match(/\d+/)?.[0] || "0")
          setDataInfo(prev => ({ ...prev, collections: count }))
        } else if (logText.includes("produktów")) {
          const count = parseInt(logText.match(/\d+/)?.[0] || "0")
          setDataInfo(prev => ({ ...prev, products: count }))
        } else if (logText.includes("kategorii")) {
          const count = parseInt(logText.match(/\d+/)?.[0] || "0")
          setDataInfo(prev => ({ ...prev, categories: count }))
        } else if (logText.includes("regionów")) {
          const count = parseInt(logText.match(/\d+/)?.[0] || "0")
          setDataInfo(prev => ({ ...prev, regions: count }))
        }
      }
    }

    return () => {
      console.log = originalLog
    }
  }, [])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors z-50"
      >
        📊 Dane
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">📊 Dane aplikacji</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>🛍️ Kolekcje:</span>
          <span className="font-medium">{dataInfo?.collections || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>🛒 Produkty:</span>
          <span className="font-medium">{dataInfo?.products || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>📂 Kategorie:</span>
          <span className="font-medium">{dataInfo?.categories || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>🌍 Regiony:</span>
          <span className="font-medium">{dataInfo?.regions || 0}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Szczegóły w konsoli (F12)
        </p>
      </div>
    </div>
  )
}
