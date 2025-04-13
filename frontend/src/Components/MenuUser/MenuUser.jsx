import React, { createContext, useState, useEffect, useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../ComicItem/ComicItem";

import Setting from "../Setting/Setting";
import { useNavigate, useParams } from "react-router-dom";

const MenuUser = () => {
  const { menu } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { allComics } = useContext(ComicContext);
  const [savedComics, setSavedComics] = useState();
  const [historyComics, setHistoryComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://newphim.online/api/favorite-stories/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const saved = allComics.filter((item) => {
          return data.favorite_stories.some((saved) => saved.id === item.id);
        });
        setSavedComics(saved);
        setIsLoading(false);
      });
  }, [allComics, userId]);

  const handleRemoveFromSaved = (comicId) => {
    setSavedComics((prevSaved) =>
      prevSaved.filter((comic) => comic.id !== comicId)
    );
  };

  const handleRemoveFromHistory = (comicId) => {
    setHistoryComics((prevHistory) =>
      prevHistory.filter((comic) => comic.id !== comicId)
    );
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://newphim.online/api/history/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const history = allComics.filter((item) => {
          return data.history.some((history) => history.id === item.id);
        });
        setHistoryComics(history);
        setIsLoading(false);
      });
  }, [allComics, userId]);

  const getMenuItemClasses = (menuName) => {
    return {
      text:
        menu === menuName
          ? "text-[#C72F44]"
          : "text-white hover:text-[#C72F44] transition-colors duration-300",
      indicator: menu === menuName ? "" : "hidden",
    };
  };

  if (isLoading) return <div></div>;

  return (
    <div className="mx-30 pt-10 pb-25 ">
      {/* MENU */}
      <div className="flex items-center gap-20">
        <div
          onClick={() => navigate("/profile/saved")}
          className="cursor-pointer"
        >
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

        <div
          onClick={() => navigate("/profile/history")}
          className="cursor-pointer"
        >
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

        <div
          onClick={() => navigate("/profile/setting")}
          className="cursor-pointer"
        >
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
        <div>
          <h3 className="text-xl text-white mt-20 ml-5">Truyện đã lưu</h3>
          <div className="flex gap-20 justify-between mx-2 mt-8 ">
            <div className="grid grid-cols-3 gap-y-8">
              {savedComics &&
                savedComics.map((item, i) => (
                  <ComicItem
                    key={i}
                    id={item.id}
                    img={"https://newphim.online/" + item.img}
                    name={item.name}
                    chapter={item.chapter_count}
                    rate={item.rate}
                    saved
                    onRemove={handleRemoveFromSaved}
                  />
                ))}
            </div>
            <div className="min-w-100 bg-amber-50"></div>
          </div>
        </div>
      )}

      {menu == "history" && (
        <div>
          <h3 className="text-xl text-white  mt-20 ml-5">Lịch sử đọc truyện</h3>
          <div className="flex gap-20 justify-between mx-2 mt-8 ">
            <div className="grid grid-cols-3 gap-y-8">
              {historyComics &&
                historyComics.map((item, i) => (
                  <ComicItem
                    key={i}
                    id={item.id}
                    img={"https://newphim.online/" + item.img}
                    name={item.name}
                    chapter={item.chapter_count}
                    rate={item.rate}
                    history
                    onRemove={handleRemoveFromHistory}
                  />
                ))}
            </div>
            <div className="min-w-100 bg-amber-50"></div>
          </div>
        </div>
      )}

      {menu === "setting" && <Setting />}
    </div>
  );
};

export default MenuUser;
