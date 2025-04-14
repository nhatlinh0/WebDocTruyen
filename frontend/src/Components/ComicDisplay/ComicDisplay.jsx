import React, { useContext, useState, useEffect } from "react";
import sao from "../../Assets/sao-slider.jpg";
import { FaEye } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

const ComicDisplay = ({ comic }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const { allCategory } = useContext(ComicContext);
  const [view, setView] = useState(0);

  const category = allCategory.filter((item) => {
    return comic.category.some((cate) => cate == item.id);
  });

  useEffect(() => {
    fetch(`https://newphim.online/api/view-count/${comic.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setView(data.view_count);
        }
      });
  }, [userId]);

  const handleSaved = () => {
    if (!userId || !token) {
      navigate("/login");
    }
    fetch(`https://newphim.online/api/favorite-stories/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ truyen_chu_id: comic.id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Server Errror"));
  };

  return (
    <div className=" rounded-lg bg-[#151018] mx-40 ring-1 ring-blue-900">
      <div className="relative h-88 w-full">
        <img
          src={sao}
          alt=""
          className="absolute inset-0 object-cover w-full h-88 rounded-tl-3xl rounded-tr-3xl brightness-30"
        />
        <img
          src={`https://newphim.online/${comic.img}`}
          alt=""
          className="absolute top-1/2 left-20 -translate-y-1/2 w-57 h-70 object-cover"
        />
      </div>

      <div className="mx-8">
        <div className="text-white flex flex-wrap items-center justify-between my-8">
          <p className="text-base font-bold mb-3 md:mb-0">
            Trạng thái:{" "}
            <span className="text-[#FBFB6A] font-medium">{comic.status}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {category.map((item, index) => (
              <Link key={item.id} to={`/categories/${item.id}`}>
                <div
                  className="px-4 py-1.5 rounded-lg text-sm font-medium cursor-pointer bg-[#2A262E] hover:bg-[#3A363E] border border-[#4B474E] transition-colors duration-200"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-white mb-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold my-4">{comic.name}</h1>
            <p className="text-base font-bold my-4">
              Tác giả: <span className="font-light">{comic.author}</span>
            </p>
            <div className="flex items-center gap-1 my-4">
              <p className="text-base font-bold">
                Đánh giá:{" "}
                <span className="font-medium">
                  {comic.rate ? comic.rate.toFixed(1) : 0}/5
                </span>
              </p>
              <MdOutlineStar className="text-xl text-[#FFFF0C]" />
            </div>
            <div className="flex items-center gap-1 my-4">
              <p className="text-base font-bold">
                Lượt xem: <span className="font-medium">{view}</span>
              </p>
              <FaEye className="pl-1" />
            </div>

            <div className="flex items-center gap-2 my-4">
              <Link to={`/reading/${comic.slug}`}>
                <div
                  className="rounded-xl w-45 py-4 bg-gradient-to-r from-[#C72F44] to-[#9A0F29] text-center uppercase text-base font-bold cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Đọc ngay
                </div>
              </Link>
              <div
                className="rounded-xl w-45 py-4 text-[#C72F44] border-2 border-[#C72F44] bg-white text-center uppercase text-base font-bold cursor-pointer hover:bg-[#C72F44]/10 transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={handleSaved}
              >
                Lưu truyện
              </div>
            </div>
          </div>
          <div className="bg-[#231B27] rounded-xl p-4 mb-4 flex-1">
            <p className="font-bold py-2">Nội dung</p>
            <p className="text-sm">{comic.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDisplay;
