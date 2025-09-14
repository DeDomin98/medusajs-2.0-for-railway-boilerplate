"use client"

import { useEffect } from "react"
import { logQuickStats, logApiError, logPerformance } from "@lib/utils/logger"

// Hook do logowania danych w komponentach
export function useDataLogger() {
  useEffect(() => {
    // Loguj informacje o komponencie
    console.log("🔧 Komponent załadowany:", new Date().toLocaleString())
  }, [])

  return {
    logStats: logQuickStats,
    logError: logApiError,
    logPerf: logPerformance,
  }
}

// Hook do monitorowania wydajności
export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    const startTime = performance.now()
    
    return () => {
      logPerformance(`${componentName} - render`, startTime)
    }
  }, [componentName])
}

// Hook do logowania błędów
export function useErrorLogger() {
  const logError = (error: Error, context?: string) => {
    logApiError(context || "Unknown", error)
  }

  return { logError }
}
