import React, { useContext, useState } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../ComicItem/ComicItem";

import Setting from "../Setting/Setting";

const MenuUser = () => {
  const [menu, setMenu] = useState("saved");

  const { allComics } = useContext(ComicContext);
  const getMenuItemClasses = (menuName) => {
    return {
      text:
        menu === menuName
          ? "text-[#C72F44]"
          : "text-white hover:text-[#C72F44] transition-colors duration-300",
      indicator: menu === menuName ? "" : "hidden",
    };
  };
  return (
    <div className="mx-30 pt-10 pb-25">
      {/* MENU */}
      <div className="flex items-center gap-20">
        <div onClick={() => setMenu("saved")} className="cursor-pointer">
          <p
            className={`${
              getMenuItemClasses("saved").text
            } text-lg font-medium`}
          >
            Đã lưu
          </p>
          <div
            className={`h-1 bg-[#C72F44] rounded-full ${
              getMenuItemClasses("saved").indicator
            }`}
          ></div>
        </div>

        <div onClick={() => setMenu("history")} className="cursor-pointer">
          <p
            className={`${
              getMenuItemClasses("history").text
            } text-lg font-medium`}
          >
            Lịch sử
          </p>
          <div
            className={`h-1 bg-[#C72F44] rounded-full ${
              getMenuItemClasses("history").indicator
            }`}
          ></div>
        </div>

        <div onClick={() => setMenu("setting")} className="cursor-pointer">
          <p
            className={`${
              getMenuItemClasses("setting").text
            } text-lg font-medium`}
          >
            Cài đặt
          </p>
          <div
            className={`h-1 bg-[#C72F44] rounded-full ${
              getMenuItemClasses("setting").indicator
            }`}
          ></div>
        </div>
      </div>

      {/* MAIN */}

      {menu == "saved" && (
        <div className="flex gap-20 justify-between mx-2 mt-14 ">
          <div className="grid grid-cols-3 gap-y-8">
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
          <div className="min-w-100 bg-amber-50"></div>
        </div>
      )}

      {menu == "history" && (
        <div className="flex gap-20 justify-between mx-2 mt-14 ">
          <div className="grid grid-cols-3 gap-y-8">
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
          <div className="min-w-100 bg-amber-50"></div>
        </div>
      )}

      {menu === "setting" && <Setting />}
    </div>
  );
};

export default MenuUser;
