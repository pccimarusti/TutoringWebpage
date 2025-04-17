// src/hooks/useContent.ts
import { useQuery } from "@tanstack/react-query"

export type ContentBlock = {
  id: string
  slug: string
  content: string
}

export const useContent = (slug: string) => {
  return useQuery<ContentBlock | null>({
    queryKey: ["content", slug],
    queryFn: async () => {
      const res = await fetch(
        `https://qlsizofiileraiahjlym.supabase.co/rest/v1/sections?slug=eq.${slug}`,
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY!,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY!}`,
          },
        }
      )

      const data = await res.json()
      return data[0] || null
    },
    staleTime: 1000 * 60 * 5,
  })
}