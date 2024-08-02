import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.URL
// const supabaseKey = import.meta.env.SUPABASEKEY
const supabaseUrl = 'https://saqpudvchschokssjhbm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXB1ZHZjaHNjaG9rc3NqaGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NDg0MjUsImV4cCI6MjAzODAyNDQyNX0.EUziyNFE5DGdbMGfPyMrcSGhnLhxoG4HWDP6xpCvWtc"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;