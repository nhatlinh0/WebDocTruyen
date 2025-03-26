import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";

const CategoryList = () => {
  const { allCategory } = useContext(ComicContext);
  return (
    <div className="text-white">
      <h1 className="text-xl font-bold ml-27 my-12">Tất cả thể loại</h1>

      <div className="grid grid-cols-4 justify-items-center gap-y-10 mx-30 mb-60">
        {allCategory.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              id={item.id}
              img={item.img}
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
