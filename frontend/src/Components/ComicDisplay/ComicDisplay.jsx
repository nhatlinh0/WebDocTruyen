import React, { useContext, useState, useEffect } from "react";
import background2 from "../../Assets/background2.jpg";
import { FaEye } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";
import toast, { Toaster } from "react-hot-toast";

const ComicDisplay = ({ comic }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const { allCategory } = useContext(ComicContext);
  const [firstIndex, setFirstIndex] = useState("Đọc Ngay");
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

  useEffect(() => {
    fetch(`https://newphim.online/api/truyen-chu/${comic.id}/chaps`)
      .then((res) => res.json())
      .then((data) => {
        setFirstIndex(data[0].id);
      })
      .catch((error) => {
        console.error("Error fetching chapters:", error);
      });
  }, [comic.id]);

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
      .then((data) => toast.success(data.message))
      .catch((error) => console.log("Server Errror"));
  };

  return (
    <div className="rounded-lg bg-[#151018] mx-4 sm:mx-8 md:mx-16 lg:mx-20 ring-1 ring-blue-900">
      <div className="relative h-40 sm:h-60 md:h-88 w-full">
        <img
          src={background2}
          alt=""
          className="absolute inset-0 object-cover w-full h-full rounded-t-lg sm:rounded-t-xl md:rounded-t-3xl brightness-30"
        />
        <img
          src={`https://newphim.online/${comic.img}`}
          alt=""
          className="absolute top-1/2 left-1/2 sm:left-20 -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2 w-28 h-36 sm:w-36 sm:h-48 md:w-57 md:h-70 object-cover shadow-lg"
        />
      </div>

      <div className="px-4 sm:px-6 md:px-8">
        <div className="text-white flex flex-col sm:flex-row items-start sm:items-center justify-between my-4 sm:my-6 md:my-8">
          <p className="text-sm sm:text-base font-bold mb-3 sm:mb-0">
            Trạng thái:{" "}
            <span className="text-[#FBFB6A] font-medium">{comic.status}</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {category.map((item) => (
              <Link key={item.id} to={`/categories/${item.id}`}>
                <div
                  className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium cursor-pointer bg-[#2A262E] hover:bg-[#3A363E] border border-[#4B474E] transition-colors duration-200"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between text-white mb-6 sm:mb-8 gap-6">
          {/* Cột thông tin */}
          <div className="w-full md:w-2/5">
            <h1 className="text-xl sm:text-2xl font-bold my-3 sm:my-4">
              {comic.name}
            </h1>
            <p className="text-sm sm:text-base font-bold my-2 sm:my-4">
              Tác giả: <span className="font-light">{comic.author}</span>
            </p>
            <div className="flex items-center gap-1 my-2 sm:my-4">
              <p className="text-sm sm:text-base font-bold">
                Đánh giá:{" "}
                <span className="font-medium">
                  {comic.rate ? comic.rate.toFixed(1) : 0}/5
                </span>
              </p>
              <MdOutlineStar className="text-lg sm:text-xl text-[#FFFF0C]" />
            </div>
            <div className="flex items-center gap-1 my-2 sm:my-4">
              <p className="text-sm sm:text-base font-bold">
                Lượt xem: <span className="font-medium">{view}</span>
              </p>
              <FaEye className="text-sm sm:text-base pl-1" />
            </div>

            {/* Nút đọc và lưu truyện */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 my-4 sm:my-6">
              {firstIndex && (
                <Link
                  to={`/reading/${comic.id}/${firstIndex}`}
                  className="w-full sm:w-auto"
                >
                  <div
                    className="rounded-lg sm:rounded-xl w-full sm:w-45 py-2.5 sm:py-4 bg-gradient-to-r from-[#C72F44] to-[#9A0F29] text-center uppercase text-sm sm:text-base font-bold cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Đọc ngay
                  </div>
                </Link>
              )}
              <div
                className={`rounded-lg sm:rounded-xl w-full sm:w-45 py-2.5 sm:py-4
                  
                     "text-[#C72F44] border-2 border-[#C72F44] bg-white"
                } text-center uppercase text-sm sm:text-base font-bold cursor-pointer hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200`}
                onClick={handleSaved}
              >
                {"Lưu truyện"}
              </div>
            </div>
          </div>

          {/* Cột mô tả */}
          <div className="bg-[#231B27] rounded-lg sm:rounded-xl p-3 sm:p-4 w-full md:w-3/5">
            <p className="font-bold text-base sm:text-lg py-1 sm:py-2">
              Nội dung
            </p>
            <p className="text-xs sm:text-sm leading-relaxed">
              {comic.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDisplay;
