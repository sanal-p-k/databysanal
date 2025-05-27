import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials not found in environment variables');
  throw new Error('Supabase credentials are required. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env file.');
}

// Log the URL (without sensitive info)
console.log('Initializing Supabase with URL:', supabaseUrl);

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

// Test the connection immediately
export async function testSupabaseConnection() {
  try {
    // First try a simple ping
    const { data: pingData, error: pingError } = await supabase
      .from('templates')
      .select('id')
      .limit(1);

    if (pingError) {
      console.error('Supabase ping test failed:', pingError);
      throw new Error('Failed to connect to Supabase: ' + pingError.message);
    }

    // Then try getting auth state
    const { data: authData, error: authError } = await supabase.auth.getSession();
    if (authError) {
      console.error('Supabase auth test failed:', authError);
      throw new Error('Failed to authenticate with Supabase: ' + authError.message);
    }

    console.log('Supabase connection test successful');
    return true;
  } catch (error) {
    console.error('Supabase connection test failed:', error);
    throw new Error('Supabase connection test failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}
