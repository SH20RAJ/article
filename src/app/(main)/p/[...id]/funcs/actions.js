'use server'
import prisma from "@/prisma"



export const getPost = async (id) => {
    let post = await prisma.post.findUnique({
        where: {
        id: parseInt(id)
        }
    })
    return post
    }


export const getPosts = async (limit) => {
    let posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            title: true,
            id: true,
            createdAt: true,
            author: {
                select: {
                    name: true,
                    email: true,
                    id: true
                }
            }
        },
        where: {
            published: true
        },
        take: limit ? limit : 5
    });
    return posts;
}


export const getRandomPosts = async (limit) => {
    const totalPosts = await prisma.post.count({
        where: {
            published: true
        }
    });

    const maxLimit = limit ? Math.min(limit, 5) : 5;
    const skip = totalPosts > maxLimit ? Math.floor(Math.random() * (totalPosts - maxLimit)) : 0;

    let posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            title: true,
            id: true,
            createdAt: true,
            author: {
                select: {
                    name: true,
                    email: true,
                    id: true
                }
            }
        },
        where: {
            published: true
        },
        skip: skip,
        take: maxLimit
    });

    return posts;
}


export const getPostsByUser = async (userId) => {
    let posts = await prisma.post.findMany({
        where: {
            authorId: userId
        }
    });
    return posts;
}

// getLatestPosts func
export const getLatestPosts = async (limit) => {
    let posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            title: true,
            id: true,
            createdAt: true,
        },
        where: {
            published: true
        },
        take: limit ? limit : 10
    });
    return posts;
}



export const updateViews = async (id) => {
    try {
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          viewCount: viewCount +1, // Update viewCount to 4
        },
      });
  
    //   console.log('Updated post:', updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      await prisma.$disconnect();
    }
  };
  

export async function saveView(userId, postId) {
    try {
      const view = await prisma.view.create({
        data: {
          userId : parseInt(userId),
          postId : parseInt(postId),
        },
      });
      console.log('View saved:', view);
      return view;
    } catch (error) {
      console.error('Error saving view:', error);
      throw error;
    }
  }