"use client"

import { useEffect, useRef } from 'react';
import { PostCard4 } from "../postcards/PostCard4";
import useSWRInfinite from 'swr/infinite';
import Sidebar from "./SideBar";

const fetcher = url => fetch(url).then(r => r.json());

export function Feeds2() {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // if no more posts, return null
    return `/api/posts?limit=10&skip=${pageIndex * 10}`; // skip is calculated based on pageIndex
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 10);

  const loadMoreRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore && !isReachingEnd) {
          setSize((size) => size + 1);
        }
      },
      {
        rootMargin: '200px',
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [isLoadingMore, isReachingEnd, setSize]);

  if (error) return <div>Failed to load posts. Please try again later.</div>;
  if (isLoadingInitialData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-8">
        <div className="space-y-8">
          {posts.map(post => (
            <PostCard4 key={post.id} post={post} />
          ))}
          <div ref={loadMoreRef} className="text-center py-4">
            {isLoadingMore ? 'Loading more posts...' : isReachingEnd ? 'No more posts to load.' : ''}
          </div>
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
