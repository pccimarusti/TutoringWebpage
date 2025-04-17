// src/hooks/useContactContent.ts
import { useQuery } from "@tanstack/react-query"

export type ContactText = {
  id: string
  label: string
  content: string
}

export const useContactContent = (label: string) => {
  return useQuery<ContactText | null>({
    queryKey: ["contact_content", label],
    queryFn: async () => {
      const res = await fetch(
        `https://qlsizofiileraiahjlym.supabase.co/rest/v1/contact_content?label=eq.${label}`,
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