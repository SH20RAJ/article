import prisma from "@/prisma";


export const getLatestPosts = async ({ limit = 10, skip = 0 }) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        title: true,
        id: true,
        createdAt: true,
      },
      where: {
        published: true,
      },
      take: parseInt(limit),
      skip : parseInt(skip),
    });
    return posts;
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};



export const GET = async (req) => {
  //get quries params
  const url = new URL(req.url)

  const limit = url.searchParams.get('limit') || 10
  const skip = url.searchParams.get('skip') || 0

  return Response.json(await getLatestPosts({limit, skip }));
}
