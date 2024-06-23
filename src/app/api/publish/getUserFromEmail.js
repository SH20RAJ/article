import prisma from "@/prisma";

export default async function getUserFromEmail(email) {
  return await prisma.user.findUnique({
    where: {
      email,
    }
  })
}
