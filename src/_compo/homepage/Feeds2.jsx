"use client"

import { PostCard4 } from "../postcards/PostCard4";
import useSWR from 'swr';
import Sidebar from "./SideBar";

const fetcher = url => fetch(url).then(r => r.json())

export function Feeds2() {
  const { data : posts, error } = useSWR('/api/posts', fetcher)
  
  if (error) return <div>Failed to load posts. Please try again later.</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-8">
        <div className="space-y-8">
          {posts.map(post => (
            <PostCard4 key={post.id} post={post} />
          ))}
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
