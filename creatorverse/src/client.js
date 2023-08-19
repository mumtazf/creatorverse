import {createClient} from '@supabase/supabase-js'
const VITE_APP_URL = import.meta.env.VITE_APP_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;


const URL = VITE_APP_URL;
const API_KEY = VITE_API_KEY;

export const supabase = createClient(URL, API_KEY);