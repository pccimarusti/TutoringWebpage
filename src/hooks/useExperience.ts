// src/hooks/useExperience.ts
import { useQuery } from "@tanstack/react-query"

export type Experience = {
  id: number
  role: string
  company: string
  year: string // e.g., "Apr 2024 – Present"
  description: string
  skills: string[]
}

export const useExperience = () => {
  return useQuery<Experience[]>({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await fetch(
        "https://qlsizofiileraiahjlym.supabase.co/rest/v1/experience",
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY!,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY!}`,
          },
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Failed to fetch experience")

      // Sort based on extracted year (descending)
      const sorted = [...data].sort((a, b) => {
        const getStartYear = (entry: Experience) =>
          parseInt(entry.year.match(/\d{4}/)?.[0] || "0")
        return getStartYear(b) - getStartYear(a)
      })

      return sorted
    },
    staleTime: 1000 * 60 * 5,
  })
}