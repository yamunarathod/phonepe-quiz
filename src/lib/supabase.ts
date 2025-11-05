import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type QuizRecord = {
  id: number;
  created_at: string;
  name: string;
  phone: number;
  email: string | null;
  score: number;
  time: string;
};
