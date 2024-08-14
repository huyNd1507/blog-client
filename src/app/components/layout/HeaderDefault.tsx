"use client";

import Image from "next/image";
import { Flag, MenuIcon } from "../../../../public";
import SearchIcon from "../icon/Search";

const HeaderDefault = () => {
  return (
    <>
      <div className="bg-header1 flex justify-center flex-col items-center pb-[30px]">
        <Image src={Flag} width={80} height={50} alt="Picture of the author" />
        <h1 className="font-bold mt-[20px] text-[40px] leading-[20px] mb-[10px] py-[10px] uppercase">
          Khu vườn của tôi
        </h1>
        <p>
          Mỗi câu từ là một hạt mầm, hạt mầm nào cũng đều cần được tươi tắn, vun
          vén từng ngày
        </p>
      </div>

      <div className="bg-header2 px-[10%] flex items-center justify-between py-[10px]">
        <div className="flex items-center gap-[15px]">
          <div>
            <Image
              src={MenuIcon}
              width={21}
              height={20}
              alt="Picture of the author"
              className="cursor-pointer"
            />
          </div>
          <div className="bg-white flex rounded-[5px]  h-[30px] w-[320px] overflow-hidden">
            <input
              type="text"
              className="rounded-[5px] flex-1 h-[100%] relative   outline-none px-[10px] w-[100%] bg-tranferent"
            />
            <button type="submit" className="bg-header1 px-[7px] ">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div>
          <ul className="flex gap-[10px]">
            <li className="border-r-[1px] border-[#fff] px-[10px] font-medium">
              Về chúng tôi
            </li>
            <li className="border-r-[1px] border-[#fff] px-[10px] font-medium">
              Hệ thống
            </li>
            <li className="border-r-[1px] border-[#fff] px-[10px] font-medium">
              Hỗ trợ
            </li>
            <li className="px-[10px] font-medium">Tài khoản</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderDefault;
