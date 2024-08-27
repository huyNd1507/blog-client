"use client";

import LastestPost from "./components/posts/LatestPost";
import ListPost from "./components/posts/ListPost/page";

export default function Home() {
  return (
    <div className=" flex gap-[60px]">
      <div className="flex flex-col gap-[25px] w-[70%]">
        <ListPost />
      </div>
      <div className="w-[30%]">
        <LastestPost />
      </div>
    </div>
  );
}
