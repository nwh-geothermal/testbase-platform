import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { service_id, user_id, inquiry_data } = body

    console.log('Received service inquiry:', { service_id, user_id, inquiry_data })

    // Insert service inquiry with proper status
    const { data, error } = await supabase
      .from('service_inquiry')
      .insert({
        service_id,
        user_id,
        company_name: inquiry_data.company_name,
        contact_person: inquiry_data.contact_person,
        contact_email: inquiry_data.contact_email,
        contact_phone: inquiry_data.contact_phone,
        project_description: inquiry_data.project_description,
        budget_range: inquiry_data.budget_range,
        timeline: inquiry_data.timeline,
        special_requirements: `${inquiry_data.special_requirements}\n\n[系统信息] Company ID: ${inquiry_data.company_id}`,
        status: 'pending', // Always set status to pending for new inquiries
        priority: inquiry_data.priority || 'normal'
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { 
          error: 'Failed to submit service inquiry', 
          details: error.message,
          code: error.code 
        },
        { status: 500 }
      )
    }

    console.log('Service inquiry created successfully:', data)
    return NextResponse.json({ 
      success: true, 
      data,
      message: '服务申请提交成功，状态为待审核' 
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}