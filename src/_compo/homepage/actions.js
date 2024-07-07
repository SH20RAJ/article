"use server";

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
