import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserRole = 'student' | 'therapist' | 'institute'

export interface UserProfile {
  id: string
  email: string
  role: UserRole
  full_name: string
  institution?: string
  student_id?: string
  specialization?: string
  license_number?: string
  created_at: string
}

export interface Session {
  id: string
  therapist_id: string
  student_id: string
  scheduled_at: string
  duration: number
  status: 'scheduled' | 'completed' | 'cancelled'
  type: 'individual' | 'group'
  notes?: string
  created_at: string
}

export interface MoodEntry {
  id: string
  student_id: string
  mood_score: number
  date: string
  notes?: string
  created_at: string
}