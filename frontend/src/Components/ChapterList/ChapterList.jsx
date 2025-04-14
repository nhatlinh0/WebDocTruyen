import React, { useContext, useEffect, useState } from "react";
import { ComicContext } from "../../Context/ComicContext";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const ChapterList = (props) => {
  const navigate = useNavigate();
  const { allComics } = useContext(ComicContext);
  // const chapters = allChapters.filter((item) => item.comic_id == props.comicId);

  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topComics, setTopComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [chaptersPerPage, setChaptersPerPage] = useState(20);

  useEffect(() => {
    fetch(`https://newphim.online/api/top-month`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // var top = allComics.filter((item) => {
          //   return data.some((part) => part.id == item.id);
          // });
          setTopComics(data);
        }
      })
      .catch((error) => console.log("Server Errror"));
  }, []);

  useEffect(() => {
    if (props.comicId) {
      fetch(`https://newphim.online/api/truyen-chu/${props.comicId}/chaps`)
        .then((res) => res.json())
        .then((data) => {
          setChapters(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching chapters:", error);
          setIsLoading(false);
        });
    }
  }, [props.comicId]);

  const totalChapters = chapters.length;
  const totalPages = Math.ceil(totalChapters / chaptersPerPage);

  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chapters.slice(
    indexOfFirstChapter,
    indexOfLastChapter
  );

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  const pageNumberLimit = 5;

  let pageNumbers = [];
  if (totalPages <= pageNumberLimit) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    const leftOffset = Math.max(
      0,
      Math.min(
        totalPages - pageNumberLimit,
        currentPage - Math.ceil(pageNumberLimit / 2)
      )
    );
    pageNumbers = Array.from(
      { length: pageNumberLimit },
      (_, i) => leftOffset + i + 1
    ).filter((num) => num <= totalPages);
  }

  if (isLoading) {
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải danh sách chương...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 gap-6 lg:gap-10 my-8 sm:my-12 md:my-16 lg:my-20">
      {/* Danh sách chương */}
      <div className="bg-[#151018] rounded-lg py-4 sm:py-6 ring-1 ring-blue-800 w-full lg:flex-7">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-10 mb-4 sm:mb-6">
          <p className="text-[#C72F44] text-lg sm:text-xl font-bold mb-3 sm:mb-0">
            Danh sách chương
          </p>
          <div className="flex items-center text-white text-xs sm:text-sm">
            <span>Hiển thị:</span>
            <select
              className="ml-2 bg-[#231B27] rounded-md px-2 py-1 border border-gray-700"
              value={chaptersPerPage}
              onChange={(e) => {
                setChaptersPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>

        {totalChapters > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-white gap-y-4 sm:gap-y-6 place-items-start px-4 sm:px-6 md:px-10">
              {currentChapters.map((item) => (
                <Link
                  key={item.id}
                  to={`/reading/${props.comicSlug}`}
                  state={{ chapterId: item.id }}
                  className="hover:text-[#C72F44] transition-colors duration-200 w-full truncate pr-4"
                >
                  <p onClick={() => window.scrollTo(0, 0)}>{item.title}</p>
                </Link>
              ))}
            </div>

            {/* Phân trang */}
            <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 md:mt-10 text-white">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-1 p-1 sm:p-2 rounded-md ${
                  currentPage === 1 ? "text-gray-500" : "hover:bg-[#231B27]"
                }`}
              >
                <FiChevronLeft />
              </button>

              {/* Trang đầu tiên */}
              {pageNumbers[0] > 1 && (
                <>
                  <button
                    onClick={() => paginate(1)}
                    className={`mx-1 px-2 sm:px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "bg-[#C72F44] text-white"
                        : "hover:bg-[#231B27]"
                    }`}
                  >
                    1
                  </button>
                  {pageNumbers[0] > 2 && <span className="mx-1">...</span>}
                </>
              )}

              {/* Các trang giữa */}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`mx-1 px-2 sm:px-3 py-1 rounded-md ${
                    currentPage === number
                      ? "bg-[#C72F44] text-white"
                      : "hover:bg-[#231B27]"
                  }`}
                >
                  {number}
                </button>
              ))}

              {/* Trang cuối cùng */}
              {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <>
                  {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                    <span className="mx-1">...</span>
                  )}
                  <button
                    onClick={() => paginate(totalPages)}
                    className={`mx-1 px-2 sm:px-3 py-1 rounded-md ${
                      currentPage === totalPages
                        ? "bg-[#C72F44] text-white"
                        : "hover:bg-[#231B27]"
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`mx-1 p-1 sm:p-2 rounded-md ${
                  currentPage === totalPages
                    ? "text-gray-500"
                    : "hover:bg-[#231B27]"
                }`}
              >
                <FiChevronRight />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-white py-6 sm:py-8 md:py-10">
            Không có chương nào cho truyện này
          </div>
        )}
      </div>

      <div className="w-full lg:flex-3 bg-[#151018] text-white rounded-lg sm:rounded-xl ring-1 ring-blue-800 overflow-hidden mt-6 lg:mt-0">
        <h1 className="text-center text-[#C72F44] font-bold py-2 sm:py-3 border-b border-blue-800 bg-[#1A1520] text-base sm:text-lg">
          Xem nhiều trong tháng
        </h1>
        <div className="overflow-y-auto max-h-[300px] sm:max-h-[400px] md:h-[500px] px-3 sm:px-4 custom-scrollbar">
          {topComics &&
            topComics.map((item, i) => {
              const top = allComics.find((c) => c.id == item.id);
              return top ? (
                <div
                  key={i}
                  className="flex items-center space-x-2 sm:space-x-3 py-3 sm:py-4 cursor-pointer border-b border-gray-700 hover:bg-[#231B27] transition-all duration-200 rounded-md px-1 sm:px-2 my-1"
                  onClick={() => {
                    window.scroll(0, 0);
                    navigate(`/comic/${item.id}`);
                  }}
                >
                  <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#C72F44] to-[#9A0F29] text-white font-medium text-xs sm:text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <img
                    src={"https://newphim.online/" + top.img}
                    alt={top.name}
                    className="w-10 h-14 sm:w-14 sm:h-20 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-white font-medium hover:text-[#C72F44] text-sm sm:text-base">
                      {top.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate mt-0.5 sm:mt-1">
                      Chương {top.chapter_count}
                    </p>
                    <div className="flex items-center mt-0.5 sm:mt-1">
                      <FaEye className="text-[#9a989b] text-[10px] sm:text-xs" />
                      <p className="text-[10px] sm:text-xs text-[#9a989b] ml-1">
                        {item.view_count?.toLocaleString() || "0"}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
};

export default ChapterList;
