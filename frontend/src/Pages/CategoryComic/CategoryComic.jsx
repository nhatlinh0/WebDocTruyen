import React, { useContext, useEffect, useState } from "react";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";
import { useParams } from "react-router-dom";

const CategoryComic = () => {
  // const { allComics, allCategory } = useContext(ComicContext);
  const [comics, setComics] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch(`https://newphim.online/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setComics({ name: data.name, stories: data.stories }));
  }, [categoryId]);

  if (!comics)
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải danh sách truyện...</p>
        </div>
      </div>
    );
  // const { id } = useParams();
  // const category = allCategory.find((item) => item.id == id);
  // const totalComics = allComics.filter((item) => {
  //   return item.category.includes(category.id);
  // });

  return (
    <div className="text-white">
      {comics && (
        <>
          <h1 className="text-xl font-bold ml-27 my-12">
            Thể loại: Truyện {comics.name}
          </h1>
          <p className=" text-xl mx-30 my-10">
            {comics.stories.length} kết quả
          </p>
          <div className="grid grid-cols-4 justify-items-center gap-y-10 mx-30 mb-60">
            {comics.stories.map((item, i) => (
              <ComicItem
                key={i}
                id={item.id}
                img={"https://newphim.online/" + item.img}
                name={item.name}
                chapter={item.chapter_number}
                rate={item.rate}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryComic;
