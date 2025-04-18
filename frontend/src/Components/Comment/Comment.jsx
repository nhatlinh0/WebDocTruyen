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
  const [userComment, setUserComment] = useState([]);
  const [userNames, setUserNames] = useState({});

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

  const handleComment = () => {
    if (!userId || !token) {
      navigate("/login");
    }
    fetch(`https://newphim.online/api/comments/truyen-chu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id: userId,
        content: comment,
        truyen_chu_id: comicId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComment("");
        updateComments();
      })
      .catch((error) => console.log("Server Errror"));
  };

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

  const updateComments = () => {
    fetch(`https://newphim.online/api/comments?truyen_chu_id=${comicId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUserComment(data);
        }
      });
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

  useEffect(() => {
    updateComments();
  }, [userId]);

  useEffect(() => {
    userComment.forEach((comment) => {
      fetch(`https://newphim.online/api/user/profile/${comment.user_id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setUserNames((prev) => ({
              ...prev,
              [comment.user_id]: data.name,
            }));
          }
        });
    });
  }, [userComment]);

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
  const formatDate = (currentDate) => {
    const date = new Date(currentDate);

    const formattedDate = date.toLocaleDateString("vi-VN"); // Output: 16/04/2025
    return formattedDate;
  };

  return (
    <div className="text-white mb-10 sm:mb-16 md:mb-20 lg:mb-30">
      {/* Nút báo lỗi */}
      <div className="flex justify-end mx-4 sm:mx-8 md:mx-16 lg:mx-40 mb-4 sm:mb-6">
        <button
          className="bg-gradient-to-r from-[#FF4D4D] to-[#D10000] hover:from-[#FF6B6B] hover:to-[#FF0000] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          onClick={() => setShowReportModal(true)}
        >
          <FaExclamationTriangle className="mr-1 sm:mr-2" /> Báo lỗi truyện
        </button>
      </div>
      {/* Modal báo lỗi */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-[#1D1620] rounded-xl p-4 sm:p-6 w-full max-w-[500px] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Báo lỗi
              </h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2 text-sm sm:text-base">
                Loại lỗi
              </label>
              <select
                className="w-full p-2 bg-[#332B37] border border-gray-700 rounded-md text-white text-sm sm:text-base"
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
              <label className="block text-white mb-2 text-sm sm:text-base">
                Mô tả chi tiết
              </label>
              <textarea
                className="w-full p-2 bg-[#332B37] border border-gray-700 rounded-md text-white min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                placeholder="Mô tả chi tiết về lỗi bạn gặp phải..."
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
              />
            </div>

            <button
              className="w-full py-2 bg-[#C72F44] text-white rounded-md hover:bg-[#A52638] transition-colors text-sm sm:text-base"
              onClick={handleError}
            >
              Gửi báo cáo
            </button>
          </div>
        </div>
      )}

      {/* Phần đánh giá sao */}
      <div className="flex flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-40 mb-6 sm:mb-8 bg-[#231B27] p-3 sm:p-5 rounded-lg sm:rounded-xl border border-gray-800 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 flex items-center">
            <FaStar className="text-[#FFD700] mr-2" />
            Đánh giá truyện
          </h2>
          <div className="px-2 sm:px-3 py-1 bg-[#332B37] rounded-lg text-xs sm:text-sm">
            Đánh giá trung bình:{" "}
            <span className="text-[#FFD700] font-bold">
              {rate ? rate.toFixed(1) : 0}
            </span>
            /5
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-2xl sm:text-3xl cursor-pointer transition-transform duration-200 ${
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

          <div className="flex-1 min-w-[110px] sm:min-w-[120px]">
            <span
              className={`text-base sm:text-lg font-medium ${
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
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 ${
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
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
            * Đánh giá của bạn sẽ góp phần giúp những người đọc khác tìm được
            truyện hay.
          </div>
        )}
      </div>

      {/* comment */}
      <div className="flex items-center mx-4 sm:mx-8 md:mx-16 lg:mx-40 mt-8 sm:mt-12 mb-4 sm:mb-6 pb-2 border-b border-gray-700">
        <FaCommentAlt className="text-xl sm:text-2xl text-[#C72F44]" />
        <p className="text-lg sm:text-xl ml-2 sm:ml-3 font-bold">
          Bình luận{" "}
          <span className="text-[#C72F44]">
            ({userComment ? userComment.length : 0})
          </span>
        </p>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-40 mb-6 sm:mb-8 bg-[#231B27] rounded-lg sm:rounded-xl border border-gray-700 shadow-md overflow-hidden">
        <div className="flex items-start p-3 sm:p-4">
          <img
            src={userIcon}
            alt="User"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-2 sm:mr-3 border-2 border-gray-700"
          />
          <div className="flex-1 flex flex-col">
            <textarea
              className="w-full p-2 sm:p-3 bg-[#332B37] border border-gray-600 rounded-lg text-white min-h-[60px] sm:min-h-[80px] focus:border-[#C72F44] focus:ring focus:ring-[#C72F44]/20 transition-all duration-200 outline-none resize-none text-sm sm:text-base"
              placeholder="Chia sẻ suy nghĩ của bạn về truyện này..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end mt-2 sm:mt-3">
              <button
                type="button"
                className={`px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-[#C72F44] to-[#9A0F29] text-white rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center ${
                  !comment.trim() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!comment.trim()}
                onClick={() => {
                  handleComment();
                }}
              >
                Đăng bình luận
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* user comment */}
      {userComment &&
        userComment.map((item) => (
          <div className="flex mx-4 sm:mx-8 md:mx-16 lg:mx-40 my-6 sm:my-10">
            <img
              src={userIcon}
              alt="User avatar"
              className="h-10 w-10 sm:h-14 sm:w-14 mr-3 sm:mr-5 cursor-pointer rounded-full"
            />
            <div className="px-4 sm:px-6 bg-[#e1e1e1] w-full rounded-lg sm:rounded-xl">
              <h1 className="text-[#C72F44] font-bold py-2 text-sm sm:text-base">
                {userNames[item.user_id] || "Ẩn danh"}
              </h1>

              <div className="h-[0.1px] bg-[#c6c4c4]"></div>
              <p className="text-black text-xs sm:text-sm py-2 sm:py-3">
                {item.content}
              </p>
              <p className="text-[#635d66] text-[10px] sm:text-[12px] py-1 sm:py-2">
                {item.created_at ? formatDate(item.created_at) : ""}
              </p>
            </div>
          </div>
        ))}

      <div className="h-[1px] bg-[#C42F44] mx-4 sm:mx-8 md:mx-16 lg:mx-25"></div>
    </div>
  );
};

export default Comment;
