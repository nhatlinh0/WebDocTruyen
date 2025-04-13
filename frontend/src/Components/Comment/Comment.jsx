import React, { useState, useEffect } from "react";
import { FaCommentAlt, FaStar, FaExclamationTriangle } from "react-icons/fa";
import userIcon from "../../Assets/icons8-user-100.png";
import { useNavigate } from "react-router-dom";

const Comment = ({ comicId }) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  // State chỉ để hiển thị giao diện, bạn sẽ xử lý logic sau
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState("");
  const [reportDescription, setReportDescription] = useState("");

  const handleRate = () => {
    if (!userId || !token) {
      navigate("/login");
    }
    fetch(`https://newphim.online/api/rates/truyen_chu/${comicId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user_id: userId, rating: selectedRating }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Server Errror"));
  };

  // const handleComment = () => {
  //   if (!userId || !token) {
  //     navigate("/login");
  //   }
  //   fetch(`https://newphim.online/api/history/${userId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ truyen_chu_id: comicId }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log("Server Errror"));
  // };

  const handleError = () => {
    if (!userId || !token) {
      navigate("/login");
    }
    fetch(`https://newphim.online/api/errors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        truyen_id: comicId,
        user_id: userId,
        error_type: reportType,
        error_description: reportDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReportType("");
        setReportDescription("");
        setShowReportModal(false);
      })
      .catch((error) => console.log("Server Errror"));
  };

  useEffect(() => {
    fetch(`https://newphim.online/api/rates/truyen_chu/${userId}/${comicId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSelectedRating(Math.trunc(data.at(-1).rating));
        }
      });
  }, [userId]);

  return (
    <div className="text-white mb-30">
      <button
        className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm flex items-center mx-40 mb-10"
        onClick={() => setShowReportModal(true)}
      >
        <FaExclamationTriangle className="mr-1" /> Báo lỗi
      </button>
      {/* Modal báo lỗi */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-[#1D1620] rounded-xl p-6 w-[500px] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Báo lỗi</h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Loại lỗi</label>
              <select
                className="w-full p-2 bg-[#332B37] border border-gray-700 rounded-md text-white"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="">-- Chọn loại lỗi --</option>
                <option value="content">Lỗi nội dung</option>
                <option value="image">Lỗi hình ảnh</option>
                <option value="chapter">Thiếu chương</option>
                <option value="other">Lỗi khác</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Mô tả chi tiết</label>
              <textarea
                className="w-full p-2 bg-[#332B37] border border-gray-700 rounded-md text-white min-h-[120px]"
                placeholder="Mô tả chi tiết về lỗi bạn gặp phải..."
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
              />
            </div>

            <button
              className="w-full py-2 bg-[#C72F44] text-white rounded-md hover:bg-[#A52638] transition-colors"
              onClick={handleError}
            >
              Gửi báo cáo
            </button>
          </div>
        </div>
      )}
      {/* Phần đánh giá sao */}
      <div className="flex flex-col mx-40 mb-6">
        <p className="text-xl mb-3 underline text-[#FFD700]">
          Đánh giá truyện:
        </p>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className="text-3xl cursor-pointer mr-2"
              color={
                (hoverRating || selectedRating) >= star ? "#FFD700" : "#e4e5e9"
              }
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setSelectedRating(star)}
            />
          ))}
          <span className="ml-4 text-xl">
            {selectedRating > 0 ? `${selectedRating}/5` : "Chưa đánh giá"}
          </span>
        </div>

        <button
          type="button"
          class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 my-4 w-30"
          onClick={handleRate}
        >
          Đánh giá
        </button>
      </div>
      <div className="inline-flex mx-40 my-10 border-b-2 ">
        <FaCommentAlt className=" text-2xl" />
        <p className="text-xl ml-5 ">Bình luận (2)</p>
      </div>
      <div className="flex mx-40 justify-between items-start h-26 rounded-2xl border-1 p-2">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Bạn đang nghĩ gì?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              // handleComment();
            }
          }}
        />

        <button
          type="button"
          class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 me-2 mb-2 place-self-end"
        >
          Đăng
        </button>
      </div>
      {/* user comment */}
      <div className="flex mx-40 my-10">
        <img src={userIcon} alt="" className="h-14 w-14 mr-5 cursor-pointer" />
        <div className="px-6 bg-[#e1e1e1] w-full rounded-xl">
          <h1 className=" text-[#C72F44] font-bold py-2">Nguyễn Linh</h1>

          <div className="h-[0.1px] bg-[#c6c4c4]"></div>
          <p className="text-black text-sm py-3">Hay ko</p>
          <p className="text-[#635d66] text-[12px] py-2">1 tháng trước</p>
        </div>
      </div>
      <div className="flex mx-40 my-10">
        <img src={userIcon} alt="" className="h-14 w-14 mr-5 cursor-pointer" />
        <div className="px-6 bg-[#e1e1e1] w-full rounded-xl">
          <h1 className=" text-[#C72F44] font-bold py-2">Lại Nguyên</h1>

          <div className="h-[0.1px] bg-[#c6c4c4]"></div>
          <p className="text-black text-sm py-3">Hay vl</p>
          <p className="text-[#635d66] text-[12px] py-2">1 tháng trước</p>
        </div>
      </div>
      <div className="h-[1px] bg-[#C42F44] mx-25"></div>
    </div>
  );
};

export default Comment;
