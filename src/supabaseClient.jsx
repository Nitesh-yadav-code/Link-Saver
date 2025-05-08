import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sowarsqijwbbmvnfcpvj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvd2Fyc3FpandiYm12bmZjcHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1OTIwNjUsImV4cCI6MjA2MjE2ODA2NX0.L2fTXqNpYW4uCDklHKpBMOO9QyIFSWOS_l0uAjPe1SU';

const supabase =  createClient(supabaseUrl, supabaseAnonKey);

export default supabase;