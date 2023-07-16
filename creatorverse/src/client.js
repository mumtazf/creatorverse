import {createClient} from '@supabase/supabase-js'
import VITE_APP_URL from meta.env.VITE_APP_URL;
import VITE_API_KEY from meta.env.VITE_API_KEY;


const URL = VITE_APP_URL;
const API_KEY = VITE_API_KEY;

export const supabase = createClient(URL, API_KEY);