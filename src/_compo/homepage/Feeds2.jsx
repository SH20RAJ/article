"use client";

import { useEffect, useRef } from "react";
import { PostCard4 } from "../postcards/PostCard4";
import useSWRInfinite from "swr/infinite";
import Sidebar from "./SideBar";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function Feeds2() {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // if no more posts, return null
    return `/api/posts?limit=10&skip=${pageIndex * 10}`; // skip is calculated based on pageIndex
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
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
        rootMargin: "200px",
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
  if (isLoadingInitialData)
    return (
      <div>
        <PostCard4Loader />
      </div>
    );

  return (
    <>
      <div className="space-y-8">
        {posts && posts.map((post) => <PostCard4 key={post.id} post={post} />)}
        <div ref={loadMoreRef} className="text-center py-4">
          {isLoadingMore ? (
            <PostCard4Loader />
          ) : isReachingEnd ? (
            "No more posts to load."
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export function Loading() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-10 h-10 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
    </div>
  );
}



export const PostCard4Loader = () => {  
  return (
    <div className="space-y-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="space-y-4">
            <div className=" h-48 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
//




