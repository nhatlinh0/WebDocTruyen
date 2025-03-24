import React from "react";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const ComicItem = (props) => {
  return (
    <Link to={`/comic/${props.id}`}>
      <div
        className="cursor-pointer hover:scale-105 group duration-300"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={props.img}
          alt=""
          className="object-cover object-top w-[285px] h-[350px] duration-300 group-hover:brightness-75 "
        />
        <p className="text-xl font-bold text-white duration-300 group-hover:text-[#C42F44] ">
          {props.name}
        </p>
        <p className="text-white font-light">Chương {props.chapter}</p>
        <div className="flex items-center">
          <MdStarRate className="text-yellow-300 mr-2" />
          <p className="text-white font-bold">{props.rate}/5</p>
        </div>
      </div>
    </Link>
  );
};

export default ComicItem;
