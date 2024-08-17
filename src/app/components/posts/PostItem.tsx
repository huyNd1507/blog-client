"use client";

import Image from "next/image";
import { Blog1, Blog2 } from "../../../../public";
import Link from "next/link";

const PostItem = () => {
  return (
    <Link href={`/post/blog-1`}>
      <div className="rounded-[20px] h-[180px] gap-[20px] bg-header2 flex overflow-hidden ">
        <div className="w-[60%]  p-[15px]">
          <h1 className="text-white text-[30px] leading-[40px] mb-[12px] font-medium cursor-pointer">
            Bếp sách làng Soyang
          </h1>
          <p>
            “Khi mở cuốn sách ra, các nhân vật trong đó hẳn sẽ hân hoan chào
            đón… mừng rỡ trong cuộc tương ngộ sau một hành trình dài, rất dài
            của vận mệnh.”
          </p>
        </div>

        <div className="flex-1 w-[40%] rounded-[20px] overflow-hidden">
          <Image
            src={Blog2}
            width={200}
            height={400}
            alt="Picture of the author"
            className="cursor-pointer w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
