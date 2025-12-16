import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  return NextResponse.json(
    { 
      error: 'RLS Policy Issue', 
      details: 'The company table has Row-Level Security enabled that prevents insertion without an active user session. This needs to be resolved by updating the database policies or using a different approach.',
      suggestion: 'Please modify the RLS policy to allow company registration for new users, or implement a database function that can handle this with elevated privileges.'
    },
    { status: 500 }
  )
}