"use client";

import HeaderDefault from "./HeaderDefault";

const LayoutDefault = ({ children }: Props) => {
  return (
    <div>
      <HeaderDefault />
      <div className="bg-main px-[10%] py-[30px] h-[1000vh] ">{children}</div>
    </div>
  );
};

type Props = {
  children: any;
};

export default LayoutDefault;
