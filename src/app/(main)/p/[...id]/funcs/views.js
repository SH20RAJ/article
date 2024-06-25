
import prisma from "@/prisma"
import { parse } from "path";







export const updateViews = async (id) => {
    try {
      const updatedPost = await prisma.post.update({
        where: { id : parseInt(id)},
        data: {
          viewCount: {
            increment: 1,
          },
        },
      });
  
      // console.log('Updated post:', updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
    //   await prisma.$disconnect();
    }
  };