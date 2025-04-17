import { createClient } from '@supabase/supabase-js'
import type { Database } from './types/supabase'

// Throw an error if the required environment variables are missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('❌ Missing Supabase environment variables!')
}

// Create the Supabase client instance
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
