import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables');
}

// Create a single supabase client for browser-side
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Note: For server-side components, use the createServerClient from @supabase/ssr
// This file provides a browser-side client that can be imported throughout the app
// For server components, you'll need to use the appropriate pattern in each component 