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
  const ids = location.state?.chapterId;

  // const { comicSlug, chapterId } = useParams();
  const { comicSlug } = useParams();
  const { allComics } = useContext(ComicContext);
  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState();
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

  // ...existing code...

  // Thêm hàm để toggle settings modal
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    const foundComic = allComics.find((item) => item.slug == comicSlug);
    setComic(foundComic);
  }, [comicSlug, allComics]);

  // const chapters = allChapters.filter((item) => item.comic_id == comic.id);

  useEffect(() => {
    if (comic?.id) {
      setIsLoading(true);
      fetch(`https://newphim.online/api/truyen-chu/${comic.id}/chaps`)
        .then((res) => res.json())
        .then((data) => {
          setChapters(data);
          if (data && data.length > 0) {
            if (ids) {
              var newIndex = data.findIndex((item) => item.id == ids);
              setChapter(data[newIndex]);
              setIndex(newIndex);
              setIsLoading(false);
            } else {
              setChapter(data[index]);
              setIsLoading(false);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching chapters:", error);
        });
    }
  }, [comic?.id]);

  // useEffect(() => {
  //   const foundChapter = chapters.find((item) => item.id == chapterId);
  //   setChapter(foundChapter);
  // }, [chapterId]);

  const increaseNumber = () => {
    // const nextChapter = parseInt(chapterId) + 1;
    // navigate(`/reading/${comicSlug}/${nextChapter}`);
    if (index + 1 < chapters.length) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setChapter(chapters[newIndex]);
        return newIndex;
      });
      window.scrollTo(0, 0);
    }
  };

  const decreaseNumber = () => {
    // const prevChapter = Math.max(1, parseInt(chapterId) - 1);
    // window.scrollTo(0, 0);
    // navigate(`/reading/${comicSlug}/${prevChapter}`);
    if (index > 0) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        setChapter(chapters[newIndex]);
        return newIndex;
      });
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
      <h1 class="text-2xl font-bold my-7 ml-20 bg-gradient-to-r from-red-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
        {comic.name}
      </h1>
      <div className="flex bg-[#151018] p-2">
        <div className="flex justify-center items-center gap-4 flex-3">
          <CiZoomOut
            className="text-5xl cursor-pointer"
            onClick={decreaseFontSize}
          />
          <p
            className={`min-w-10 text-center `}
            style={{ fontSize: `${fontSize}px` }}
          >
            aA
          </p>
          <CiZoomIn
            className="text-5xl cursor-pointer"
            onClick={increaseFontSize}
          />
        </div>

        <div className="flex items-center gap-4 flex-7">
          <div
            className="bg-[#C72F44] px-3 py-4 rounded-lg cursor-pointer"
            onClick={decreaseNumber}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </div>
          <div className="flex justify-between items-center bg-[#332B37] h-full w-1/2 rounded-xl p-4 relative">
            <p>{chapter.title}</p>
            <div
              className="pl-2 border-l-2 cursor-pointer"
              onClick={() =>
                toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
              }
            >
              <IoIosArrowDown className="text-2xl" />
            </div>
            {toggleMenu && (
              <div className="absolute w-full max-h-100 overflow-y-scroll bg-[#332b37] left-1/2 -translate-x-1/2 top-15">
                {chapters.map((item, i) => (
                  <p
                    key={i}
                    className="p-3 cursor-pointer text-sm hover:bg-[#231B27] transition-colors"
                    onClick={() => {
                      setToggleMenu(false);
                      setChapter(item);
                      setIndex(i);
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
            className="bg-[#C72F44] px-3 py-4 rounded-lg cursor-pointer"
            onClick={increaseNumber}
          >
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </div>
          <IoSettingsOutline
            className="w-8 h-8 ml-20 cursor-pointer"
            onClick={toggleSettings}
          />
        </div>
      </div>

      <div className="mx-55 my-20">
        <p
          className="text-2xl leading-20 select-none whitespace-pre-wrap"
          style={{
            fontSize: `${fontSize}px`,
            color: textColor,
            lineHeight: lineHeight,
            fontFamily: fontFamily,
          }}
        >
          {chapter.content ? chapter.content : "Chưa cập nhật chương"}
        </p>

        {showSettings && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-[#1D1620] rounded-xl p-6 w-[500px] max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
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
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  Cỡ chữ: {fontSize}px
                </label>
                <div className="flex items-center">
                  <button
                    className="bg-[#332B37] text-white px-3 py-1 rounded-l-md"
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
                    className="bg-[#332B37] text-white px-3 py-1 rounded-r-md"
                    onClick={increaseFontSize}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Line Height Control */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  Giãn dòng: {lineHeight.toFixed(1)}
                </label>
                <div className="flex items-center">
                  <button
                    className="bg-[#332B37] text-white px-3 py-1 rounded-l-md"
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
                    className="bg-[#332B37] text-white px-3 py-1 rounded-r-md"
                    onClick={() =>
                      setLineHeight(Math.min(4.0, lineHeight + 0.1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Text Color Control */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Màu chữ</label>
                <div className="flex gap-2">
                  <div
                    className="w-8 h-8 rounded-full bg-white border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#FFFFFF")}
                    style={{ backgroundColor: "#FFFFFF" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#FEFBBC")}
                    style={{ backgroundColor: "#FEFBBC" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-green-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#E3F6E5")}
                    style={{ backgroundColor: "#E3F6E5" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-green-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#134F5C")}
                    style={{ backgroundColor: "#134F5C" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-green-200 border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setTextColor("#000")}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="ml-2"
                  />
                </div>
              </div>

              {/* Background Color Control */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Màu nền</label>
                <div className="flex gap-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#231B27")}
                    style={{ backgroundColor: "#231B27" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#0F1719")}
                    style={{ backgroundColor: "#0F1719" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#F8F7F1")}
                    style={{ backgroundColor: "#F8F7F1" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#134F5C")}
                    style={{ backgroundColor: "#134F5C" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#06D001")}
                    style={{ backgroundColor: "#06D001" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:border-blue-500"
                    onClick={() => setBackgroundColor("#f9f777")}
                    style={{ backgroundColor: "#f9f777" }}
                  ></div>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="ml-2"
                  />
                </div>
              </div>

              {/* Font Family Control */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Phông chữ</label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full p-2 bg-[#332B37] border border-gray-700 rounded-md text-white"
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
              <div className="mt-8">
                <button
                  onClick={() => {
                    setFontSize(24);
                    setTextColor("#FFFFFF");
                    setBackgroundColor("#231B27");
                    setLineHeight(3);
                    setFontFamily("sans-serif");
                  }}
                  className="w-full py-2 bg-[#C72F44] text-white rounded-md hover:bg-[#A52638] transition-colors"
                >
                  Khôi phục mặc định
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Button Navigation Controls */}
        <div className="flex justify-between items-center mt-16 pb-40">
          <button
            onClick={decreaseNumber}
            disabled={index <= 0}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
              index <= 0
                ? "bg-gray-700 text-gray-400"
                : "bg-gradient-to-r from-[#8A2387] to-[#C72F44] text-white hover:shadow-[0_8px_30px_rgb(199,47,68,0.3)] hover:-translate-y-1"
            } shadow-lg`}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            Chương trước
          </button>

          <div className="text-white text-lg">
            <span className="px-4 py-2 bg-[#332B37] rounded-lg">
              Chương {index + 1}/{chapters.length}
            </span>
          </div>

          <button
            onClick={increaseNumber}
            disabled={index >= chapters.length - 1}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
              index >= chapters.length - 1
                ? "bg-gray-700 text-gray-400"
                : "bg-gradient-to-r from-[#C72F44] to-[#F12711] text-white hover:shadow-[0_8px_30px_rgb(199,47,68,0.3)] hover:-translate-y-1"
            } shadow-lg`}
          >
            Chương sau
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reading;
