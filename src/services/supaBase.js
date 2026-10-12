import { createClient } from "@supabase/supabase-js";

const projectUrl = import.meta.env.VITE_SUPABASE_URL;

// Route local development requests through Vite to avoid browser CORS issues.
const supabaseUrl = import.meta.env.DEV
  ? new URL("/supabase", window.location.origin).toString()
  : projectUrl;

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
