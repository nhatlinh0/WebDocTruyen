import React from "react";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const ComicItem = (props) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const handleHistory = () => {
    if (!userId || !token) {
      return;
    }
    fetch(`https://newphim.online/api/history/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ truyen_chu_id: props.id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Server Errror"));
  };

  return (
    <Link to={`/comic/${props.id}`} onClick={handleHistory}>
      <div
        className="cursor-pointer hover:scale-105 group duration-300 mx-4"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={props.img}
          alt=""
          className="object-cover object-top w-100 duration-300  aspect-[3/4] group-hover:brightness-75"
        />
        <p className="text-xl font-bold text-white duration-300 group-hover:text-[#C42F44] line-clamp-1">
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
