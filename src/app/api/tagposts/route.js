import prisma from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get('tag');
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const skip = parseInt(searchParams.get('skip') || '0', 10);

  if (!tag) {
    return NextResponse.json({ error: 'Tag is required' }, { status: 400 });
  }

  try {
    const posts = await prisma.post.findMany({
      where: {
        tags: {
          some: {
            tag: {
              name: tag,
            },
          },
        },
      },
      take: limit,
      skip: skip,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
