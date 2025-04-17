export type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number
          title: string
          description: string
          technologies: string[]
          github_url: string
          live_url: string
          image_url: string | null
          created_at: string
        }
        // ...
      }
    }
  }
}