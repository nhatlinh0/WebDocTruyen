import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  return (
    <Link to={`/categories/${props.id}/`}>
      <div
        className="cursor-pointer relative group hover:scale-105 duration-300"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="cursor-pointer relative mx-1 sm:mx-4">
          <img
            src={props.img}
            alt={props.name}
            className="rounded-lg sm:rounded-2xl w-full aspect-[3/4] object-cover duration-300 group-hover:brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#c42f44] opacity-80 rounded-lg sm:rounded-2xl duration-300 group-hover:opacity-60"></div>
          <h1 className="absolute top-6 sm:top-14 left-4 sm:left-7 right-4 sm:right-7 text-white font-bold text-lg sm:text-2xl duration-300 group-hover:scale-105 line-clamp-2 sm:line-clamp-none">
            {props.name}
          </h1>
          <p className="absolute bottom-6 sm:bottom-10 left-4 sm:left-7 right-4 sm:right-7 text-xs sm:text-sm text-white duration-300 group-hover:translate-y-[-3px] line-clamp-3">
            {props.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
