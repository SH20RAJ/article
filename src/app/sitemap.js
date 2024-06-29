import prisma from "@/prisma"

export default async function sitemap() {
    let posts = await prisma.post.findMany({
        select: {
            id: true,
            updatedAt: true,
        },
        take: 10000,
        })
    let p = posts.map(post => {
        return {
            url: `https://article.shade.cool/p/${post.id}`,
            lastModified: post.updatedAt,
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    }
    )

    return p.concat({
        url: `https://article.shade.cool/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    },
    {
        url: `https://article.shade.cool/about`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: `https://article.shade.cool/contact`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: `https://article.shade.cool/privacy`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: `https://article.shade.cool/terms`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: `https://article.shade.cool/cookie`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: `https://article.shade.cool/sitemapsh/sitemap.xml`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }
    ,
    {
        url: `https://article.shade.cool/sitemapsh/1/sitemap.xml`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }

)
  }