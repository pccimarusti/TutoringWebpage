import { createClient } from '@supabase/supabase-js'
import type { Database } from './types/supabase'

if (!(import.meta.env.VITE_SUPABASE_URL) || !(import.meta.env.VITE_SUPABASE_KEY)) {
  throw new Error('❌ Missing Supabase environment variables!')
}

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
  {
    global: {
      headers: {
        apikey: import.meta.env.VITE_SUPABASE_KEY!,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY!}`,
      },
    },
    auth: {
      persistSession: false,
    },
  }
)

export default supabase;
