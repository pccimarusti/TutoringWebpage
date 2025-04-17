import { createClient } from '@supabase/supabase-js'
import type { Database } from './types/supabase'

// Use fallback logic so it works in local (VITE_) and production (SUPABASE_)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || import.meta.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("❌ Supabase environment variables are missing!")
}

const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey,
  {
    global: {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    },
    auth: {
      persistSession: false,
    },
  }
)

export default supabase;
