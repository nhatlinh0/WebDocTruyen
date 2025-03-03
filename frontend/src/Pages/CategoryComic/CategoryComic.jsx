import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";

const CategoryComic = () => {
  const { allComics } = useContext(ComicContext);
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold ml-27 my-12">
        Thể loại: Truyện Shounen
      </h1>
      <p className=" text-xl mx-30 my-10">12 kết quả</p>
      <div className="grid grid-cols-4 justify-items-center gap-y-10 mx-30 mb-60">
        {allComics.map((item, i) => (
          <ComicItem
            key={i}
            id={item.id}
            img={item.img}
            name={item.name}
            chapter={item.chapter_number}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryComic;
