import React from "react";
import other from "../../Assets/other-cover.webp";

const OtherItem = () => {
  return (
    <div
      className="cursor-pointer group mx-1 sm:mx-4"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="relative group-hover:scale-105 duration-300">
        <img
          src={other}
          alt="Xem tất cả thể loại"
          className="rounded-lg sm:rounded-2xl w-full object-cover aspect-[3/4]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#2F86C4] opacity-80 rounded-lg sm:rounded-2xl duration-300 group-hover:opacity-50"></div>
        <h1 className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-7 right-4 sm:right-7 text-white font-bold text-lg sm:text-2xl text-center duration-300 group-hover:scale-105">
          Xem tất cả thể loại
        </h1>
      </div>
    </div>
  );
};

export default OtherItem;
