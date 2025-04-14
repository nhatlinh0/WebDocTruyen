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
    <div className="text-white px-4 sm:px-8 md:px-16 lg:px-20">
      {comics && (
        <>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold my-6 sm:my-8 md:my-12">
            Thể loại: Truyện {comics.name}
          </h1>

          <p className="text-base sm:text-lg md:text-xl my-4 sm:my-6 md:my-10">
            {comics.stories.length} kết quả
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 gap-y-6 sm:gap-y-8 md:gap-y-10 mb-20 sm:mb-40 md:mb-60">
            {comics.stories.map((item, i) => (
              <ComicItem
                key={i}
                id={item.id}
                img={"https://newphim.online/" + item.img}
                name={item.name}
                chapter={item.chapter_count}
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
