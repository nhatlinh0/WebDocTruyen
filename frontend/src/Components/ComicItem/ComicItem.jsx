import React, { useContext } from "react";
import { MdStarRate } from "react-icons/md";
import { IoClose } from "react-icons/io5"; // Icon X đẹp hơn cho mobile
import { Link, useNavigate } from "react-router-dom";

const ComicItem = (props) => {
  const navigate = useNavigate();
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
    fetch(`https://newphim.online/api/increment-view/${props.id}`, {
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

  const handleComicClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    handleView();

    if (userId && token) {
      handleHistory();
    }

    // Chờ một chút để fetch requests có thời gian thực hiện
    setTimeout(() => {
      navigate(`/comic/${props.id}`);
    }, 100);
  };

  return (
    <div className="relative cursor-pointer hover:scale-105 group duration-300 mx-1 sm:mx-4">
      <div onClick={handleComicClick}>
        <img
          src={props.img}
          alt=""
          className="object-cover object-top w-full duration-300 aspect-[3/4] group-hover:brightness-75 rounded-md"
          loading="lazy"
        />
        <p className="text-base sm:text-xl font-bold text-white duration-300 group-hover:text-[#C42F44] line-clamp-1 mt-1 sm:mt-2">
          {props.name}
        </p>
        <p className="text-xs sm:text-base text-white font-light">
          Chương {props.chapter}
        </p>
        <div className="flex items-center mt-0.5 sm:mt-1">
          <MdStarRate className="text-yellow-300 mr-1 sm:mr-2 text-sm sm:text-base" />
          <p className="text-xs sm:text-base text-white font-bold">
            {props.rate ? props.rate.toFixed(1) : 0}/5
          </p>
        </div>
      </div>

      {(props.saved || props.history) && (
        <div
          className="absolute z-10 top-0 right-0 translate-x-1/3 -translate-y-1/3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs sm:text-sm hover:bg-[#C42F44] hover:text-white"
          onClick={props.saved ? handleDeleteSaved : handleDeleteHistory}
        >
          {/* Sử dụng X trên desktop và icon trên mobile */}
          <span className="hidden sm:inline">X</span>
          <IoClose className="sm:hidden" />
        </div>
      )}
    </div>
  );
};

export default ComicItem;
