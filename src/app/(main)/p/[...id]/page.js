import Nav from '@/app/_compo/Nav'
import React from 'react'
import { PostPage1 } from './PostPage1'
import { getArticleWithId } from './funcs/getArticleWithId';

export async function generateMetadata({ params }) {
  console.log(params);
  let id = params.id;
  let article = await getArticleWithId(id);

  return {
    title: article.title,
    description: article.description,
    image: article.image,
    url: `https://article.shade.cool/p/${article.id}`
  }
}

export default function page({params}) {
  console.log(params);
  const id = params.id
  return (
    <div className=' max-w-full'>
      <PostPage1 id={id}/>
      
    </div>
  )
}
