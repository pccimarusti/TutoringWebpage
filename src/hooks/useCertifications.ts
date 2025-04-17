// src/hooks/useCertifications.ts
import { useQuery } from "@tanstack/react-query"

export type Certification = {
    id: number
    title: string
    issuer: string
    url: string
    image: string | null
    description: string
    skills: string[]
    github: string | null
    date: string // format: "MM/DD/YYYY"
}

export const useCertifications = () => {
  return useQuery<Certification[]>({
    queryKey: ["certifications"],
    queryFn: async () => {
      const res = await fetch(
        "https://qlsizofiileraiahjlym.supabase.co/rest/v1/certifications",
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY!,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY!}`,
          },
        }
      )

      const data: Certification[] = await res.json()

      if (!res.ok) throw new Error("Failed to fetch certifications")

      // Sort by date (latest first)
      return data.sort((a: Certification, b: Certification) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    },
    staleTime: 1000 * 60 * 5,
  })
}