import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";

const CategoryList = () => {
  const { allCategory } = useContext(ComicContext);
  return (
    <div className="text-white px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold my-6 sm:my-8 md:my-12">
        Tất cả thể loại
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 mb-16 sm:mb-24 md:mb-40 lg:mb-60">
        {allCategory.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              id={item.id}
              img={"https://newphim.online/" + item.img}
              name={item.name}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
