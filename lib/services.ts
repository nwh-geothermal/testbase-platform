// Optional: Service data fetching utility
// This can be used to fetch services from the database instead of hardcoded data

import { supabase } from '@/lib/supabase'

export interface DatabaseService {
  id: string
  service_id: string
  title: string
  description: string
  features: string[]
  icon_name: string
  category: string
  display_order: number
  is_active: boolean
  slug: string
  meta_description: string | null
  tags: string[] | null
  price_type: string | null
  base_price: number | null
  price_unit: string | null
  availability_status: string
  contact_email: string | null
  contact_phone: string | null
  created_at: string
  updated_at: string
}

// Fetch all active services from database
export async function fetchServices(): Promise<DatabaseService[]> {
  try {
    const { data, error } = await supabase
      .from('service_with_category')
      .select('*')
      .eq('is_active', true)
      .order('category_order', { ascending: true })
      .order('display_order', { ascending: true })
      .order('title', { ascending: true })

    if (error) {
      console.error('Error fetching services:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

// Fetch services by category
export async function fetchServicesByCategory(category: string): Promise<DatabaseService[]> {
  try {
    const { data, error } = await supabase
      .from('service')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('display_order', { ascending: true })
      .order('title', { ascending: true })

    if (error) {
      console.error('Error fetching services by category:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching services by category:', error)
    return []
  }
}

// Fetch single service by service_id
export async function fetchServiceById(serviceId: string): Promise<DatabaseService | null> {
  try {
    const { data, error } = await supabase
      .from('service')
      .select('*')
      .eq('service_id', serviceId)
      .eq('is_active', true)
      .single()

    if (error) {
      console.error('Error fetching service:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

// Create service inquiry
export async function createServiceInquiry(inquiry: {
  service_id: string
  user_id?: string
  company_name?: string
  contact_person: string
  contact_email: string
  contact_phone?: string
  project_description?: string
  budget_range?: string
  timeline?: string
  special_requirements?: string
}) {
  try {
    const { data, error } = await supabase
      .from('service_inquiry')
      .insert(inquiry)
      .select()
      .single()

    if (error) {
      console.error('Error creating service inquiry:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error creating service inquiry:', error)
    return { data: null, error }
  }
}

// Fetch user's service inquiries
export async function fetchUserInquiries(userId: string) {
  try {
    const { data, error } = await supabase
      .from('service_inquiry')
      .select(`
        *,
        service:service_id (
          title,
          category
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching user inquiries:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching user inquiries:', error)
    return []
  }
}