import { getArticleWithId } from '../../p/[...id]/funcs/getArticleWithId';
import getUserSession from '@/app/(auth)/(funcs)/getUserSession';

import EditMain from './main';


export default async function page({params}) {
  let session = await getUserSession()
  let id = params.id
  let article = await getArticleWithId(id);

  if(!session.user) return <div>Not logged in</div>
  // console.log(session.user,"dddd");
  // console.log(session.user,"dddd",article.author.id);
  if(session.userId !== article.author.id) return <div>Not an admin</div>
    return (
      <EditMain article={article}/>
      
  )
}
