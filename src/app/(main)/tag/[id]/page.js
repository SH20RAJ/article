

import Nav from '@/app/_compo/Nav';
import { TagPostList } from '@/components/tag-post-list';
import React from 'react'

export default function page({params}) {
    const tag = params.id;
  return (
    <div>
      <Nav/>
      <TagPostList/>
      {
        tag
      }
    </div>
  )
}
