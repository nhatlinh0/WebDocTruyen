import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../ComicItem/ComicItem";

const MenuUser = () => {
  const { allComics } = useContext(ComicContext);
  return (
    <div className="mx-25">
      {/* MENU */}
      <div className="flex items-center gap-20">
        <div>
          <p className="text-[#C72F44] cursor-pointer text-lg">Đã lưu</p>
          <div className="h-1 bg-[#C72F44] rounded-full"></div>
        </div>
        <div>
          <p className="text-white cursor-pointer text-lg">Lịch sử</p>
          <div className="h-1 bg-[#C72F44] rounded-full hidden"></div>
        </div>
        <div>
          <p className="text-white cursor-pointer text-lg">Cài đặt</p>
          <div className="h-1 bg-[#C72F44] rounded-full hidden"></div>
        </div>
      </div>

      {/* MAIN */}

      <div className="flex gap-20 justify-between mx-2 mt-14">
        <div className="grid grid-cols-4 gap-8">
          {allComics.map((item, i) => (
            <ComicItem
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              chapter={item.chapter}
              rate={item.rate}
            />
          ))}
        </div>
        <div className="w-100 bg-amber-50"></div>
      </div>
    </div>
  );
};

export default MenuUser;
