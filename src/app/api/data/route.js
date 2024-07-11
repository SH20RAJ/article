// app/api/data/route.js
import redis from '../../../lib/redis';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');
  const data = await redis.get(key);
  return new Response(JSON.stringify({ data: data ? JSON.parse(data) : null }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { key, value } = await request.json();
  await redis.set(key, JSON.stringify(value));
  return new Response(JSON.stringify({ message: 'Data saved successfully' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
