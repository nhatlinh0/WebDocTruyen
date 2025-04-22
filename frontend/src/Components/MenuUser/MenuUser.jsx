import React, { createContext, useState, useEffect, useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../ComicItem/ComicItem";
import ReactPaginate from "react-paginate";

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

  // PHAN TRANG
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const pageCount =
    menu == "saved"
      ? Math.ceil(savedComics?.length / itemsPerPage)
      : Math.ceil(historyComics?.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems =
    menu == "saved"
      ? savedComics?.slice(offset, offset + itemsPerPage)
      : historyComics?.slice(offset, offset + itemsPerPage);

  useEffect(() => {
    // Reset trang về 0 khi menu thay đổi
    setCurrentPage(0);
  }, [menu]);
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-30 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-25">
      {/* MENU */}
      <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-10 md:gap-20 border-b border-gray-700 pb-2 overflow-x-auto">
        <div
          onClick={() => navigate("/profile/saved")}
          className="cursor-pointer flex-shrink-0"
        >
          <p
            className={`${
              getMenuItemClasses("saved").text
            } text-sm sm:text-base md:text-lg font-medium`}
          >
            Đã lưu
          </p>
          <div
            className={`h-0.5 sm:h-1 bg-[#C72F44] rounded-full ${
              getMenuItemClasses("saved").indicator
            }`}
          ></div>
        </div>

        <div
          onClick={() => navigate("/profile/history")}
          className="cursor-pointer flex-shrink-0"
        >
          <p
            className={`${
              getMenuItemClasses("history").text
            } text-sm sm:text-base md:text-lg font-medium`}
          >
            Lịch sử
          </p>
          <div
            className={`h-0.5 sm:h-1 bg-[#C72F44] rounded-full ${
              getMenuItemClasses("history").indicator
            }`}
          ></div>
        </div>

        <div
          onClick={() => navigate("/profile/setting")}
          className="cursor-pointer flex-shrink-0"
        >
          <p
            className={`${
              getMenuItemClasses("setting").text
            } text-sm sm:text-base md:text-lg font-medium`}
          >
            Cài đặt
          </p>
          <div
            className={`h-0.5 sm:h-1 bg-[#C72F44] rounded-full ${
              getMenuItemClasses("setting").indicator
            }`}
          ></div>
        </div>
      </div>

      {/* MAIN */}

      {menu == "saved" && (
        <div>
          <h3 className="text-lg sm:text-xl text-white mt-6 sm:mt-10 md:mt-20 ml-0 sm:ml-2 md:ml-5">
            Truyện đã lưu
          </h3>
          <div className="mt-4 sm:mt-6 md:mt-8">
            {currentItems && currentItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-y-8">
                {currentItems.map((item, i) => (
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
            ) : (
              <div className="text-center py-10 text-white">
                <p className="text-lg">Bạn chưa lưu truyện nào</p>
                <button
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                  className="mt-4 px-4 py-2 bg-[#C72F44] rounded-md hover:bg-opacity-80 transition-colors"
                >
                  Khám phá truyện
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {menu == "history" && (
        <div>
          <h3 className="text-lg sm:text-xl text-white mt-6 sm:mt-10 md:mt-20 ml-0 sm:ml-2 md:ml-5">
            Lịch sử đọc truyện
          </h3>
          <div className="mt-4 sm:mt-6 md:mt-8">
            {currentItems && currentItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-y-8">
                {currentItems.map((item, i) => (
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
            ) : (
              <div className="text-center py-10 text-white">
                <p className="text-lg">Bạn chưa đọc truyện nào</p>
                <button
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                  className="mt-4 px-4 py-2 bg-[#C72F44] rounded-md hover:bg-opacity-80 transition-colors"
                >
                  Khám phá truyện
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {menu === "setting" && <Setting />}

      {menu != "setting" && (savedComics || historyComics) && (
        <ReactPaginate
          key={menu}
          breakLabel="..."
          previousLabel={"←"}
          nextLabel={"→"}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          forcePage={currentPage}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center gap-2 py-4"
          pageClassName="border border-gray-600 rounded"
          pageLinkClassName="block rounded px-3 py-1 text-white hover:bg-[#C72F44]"
          previousLinkClassName="block px-3 py-1 border rounded text-white hover:bg-gray-500"
          nextLinkClassName="block px-3 py-1 border rounded text-white hover:bg-gray-500"
          activeLinkClassName="bg-[#C72F44] text-white"
          breakClassName="text-white"
        />
      )}
    </div>
  );
};

export default MenuUser;
