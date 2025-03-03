import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import { Link } from "react-router-dom";

const ChapterList = (props) => {
  const { allChapters } = useContext(ComicContext);
  const chapters = allChapters.filter((item) => item.comic_id == props.comicId);

  return (
    <div className="bg-[#151018] rounded-3xl h-175 mx-25">
      <p className="text-[#C72F44] text-xl font-bold ml-20 py-10">
        Danh sách chương
      </p>
      <div className="grid grid-cols-2 text-white gap-y-6 place-items-start mx-25">
        {chapters &&
          chapters.map((item) => (
            <Link to={`/reading/${props.comicSlug}/${item.id}`}>
              <p key={item.id} onClick={() => window.scrollTo(0, 0)}>
                Chương {item.id}: {item.title}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChapterList;
