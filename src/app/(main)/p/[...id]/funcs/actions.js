'use server'
import prisma from "@/prisma";
import { userAgent } from "next/server";


export const getPost = async (id) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getPosts = async (limit = 5) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        title: true,
        id: true,
        createdAt: true,
        author: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
      },
      where: {
        published: true,
      },
      take: limit,
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getRandomPosts = async (limit = 5) => {
  try {
    const totalPosts = await prisma.post.count({
      where: {
        published: true,
      },
    });

    const maxLimit = Math.min(limit, 5);
    const skip = totalPosts > maxLimit ? Math.floor(Math.random() * (totalPosts - maxLimit)) : 0;

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        title: true,
        id: true,
        createdAt: true,
        author: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
      },
      where: {
        published: true,
      },
      skip,
      take: maxLimit,
    });

    return posts;
  } catch (error) {
    console.error("Error fetching random posts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getPostsByUser = async ({ userId, username }) => {
  try {
    let whereClause = {};

    if (userId) {
      whereClause.authorId = userId;
    }

    if (username) {
      whereClause.username = username;
    }

    const posts = await prisma.post.findMany({
      where: {
        OR: [
          userId ? { authorId: userId } : {},
          username ? { author: { username } } : {},
        ].filter(Boolean),
      },
      include: {
        author: true,
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts by user:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getLatestPosts = async (limit = 10) => {
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
      take: limit,
    });
    return posts;
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const updateViews = async (id) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
    });

    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }

    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) },
      data: {
        viewCount: post.viewCount + 1,
      },
    });

    return updatedPost;
  } catch (error) {
    console.error("Error updating post views:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const saveView = async (userId, postId) => {
  try {
    const view = await prisma.view.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    });
    return view;
  } catch (error) {
    console.error("Error saving view:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};


export const getUserDetails = async ({ username, id, email }) => {
  try {
    // Constructing the where clause dynamically
    const whereClause = {
      OR: [
        username ? { username: username } : null,
        id ? { id: parseInt(id) } : null,
        email ? { email: email } : null,
      ].filter(Boolean), // Filtering out null values
    };

    // Fetching user details using findFirst instead of findUnique
    const user = await prisma.user.findFirst({
      where: whereClause,
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        bio: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        // posts: {
        //   select: {
        //     id: true,
        //     title: true,
        //     createdAt: true,
        //   },
        // },
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};





export const getPostsByUserName = async ({ username }) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        username: username,
      },
      include: {
        id: true,
        title: true,
        createdAt: true,
        username: true,
      }
    });
  } catch (error) {
    console.error("Error fetching posts by username:", error);
    throw error;
  }

}


export const getUserDetails2 = async ({ username }) => {
  //get user details by username
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        bio: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        // posts: {
        //   select: {
        //     id: true,
        //     title: true,
        //     createdAt: true,
        //   },
        // },
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
}

