import prisma from "@/prisma"

export default async function sitemap() {
    let posts = await prisma.post.findMany({
        select: {
            id: true,
            updatedAt: true,
        },
        take: 10000,
        })
    return posts.map(post => {
        return {
            url: `https://article.shade.cool/p/${post.id}`,
            lastModified: post.updatedAt,
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    }
    )
  }