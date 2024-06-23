import prisma from '@/prisma'
export  async function getArticleWithId(id) {
  let post = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }})
    return post
}
