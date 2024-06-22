import getUserSession from '@/app/(auth)/(funcs)/getUserSession'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
  let session = await getUserSession()
  if(!session?.user) redirect('/login')
  return (
    <div>
      Dashboard
    </div>
  )
}
