import React from 'react'
import { getArticleWithId } from '../../p/[...id]/funcs/getArticleWithId';
import NovelEditor from './Editor';
import getUserSession from '@/app/(auth)/(funcs)/getUserSession';
import { Input } from '@/components/ui/input';

export default async function page({params}) {
  let session = await getUserSession()

  if(!session.user) return <div>Not logged in</div>
  let id = params.id
  console.log(session.user,"dddd");
  let article = await getArticleWithId(id);
  console.log(session.user,"dddd",article.author.id);
  if(session.userId !== article.author.id) return <div>Not an admin</div>
    let content = article.content
    return (
    <div>
      <Input    type="text"
            placeholder="Title"
            className="ml-8 border-0 outline-0 outline-none mb-4 p-4 px-2 text-4xl w-full font-bold"
            onChange={(e) => setTitle(e.target.value)}
          />
      <NovelEditor initData={article}/>
    </div>
  )
}
