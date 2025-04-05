import React, { useContext } from "react";
import sao from "../../Assets/sao-slider.jpg";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

const ComicDisplay = ({ comic }) => {
  const userId = localStorage.getItem("userId");

  const { allCategory } = useContext(ComicContext);
  const category = allCategory.filter((item) => {
    return comic.category == item.id;
  });

  const handleSaved = () => {
    fetch(`https://newphim.online/api/favorite-stories/${comic.id}`, {
      method: POST,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Server Errror"));
  };

  return (
    <div className=" rounded-3xl bg-[#151018] mx-25">
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
        <div className="text-white flex items-center justify-between my-8">
          <p className="text-base font-bold">
            Trạng thái: <span className="text-[#FBFB6A]">{comic.status}</span>
          </p>
          <div className="flex justify-center items-center gap-2">
            {/* {category.map((item) => (
              <Link to={`/category/${item.id}`}>
                <div
                  className="px-6 py-1 rounded-xl font-bold cursor-pointer bg-[#4B474E]"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.name}
                </div>
              </Link>
            ))} */}

            <Link to={`/categories/${comic.category}`}>
              <div
                className="px-6 py-1 rounded-xl font-bold cursor-pointer bg-[#4B474E]"
                onClick={() => window.scrollTo(0, 0)}
              >
                {category[0]?.name}
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between text-white mb-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold my-4">{comic.name}</h1>
            <p className="text-base font-bold my-4">Tác giả: {comic.author}</p>
            <div className="flex items-center gap-1 my-4">
              <p className="text-base font-bold">Đánh giá: {comic.rate}/5</p>
              <MdOutlineStar className="text-xl text-[#FFFF0C]" />
            </div>
            <div className="flex items-center gap-2 my-4">
              <Link to={`/reading/${comic.slug}`}>
                <div
                  className="rounded-xl w-45 py-4 bg-[#C72F44] text-center uppercase text-base font-bold cursor-pointer"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Đọc ngay
                </div>
              </Link>
              <div
                className="rounded-xl w-45 py-4 text-[#C72F44] border-2 border-[#C72F44] bg-white text-center uppercase text-base font-bold cursor-pointer"
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
