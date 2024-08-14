"use client";

import LayoutDefault from "./components/layout/LayoutDefault";
import Author from "./components/posts/Author";
import LastestPost from "./components/posts/LatestPost";
import PostDetail from "./components/posts/PostDetail";
import PostItem from "./components/posts/PostItem";

export default function Home() {
  return (
    <LayoutDefault>
      <div className=" flex gap-[60px]">
        <div className="flex flex-col gap-[25px] w-[70%]">
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
        <div className="w-[30%]">
          <LastestPost />
        </div>
      </div>
      <PostDetail />

      <Author />
    </LayoutDefault>
  );
}
