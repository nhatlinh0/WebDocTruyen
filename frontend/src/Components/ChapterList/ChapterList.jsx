import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";

const ChapterList = (props) => {
  const { allchapters } = useContext(ComicContext);
  const chapters = allchapters.filter((item) => item.comic_id == props.comicId);
  console.log(chapters);
  return (
    <div className="bg-[#151018] rounded-3xl h-175 mx-25">
      <p className="text-[#C72F44] text-xl font-bold ml-20 py-10">
        Danh sách chương
      </p>
      <div className="grid grid-cols-2 text-white gap-y-6 place-items-start mx-25">
        {chapters &&
          chapters.map((item) => (
            <a key={item.id} href="">
              Chương {item.number}:{item.title}
            </a>
          ))}
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
        <a href="">Chương 1: Người báo thù</a>
      </div>
    </div>
  );
};

export default ChapterList;
