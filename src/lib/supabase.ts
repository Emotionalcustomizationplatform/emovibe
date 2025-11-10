// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const SUPABASE_SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Browser client (for use in components)
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

// Server client (for API routes that need admin privileges)
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
export const supabaseServerAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE);
