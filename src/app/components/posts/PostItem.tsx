"use client";

import Image from "next/image";
import { Blog1 } from "../../../../public";

const PostItem = () => {
  return (
    <div className="rounded-[20px] gap-[20px] bg-header2 flex p-[15px]">
      <div>
        <h1 className="text-white text-[30px] leading-[40px] mb-[12px] font-medium cursor-pointer">
          Bếp sách làng Soyang
        </h1>
        <p>
          “Khi mở cuốn sách ra, các nhân vật trong đó hẳn sẽ hân hoan chào đón…
          mừng rỡ trong cuộc tương ngộ sau một hành trình dài, rất dài của vận
          mệnh.”
        </p>
      </div>

      <div>
        <Image
          src={Blog1}
          width={200}
          height={500}
          alt="Picture of the author"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PostItem;
