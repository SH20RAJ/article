import prisma from '@/prisma';

export async function getArticleWithId(id) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    return post;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
