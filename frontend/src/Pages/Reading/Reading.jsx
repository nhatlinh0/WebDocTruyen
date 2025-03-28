import React, { useContext, useState, useEffect, useMemo } from "react";
import { CiZoomOut } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

const Reading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ids = location.state?.chapterId;

  // const { comicSlug, chapterId } = useParams();
  const { comicSlug } = useParams();
  const { allComics } = useContext(ComicContext);

  const [comic, setComic] = useState();
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [index, setIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const foundComic = allComics.find((item) => item.slug == comicSlug);
    setComic(foundComic);
  }, [comicSlug, allComics]);

  // const chapters = allChapters.filter((item) => item.comic_id == comic.id);

  useEffect(() => {
    if (comic?.id) {
      fetch(`https://newphim.online/api/truyen-chu/${comic.id}/chaps`)
        .then((res) => res.json())
        .then((data) => {
          setChapters(data);
          if (data && data.length > 0) {
            if (ids) {
              var newIndex = data.findIndex((item) => item.id == ids);
              setChapter(data[newIndex]);
              setIndex(newIndex);
            } else {
              setChapter(data[index]);
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
  if (!chapter)
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải...</p>
        </div>
      </div>
    );
  if (!comic)
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải ...</p>
        </div>
      </div>
    );

  return (
    <div className="text-white bg-[#231B27]">
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
        </div>
      </div>

      <div className="mx-55 my-20">
        <p
          className="text-2xl leading-20 select-none whitespace-pre-wrap"
          style={{ fontSize: `${fontSize}px` }}
        >
          {chapter.content}
        </p>

        {/* Button Navigation Controls */}
        <div className="flex justify-between items-center mt-16 mb-10">
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
