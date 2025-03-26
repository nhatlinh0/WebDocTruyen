import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";
import { useParams } from "react-router-dom";

const CategoryComic = () => {
  const { allComics, allCategory } = useContext(ComicContext);
  const { id } = useParams();
  const category = allCategory.find((item) => item.id == id);
  const totalComics = allComics.filter((item) => {
    return item.category.includes(category.id);
  });

  return (
    <div className="text-white">
      <h1 className="text-xl font-bold ml-27 my-12">
        Thể loại: Truyện {category.name}
      </h1>
      <p className=" text-xl mx-30 my-10">{totalComics.length} kết quả</p>
      <div className="grid grid-cols-4 justify-items-center gap-y-10 mx-30 mb-60">
        {totalComics.map((item, i) => (
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
