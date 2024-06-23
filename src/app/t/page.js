import React from 'react'
import getUserSession from '../(auth)/(funcs)/getUserSession'

export default async function pages() {
    let session = await getUserSession()
  return (
    <div>
      {
        JSON.stringify(session)
      }
    </div>
  )
}
