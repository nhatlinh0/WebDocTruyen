import React, { useState, useEffect } from "react";
import { FaCommentAlt, FaStar, FaExclamationTriangle } from "react-icons/fa";
import userIcon from "../../Assets/icons8-user-100.png";
import { useNavigate } from "react-router-dom";

const Comment = ({ comicId, rate }) => {
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

  const getRatingText = (rating) => {
    switch (rating) {
      case 1:
        return "Rất kém";
      case 2:
        return "Kém";
      case 3:
        return "Bình thường";
      case 4:
        return "Hay";
      case 5:
        return "Rất hay";
      default:
        return "";
    }
  };

  return (
    <div className="text-white mb-30">
      <div className="flex justify-end mx-40 mb-6">
        <button
          className="bg-gradient-to-r from-[#FF4D4D] to-[#D10000] hover:from-[#FF6B6B] hover:to-[#FF0000] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          onClick={() => setShowReportModal(true)}
        >
          <FaExclamationTriangle className="mr-2" /> Báo lỗi truyện
        </button>
      </div>
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
      <div className="flex flex-col mx-40 mb-8 bg-[#231B27] p-5 rounded-xl border border-gray-800 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-xl font-bold mb-2 sm:mb-0 flex items-center">
            <FaStar className="text-[#FFD700] mr-2" />
            Đánh giá truyện
          </h2>
          <div className="px-3 py-1 bg-[#332B37] rounded-lg text-sm">
            Đánh giá trung bình:{" "}
            <span className="text-[#FFD700] font-bold">
              {rate ? rate.toFixed(1) : 0}
            </span>
            /5
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-3xl cursor-pointer transition-transform duration-200 ${
                  (hoverRating || selectedRating) >= star
                    ? "hover:scale-110"
                    : "hover:scale-110 opacity-75"
                }`}
                color={
                  (hoverRating || selectedRating) >= star
                    ? "#FFD700"
                    : "#4e4b54"
                }
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setSelectedRating(star)}
              />
            ))}
          </div>

          <div className="flex-1 min-w-[120px]">
            <span
              className={`text-lg font-medium ${
                selectedRating > 0 ? "text-[#FFD700]" : "text-gray-400"
              }`}
            >
              {selectedRating > 0
                ? `${selectedRating}/5 - ${getRatingText(selectedRating)}`
                : "Chưa đánh giá"}
            </span>
          </div>

          <button
            type="button"
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              selectedRating > 0
                ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] transform hover:-translate-y-0.5"
                : "bg-[#332B37] text-gray-400 cursor-not-allowed"
            }`}
            onClick={handleRate}
            disabled={selectedRating === 0}
          >
            {selectedRating === 0 ? "Chọn đánh giá" : "Gửi đánh giá"}
          </button>
        </div>

        {selectedRating > 0 && (
          <div className="mt-4 text-sm text-gray-400">
            * Đánh giá của bạn sẽ góp phần giúp những người đọc khác tìm được
            truyện hay.
          </div>
        )}
      </div>

      {/* comment */}
      <div className="flex items-center mx-40 mt-12 mb-6 pb-2 border-b border-gray-700">
        <FaCommentAlt className="text-2xl text-[#C72F44]" />
        <p className="text-xl ml-3 font-bold">
          Bình luận <span className="text-[#C72F44]">(2)</span>
        </p>
      </div>

      <div className="mx-40 mb-8 bg-[#231B27] rounded-xl border border-gray-700 shadow-md overflow-hidden">
        <div className="flex items-start p-4">
          <img
            src={userIcon}
            alt="User"
            className="h-10 w-10 rounded-full mr-3 border-2 border-gray-700"
          />
          <div className="flex-1 flex flex-col">
            <textarea
              className="w-full p-3 bg-[#332B37] border border-gray-600 rounded-lg text-white min-h-[80px] focus:border-[#C72F44] focus:ring focus:ring-[#C72F44]/20 transition-all duration-200 outline-none resize-none"
              placeholder="Chia sẻ suy nghĩ của bạn về truyện này..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end mt-3">
              <button
                type="button"
                className={`px-5 py-2 bg-gradient-to-r from-[#C72F44] to-[#9A0F29] text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center ${
                  !comment.trim() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!comment.trim()}
                onClick={() => {
                  /* handleComment() */
                }}
              >
                Đăng bình luận
              </button>
            </div>
          </div>
        </div>
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
