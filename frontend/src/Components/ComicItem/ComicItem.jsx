import React, { useContext } from "react";
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

  const handleView = () => {
    fetch(`https://newphim.online/api/increment-view/58`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Server Errror"));
  };

  const handleDeleteSaved = () => {
    if (!userId || !token) {
      return;
    }
    fetch(`https://newphim.online/api/favorite-stories/${userId}/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (props.onRemove) {
          props.onRemove(props.id); // Gọi callback để cập nhật state ở component cha
        }
      })
      .catch((error) => console.log("Server Errror"));
  };

  const handleDeleteHistory = () => {
    if (!userId || !token) {
      return;
    }
    fetch(`https://newphim.online/api/history/${userId}/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (props.onRemove) {
          props.onRemove(props.id); // Gọi callback để cập nhật state ở component cha
        }
      })
      .catch((error) => console.log("Server Errror"));
  };
  return (
    <div className="relative cursor-pointer hover:scale-105 group duration-300 mx-4">
      <Link
        to={`/comic/${props.id}`}
        onClick={() => {
          window.scrollTo(0, 0);

          handleView();
          if (userId && token) {
            handleHistory();
          }
        }}
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
          <p className="text-white font-bold">
            {props.rate ? props.rate.toFixed(1) : 0}/5
          </p>
        </div>
      </Link>
      {(props.saved || props.history) && (
        <div
          className="absolute z-100 top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full  bg-white text-center text-sm hover:bg-[#C42F44] hover:text-white"
          onClick={props.saved ? handleDeleteSaved : handleDeleteHistory}
        >
          X
        </div>
      )}
    </div>
  );
};

export default ComicItem;
