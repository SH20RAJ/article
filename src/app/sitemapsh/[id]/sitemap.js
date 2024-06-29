import { getRandomPosts } from "@/app/(main)/p/[...id]/funcs/actions"
import { makeSlug } from "@/lib/funs"
import prisma from "@/prisma"

export default async function sitemap() {
    //get random posts from the database
    // let posts = await prisma.post.findMany({
    //     select: {
    //         id: true,
    //         updatedAt: true,
    //     },
    //     take: 10000,
    //     })
       let posts = await getRandomPosts(1000)
    return posts.map(post => {
        return {
            url: `https://article.shade.cool/p/${post.id}/${makeSlug(post.title)}`,
            lastModified: post.updatedAt,
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    }
    )
  }