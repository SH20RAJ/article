import { PostPage1 } from './PostPage1'
import { getArticleWithId } from './funcs/getArticleWithId';
import HighlightAll from './HighLightAll';
import { updateViews } from './funcs/views';
import getUserSession from '@/app/(auth)/(funcs)/getUserSession';

export async function generateMetadata({ params }) {
  console.log(params);
  let id = params.id;
  let article = await getArticleWithId(id);

  return {
    title: article.title,
    description: article.description,
    keywords: [article.title, article.description, article.tags],
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.image || `https://cdn.statically.io/og/${article.title}.jpg`,
          alt: article.title,
        }
      ],
      url: `https://article.shade.cool/p/${article.id}`
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      image: article.image || `https://cdn.statically.io/og/${article.title}.jpg`,
      url: `https://article.shade.cool/p/${article.id}`
    }
  }
}


export default async function page({params}) {
  // console.log(params);
  let session = await getUserSession();
  const id = params.id
  let v1 = await updateViews(id);
  // await saveView(id, session.userId)

  return (
    <div className=' max-w-full'>
      <PostPage1 id={id}/>
      <HighlightAll/>

    </div>
  )
}
