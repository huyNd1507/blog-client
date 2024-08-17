"use client";

import Image from "next/image";
import {
  Flag,
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  MenuIcon,
} from "../../../../public";
import SearchIcon from "../icon/Search";
import RightIcon from "../icon/Right";
import Link from "next/link";
import { useState } from "react";

const HeaderDefault = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-header1 flex justify-center flex-col items-center pb-[30px]">
        <Link href="/">
          <Image
            src={Flag}
            width={80}
            height={50}
            alt="Picture of the author"
          />
        </Link>
        <div className="flex items-end justify-between gap-[40px] py-[20px] mt-[20px]">
          <div className="w-[200px] h-[3px] bg-black"></div>
          <h1 className="font-semibold  text-[40px] mb-[10px] leading-[20px]  uppercase tracking-[18px]">
            Khu vườn của tôi
          </h1>
          <div className="w-[200px] h-[3px] bg-black"></div>
        </div>
        <p>
          Mỗi câu từ là một hạt mầm, hạt mầm nào cũng đều cần được tươi tắn, vun
          vén từng ngày
        </p>
      </div>

      <div className="bg-header2 px-[10%] flex items-center justify-between py-[10px]">
        <div className="flex items-center gap-[15px]">
          <div className="relative">
            <Image
              src={MenuIcon}
              width={21}
              height={20}
              alt="Picture of the author"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <div className="absolute menu bg-white top-[35px] left-0 w-[200px] h-[280px] pt-[10px]">
                <ul>
                  <li className="flex items-center justify-between font-semibold px-[10px] py-[8px] relative hover:bg-header1">
                    <div className="flex items-start gap-[10px]">
                      <Image
                        src={Menu1}
                        width={21}
                        height={20}
                        alt="Picture of the author"
                        className="cursor-pointer"
                      />
                      Blog
                    </div>

                    <RightIcon />
                    <ul className="absolute submenu left-[100%] top-[-11px] bg-header1 w-[200px] h-[280px] pt-[10px]">
                      <li className="px-[10px] py-[5px]">Góc review</li>
                      <li className="px-[10px] py-[5px]">Học cách học</li>
                      <li className="px-[10px] py-[5px]">Viết lách</li>
                      <li className="px-[10px] py-[5px]">Góc thơ</li>
                      <li className="px-[10px] py-[5px]">Lịch sử </li>
                      <li className="px-[10px] py-[5px]">Văn hóa</li>
                      <li className="px-[10px] py-[5px]">Triết học</li>
                    </ul>
                  </li>
                  <li className="flex items-center justify-between font-semibold px-[10px] py-[8px] relative hover:bg-header1">
                    <div className="flex items-start gap-[10px]">
                      <Image
                        src={Menu3}
                        width={21}
                        height={20}
                        alt="Picture of the author"
                        className="cursor-pointer"
                      />
                      Vlog
                    </div>
                    <RightIcon />
                    <ul className="absolute submenu left-[100%] top-[-45px] bg-header1 w-[200px] h-[280px] pt-[10px]">
                      <li className="px-[10px] py-[5px]">Vlog1</li>
                      <li className="px-[10px] py-[5px]">Vlog2</li>
                      <li className="px-[10px] py-[5px]">Vlog3</li>
                      <li className="px-[10px] py-[5px]">Vlog4</li>
                      <li className="px-[10px] py-[5px]">Vlog5</li>
                    </ul>
                  </li>
                  <li className="flex px-[10px] items-center justify-between font-semibold py-[8px] hover:bg-header1">
                    <div className="flex items-start gap-[10px]">
                      <Image
                        src={Menu4}
                        width={21}
                        height={20}
                        alt="Picture of the author"
                        className="cursor-pointer"
                      />
                      Podcast
                    </div>
                    <RightIcon />
                    <ul className="absolute submenu left-[100%] top-[0px] bg-header1 w-[200px] h-[280px] pt-[10px]">
                      <li className="px-[10px] py-[5px]">Podcast1</li>
                      <li className="px-[10px] py-[5px]">Podcast2</li>
                      <li className="px-[10px] py-[5px]">Podcast3</li>
                      <li className="px-[10px] py-[5px]">Podcast4</li>
                      <li className="px-[10px] py-[5px]">Podcast5</li>
                    </ul>
                  </li>
                  <li className="flex px-[10px] items-center justify-between font-semibold py-[8px] hover:bg-header1">
                    <div className="flex items-start gap-[10px]">
                      <Image
                        src={Menu2}
                        width={21}
                        height={20}
                        alt="Picture of the author"
                        className="cursor-pointer"
                      />
                      Tuyển dụng
                    </div>
                    <RightIcon />
                    <ul className="absolute submenu left-[100%] top-[0px] bg-header1 w-[200px] h-[280px] pt-[10px]">
                      <li className="px-[10px] py-[5px]">Tuyển dụng 1</li>
                      <li className="px-[10px] py-[5px]">Tuyển dụng 2</li>
                      <li className="px-[10px] py-[5px]">Tuyển dụng 3</li>
                      <li className="px-[10px] py-[5px]">Tuyển dụng 4</li>
                      <li className="px-[10px] py-[5px]">Tuyển dụng 5</li>
                    </ul>
                  </li>
                  <li className="flex px-[10px] items-center justify-between font-semibold py-[8px] hover:bg-header1">
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src={Menu5}
                        width={21}
                        height={20}
                        alt="Picture of the author"
                        className="cursor-pointer"
                      />
                      Đội ngũ
                    </div>
                    <RightIcon />
                    <ul className="absolute submenu left-[100%] top-[0px] bg-header1 w-[200px] h-[280px] pt-[10px]">
                      <li className="px-[10px] py-[5px]">Đội ngũ 1</li>
                      <li className="px-[10px] py-[5px]">Đội ngũ 2</li>
                      <li className="px-[10px] py-[5px]">Đội ngũ 3</li>
                      <li className="px-[10px] py-[5px]">Đội ngũ 4</li>
                      <li className="px-[10px] py-[5px]">Đội ngũ 5</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
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
            <li className="border-r-[1px] border-[#fff] px-[10px] font-medium hover:opacity-65">
              Về chúng tôi
            </li>
            <li className="border-r-[1px] border-[#fff] px-[10px] font-medium hover:opacity-65">
              Hệ thống
            </li>
            <li className="border-r-[1px] border-[#fff] px-[10px] font-medium hover:opacity-65">
              Hỗ trợ
            </li>
            <li className="px-[10px] font-medium hover:opacity-65">
              Tài khoản
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderDefault;
