import React, { useContext, useState, useEffect, useMemo } from "react";
import { CiZoomOut } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

const Reading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const comicName = location.state?.comicName;
  // const currentPage = location.state?.page;
  const [comicName, setComicName] = useState(location.state?.comicName);
  const [currentPage, setCurrentPage] = useState(location.state?.page);

  const { comicId, chapterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [index, setIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fontSize, setFontSize] = useState(24);

  const [showSettings, setShowSettings] = useState(false);
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#231B27");
  const [lineHeight, setLineHeight] = useState(3);
  const [fontFamily, setFontFamily] = useState("sans-serif");

  // Thêm hàm để toggle settings modal
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://newphim.online/api/truyen-chu/${comicId}/chaps/${chapterId}`)
      .then((res) => res.json())
      .then((data) => {
        setChapter(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching chapter:", error);
      });
  }, [comicId, chapterId]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://newphim.online/api/truyen-chu/${comicId}/chaps?page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setChapters(data);
          setIndex(data.findIndex((i) => i.id == chapterId));
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching chapter:", error);
      });
  }, [comicId]);

  const increaseNumber = () => {
    if (index + 1 < chapters.length) {
      setIndex((prev) => prev + 1);
      const nextChapter = parseInt(chapterId) + 1;
      navigate(`/reading/${comicId}/${nextChapter}`);
      window.scrollTo(0, 0);
    }
  };

  const decreaseNumber = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      const prevChapter = parseInt(chapterId) - 1;
      navigate(`/reading/${comicId}/${prevChapter}`);
      window.scrollTo(0, 0);
    }
  };

  const increaseFontSize = () => {
    if (fontSize < 36) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 14) {
      setFontSize(fontSize - 2);
    }
  };
  if (isLoading)
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải...</p>
        </div>
      </div>
    );

  return (
    <div
      className="text-white bg-[#231B27]"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Tiêu đề truyện */}
      <h1 className="text-xl sm:text-2xl font-bold my-3 sm:my-7 mx-4 sm:ml-8 md:ml-20 bg-gradient-to-r from-red-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
        {comicName}
      </h1>

      {/* Toolbar điều khiển */}
      <div className="flex flex-col sm:flex-row bg-[#151018] p-2 sm:p-3">
        {/* Font size controls */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 w-full sm:flex-3 mb-2 sm:mb-0">
          <CiZoomOut
            className="text-3xl sm:text-5xl cursor-pointer"
            onClick={decreaseFontSize}
          />
          <p
            className="min-w-6 sm:min-w-10 text-center"
            style={{ fontSize: `${fontSize}px` }}
          >
            aA
          </p>
          <CiZoomIn
            className="text-3xl sm:text-5xl cursor-pointer"
            onClick={increaseFontSize}
          />
        </div>

        {/* Navigation controls */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:flex-7 justify-between sm:justify-start">
          <div
            className="bg-[#C72F44] p-2 sm:px-3 sm:py-4 rounded-lg cursor-pointer"
            onClick={decreaseNumber}
          >
            <MdOutlineKeyboardArrowLeft className="text-xl sm:text-2xl" />
          </div>

          <div className="flex justify-between items-center bg-[#332B37] h-full w-full sm:w-1/2 rounded-xl p-2 sm:p-4 relative">
            <p className="text-sm sm:text-base mr-2">{chapter.title}</p>
            <div
              className="pl-1 sm:pl-2 border-l-2 cursor-pointer flex-shrink-0"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <IoIosArrowDown className="text-xl sm:text-2xl" />
            </div>

            {toggleMenu && (
              <div className="absolute w-full max-h-60 sm:max-h-100 overflow-y-scroll bg-[#332b37] left-1/2 -translate-x-1/2 top-12 sm:top-15 z-20 shadow-lg">
                {chapters.map((item, i) => (
                  <p
                    key={i}
                    className="p-2 sm:p-3 cursor-pointer text-xs sm:text-sm hover:bg-[#231B27] transition-colors truncate"
                    onClick={() => {
                      setToggleMenu(false);
                      setIndex(i);
                      navigate(`/reading/${comicId}/${item.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div
            className="bg-[#C72F44] p-2 sm:px-3 sm:py-4 rounded-lg cursor-pointer"
            onClick={increaseNumber}
          >
            <MdOutlineKeyboardArrowRight className="text-xl sm:text-2xl" />
          </div>

          <IoSettingsOutline
            className="w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-20 cursor-pointer"
            onClick={toggleSettings}
          />
        </div>
      </div>

      {/* Nội dung chương */}
      <div className="mx-4 sm:mx-16 md:mx-28 lg:mx-55 my-6 sm:my-10 md:my-20">
        <p
          className="text-lg sm:text-2xl leading-normal select-none whitespace-pre-wrap"
          style={{
            fontSize: `${fontSize}px`,
            color: textColor,
            lineHeight: lineHeight,
            fontFamily: fontFamily,
          }}
        >
          {chapter.content ? chapter.content : "Chưa cập nhật chương"}
        </p>

        {/* Settings modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-[#1D1620] rounded-xl p-4 sm:p-6 w-full max-w-[500px] max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Cài đặt hiển thị
                </h3>
                <button
                  onClick={toggleSettings}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Cỡ chữ: {fontSize}px
                </label>
                <div className="flex items-center">
                  <button
                    className="bg-[#332B37] text-white px-2 sm:px-3 py-1 rounded-l-md text-sm sm:text-base"
                    onClick={decreaseFontSize}
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="14"
                    max="36"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mx-2"
                  />
                  <button
                    className="bg-[#332B37] text-white px-2 sm:px-3 py-1 rounded-r-md text-sm sm:text-base"
                    onClick={increaseFontSize}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Line Height Control */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Giãn dòng: {lineHeight.toFixed(1)}
                </label>
                <div className="flex items-center">
                  <button
                    className="bg-[#332B37] text-white px-2 sm:px-3 py-1 rounded-l-md text-sm sm:text-base"
                    onClick={() =>
                      setLineHeight(Math.max(1.0, lineHeight - 0.1))
                    }
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="1.0"
                    max="4.0"
                    step="0.1"
                    value={lineHeight}
                    onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mx-2"
                  />
                  <button
                    className="bg-[#332B37] text-white px-2 sm:px-3 py-1 rounded-r-md text-sm sm:text-base"
                    onClick={() =>
                      setLineHeight(Math.min(4.0, lineHeight + 0.1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Text Color Control */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Màu chữ
                </label>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#FFFFFF")}
                    style={{ backgroundColor: "#FFFFFF" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#FEFBBC")}
                    style={{ backgroundColor: "#FEFBBC" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#E3F6E5")}
                    style={{ backgroundColor: "#E3F6E5" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#134F5C")}
                    style={{ backgroundColor: "#134F5C" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#000")}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="ml-2 w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>

              {/* Background Color Control */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Màu nền
                </label>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#231B27")}
                    style={{ backgroundColor: "#231B27" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#0F1719")}
                    style={{ backgroundColor: "#0F1719" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#F8F7F1")}
                    style={{ backgroundColor: "#F8F7F1" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#134F5C")}
                    style={{ backgroundColor: "#134F5C" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#06D001")}
                    style={{ backgroundColor: "#06D001" }}
                  ></div>
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#f9f777")}
                    style={{ backgroundColor: "#f9f777" }}
                  ></div>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="ml-2 w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>

              {/* Font Family Control */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Phông chữ
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full p-2 bg-[#332B37] border border-gray-700 rounded-md text-white text-sm sm:text-base"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="cursive">Cursive</option>
                  <option value="'Open Sans', sans-serif">Open Sans</option>
                  <option value="'Roboto', sans-serif">Roboto</option>
                </select>
              </div>

              {/* Reset Button */}
              <div className="mt-6 sm:mt-8">
                <button
                  onClick={() => {
                    setFontSize(24);
                    setTextColor("#FFFFFF");
                    setBackgroundColor("#231B27");
                    setLineHeight(3);
                    setFontFamily("sans-serif");
                  }}
                  className="w-full py-2 bg-[#C72F44] text-white rounded-md hover:bg-[#A52638] transition-colors text-sm sm:text-base"
                >
                  Khôi phục mặc định
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Button Navigation Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-16 pb-20 sm:pb-40 gap-4 sm:gap-0">
          <button
            onClick={decreaseNumber}
            disabled={index <= 0}
            className={`flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-lg transition-all duration-300 w-full sm:w-auto ${
              index <= 0
                ? "bg-gray-700 text-gray-400"
                : "bg-gradient-to-r from-[#8A2387] to-[#C72F44] text-white hover:shadow-[0_8px_30px_rgb(199,47,68,0.3)] hover:-translate-y-1"
            } shadow-lg`}
          >
            <MdOutlineKeyboardArrowLeft className="text-xl sm:text-2xl" />
            Chương trước
          </button>

          <div className="text-white text-sm sm:text-lg my-2 sm:my-0">
            <span className="px-2 sm:px-4 py-1 sm:py-2 bg-[#332B37] rounded-lg">
              Chương {50 * (currentPage - 1) + index + 1}/
              {50 * (currentPage - 1) + chapters.length}
            </span>
          </div>

          <button
            onClick={increaseNumber}
            disabled={index >= chapters.length - 1}
            className={`flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-lg transition-all duration-300 w-full sm:w-auto ${
              index >= chapters.length - 1
                ? "bg-gray-700 text-gray-400"
                : "bg-gradient-to-r from-[#C72F44] to-[#F12711] text-white hover:shadow-[0_8px_30px_rgb(199,47,68,0.3)] hover:-translate-y-1"
            } shadow-lg`}
          >
            Chương sau
            <MdOutlineKeyboardArrowRight className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reading;
