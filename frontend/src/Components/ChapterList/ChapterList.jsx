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
    <div className="flex justify-between mx-40 gap-10 my-30">
      <div className="bg-[#151018] rounded-lg  py-6 ring-1 ring-blue-800 flex-7">
        <div className="flex justify-between items-center mx-10 mb-6">
          <p className="text-[#C72F44] text-xl font-bold">Danh sách chương</p>
          <div className="flex items-center text-white text-sm">
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
            <div className="grid grid-cols-2 text-white gap-y-6 place-items-start mx-10">
              {currentChapters.map((item) => (
                <Link
                  key={item.id}
                  to={`/reading/${props.comicSlug}`}
                  state={{ chapterId: item.id }}
                  className="hover:text-[#C72F44] transition-colors duration-200"
                >
                  <p onClick={() => window.scrollTo(0, 0)}>{item.title}</p>
                </Link>
              ))}
            </div>

            {/* Phân trang */}
            <div className="flex justify-center items-center mt-10 text-white">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-1 p-2 rounded-md ${
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
                    className={`mx-1 px-3 py-1 rounded-md ${
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
                  className={`mx-1 px-3 py-1 rounded-md ${
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
                    className={`mx-1 px-3 py-1 rounded-md ${
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
                className={`mx-1 p-2 rounded-md ${
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
          <div className="text-center text-white py-10">
            Không có chương nào cho truyện này
          </div>
        )}
      </div>

      <div className="flex-3  bg-[#151018] text-white rounded-xl ring-1 ring-blue-800">
        <h1 className="text-center text-[#C72F44] font-bold py-2 border-b-1 border-blue-800">
          Xem nhiều trong tháng
        </h1>
        <div className="overflow-y-auto h-100 px-4">
          {topComics &&
            topComics.map((item, i) => {
              // Tìm comic dựa trên id ở bên ngoài JSX
              const top = allComics.find((c) => c.id == item.id);
              // Kiểm tra nếu top tồn tại mới render
              return top ? (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 cursor-pointer border-b-[1px] border-gray-500"
                  onClick={() => {
                    window.scroll(0, 0);
                    navigate(`/comic/${item.id}`);
                  }}
                >
                  <h1>{i + 1}</h1>
                  <img
                    src={"https://newphim.online/" + top.img}
                    alt=""
                    className="w-14 h-17 object-cover"
                  />
                  <div className="w-[120px]">
                    <p className="truncate pb-3">{top.name}</p>
                    <p className="text-sm truncate">
                      Chương {top.chapter_count}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 my-4 justify-end">
                    <FaEye className="text-[#9a989b]" />
                    <p className="text-sm text-[#9a989b]">{item.view_count}</p>
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
