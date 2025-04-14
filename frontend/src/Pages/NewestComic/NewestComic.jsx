import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";

const NewestComic = () => {
  const { truyenMoi } = useContext(ComicContext);

  return (
    <div className="text-white px-4 sm:px-8 md:px-10 lg:px-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold my-6 md:my-8 lg:my-12">
        Truyện Mới nhất
      </h1>
      <p className=" text-base sm:text-lg md:text-xl my-4 md:my-6 lg:my-10">
        {truyenMoi.length} kết quả
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-y-10 mb-20 sm:mb-40 md:mb-60">
        {truyenMoi.map((item, i) => (
          <ComicItem
            key={i}
            id={item.id}
            // img={item.img}
            img={"https://newphim.online/" + item.img}
            name={item.name}
            chapter={item.chapter_count}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default NewestComic;
