import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";

const NewestComic = () => {
  const { allComics } = useContext(ComicContext);
  const newestComics = allComics.sort((a, b) => {
    return Date.parse(b.create_at) - Date.parse(a.create_at);
  });
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold ml-27 my-12">Truyện Mới nhất</h1>
      <p className=" text-xl mx-30 my-10">{newestComics.length} kết quả</p>
      <div className="grid grid-cols-4 justify-items-center gap-y-10 mx-30 mb-60">
        {newestComics.map((item, i) => (
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

export default NewestComic;
