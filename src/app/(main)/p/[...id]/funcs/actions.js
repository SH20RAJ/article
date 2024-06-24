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