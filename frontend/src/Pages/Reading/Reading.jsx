import React, { useContext, useState, useEffect } from "react";
import { CiZoomOut } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

const Reading = () => {
  const navigate = useNavigate();
  const { comicSlug, chapterId } = useParams();
  const { allChapters, allComics } = useContext(ComicContext);
  const comic = allComics.find((item) => item.slug == comicSlug);
  const chapters = allChapters.filter((item) => item.comic_id == comic.id);

  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    const foundChapter = chapters.find((item) => item.id == chapterId);
    setChapter(foundChapter);
  }, [chapterId]);

  const increaseNumber = () => {
    const nextChapter = parseInt(chapterId) + 1;
    navigate(`/reading/${comicSlug}/${nextChapter}`);
  };

  const decreaseNumber = () => {
    const prevChapter = Math.max(1, parseInt(chapterId) - 1);
    navigate(`/reading/${comicSlug}/${prevChapter}`);
  };

  if (!chapter) return <p>Loading...</p>;

  return (
    <div className="text-white bg-[#231B27]">
      <h1 class="text-3xl font-bold my-7 ml-20 bg-gradient-to-r from-red-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
        {comic.name}
      </h1>
      <div className="flex bg-[#151018] p-2">
        <div className="flex justify-center items-center gap-4 flex-3">
          <CiZoomOut className="text-5xl cursor-pointer" />
          <p className="text-2xl">aA</p>
          <CiZoomIn className="text-5xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-4 flex-7">
          <div
            className="bg-[#C72F44] px-3 py-4 rounded-lg cursor-pointer"
            onClick={decreaseNumber}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </div>
          <div className="flex justify-between items-center bg-[#332B37] h-full w-1/2 rounded-xl p-4">
            <p>
              Chương {chapter.id}: {chapter.title}
            </p>
            <div className="pl-2 border-l-2 cursor-pointer">
              <IoIosArrowDown className="text-2xl" />
            </div>
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
        <p className="text-2xl leading-20 select-none whitespace-pre-wrap">
          {chapter.content}
        </p>
      </div>

      <div className="flex justify-center items-center gap-20">
        <div
          className="rounded-xl w-45 py-4 text-center cursor-pointer 
  bg-gradient-to-r from-blue-700 to-blue-900 shadow-md 
  hover:from-blue-800 hover:to-blue-950 transition duration-300"
          onClick={() => {
            window.scrollTo(0, 0), decreaseNumber();
          }}
        >
          Chương trước
        </div>

        <div
          className="rounded-xl w-45 py-4 text-center cursor-pointer 
  bg-gradient-to-r from-blue-700 to-blue-900 shadow-md 
  hover:from-blue-800 hover:to-blue-950 transition duration-300"
          onClick={() => {
            window.scrollTo(0, 0), increaseNumber();
          }}
        >
          Chương sau
        </div>
      </div>
    </div>
  );
};

export default Reading;
