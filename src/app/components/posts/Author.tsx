"use client";

import Image from "next/image";
import { Facebook, Insta, Mail, User } from "../../../../public";
import Link from "next/link";

const Author = () => {
  return (
    <div className="flex gap-[10px] p-[20px] border-[2px] rounded-[10px] mt-[20px] border-[#fff]">
      <Image
        src={User}
        width={255}
        height={255}
        alt="Picture of the author"
        className="rounded-[50%] w-[120px] h-[120px]"
      />

      <div>
        <span className="text-[25px] leading-[38px] mb-[5px] py-[5px]">
          Nguyễn Thị Bích Thủy
        </span>
        <p className="pt-[10px]">
          Tôi là Nguyễn Thị Bích Thủy, kĩ thuật viên nội dung của Khu Vườn Của
          Tôi. Thích đọc sách. Thích Piano, nhẹ nhàng tình cảm. Nếu bạn thích
          những bài viết của tôi, đừng ngại share lên facebook hoặc vài kênh
          social cho bạn bè của bạn đọc cùng nhé! Hoặc bạn có thể click vào
          facebook profile này của tôi để cùng bình luận. Hoàn toàn thoải mái!
          Biết đâu chúng ta lại trở thành bạn bè!
        </p>
        <div className="flex gap-[10px] mt-[10px]">
          <Link href="/">
            <Image
              src={Facebook}
              width={30}
              height={30}
              alt="Picture of the author"
              className="cursor-pointer"
            />
          </Link>
          <Image
            src={Insta}
            width={30}
            height={30}
            alt="Picture of the author"
            className="cursor-pointer"
          />
          <Image
            src={Mail}
            width={30}
            height={30}
            alt="Picture of the author"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Author;
