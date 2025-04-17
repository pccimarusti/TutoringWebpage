import { createClient } from '@supabase/supabase-js'
import type { Database } from './types/supabase'

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL
const supabaseKey =
  import.meta.env.VITE_SUPABASE_KEY || import.meta.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('❌ Missing Supabase environment variables!')
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
