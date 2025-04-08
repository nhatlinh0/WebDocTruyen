import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";

const PopularComic = () => {
  const { allComics } = useContext(ComicContext);
  const popularComics = allComics
    .sort((a, b) => {
      return b.rate - a.rate;
    })
    .slice(0, 16);
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold ml-27 my-12">Truyện Phổ biến</h1>
      <p className=" text-xl mx-30 my-10">{popularComics.length} kết quả</p>
      <div className="grid grid-cols-5 justify-items-center gap-y-10 mx-30 mb-60">
        {popularComics.map((item, i) => (
          <ComicItem
            key={i}
            id={item.id}
            img={"https://newphim.online/" + item.img}
            // img={item.img}
            name={item.name}
            chapter={item.chapter_number}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularComic;
