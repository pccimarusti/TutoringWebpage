import { useQuery } from "@tanstack/react-query"

export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  github_url: string
  live_url: string
  image_url?: string
  created_at: string
}

export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(
        "https://qlsizofiileraiahjlym.supabase.co/rest/v1/projects",
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY!,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY!}`,
          },
        }
      )

      const data = await res.json()

      if (!res.ok) {
        console.error("❌ Supabase error:", data)
        throw new Error(data.message || "Failed to fetch projects")
      }

      return data
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })
}