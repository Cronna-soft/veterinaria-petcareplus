import { createClient } from '@supabase/supabase-js'

// SUPABASE
const supabaseUrl= import.meta.env.VITE_SUPABASE_URL
const supabaseKey= import.meta.env.VITE_SUPABASE_KEY

// DATOS ESTATICOS
const API_URL = '/mock';

export default API_URL

export const supabase = createClient(supabaseUrl,
	supabaseKey)