import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import userIcon from "../../Assets/icons8-user-100.png";

const Comment = () => {
  return (
    <div className="text-white mb-30">
      <div className="inline-flex mx-40 my-10 border-b-2 ">
        <FaCommentAlt className=" text-2xl" />
        <p className="text-xl ml-5 ">Bình luận (3)</p>
      </div>
      <div className="flex mx-40 justify-between items-start h-26 rounded-2xl border-1 p-2">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Bạn đang nghĩ gì?"
        />
        <button
          type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 place-self-end"
        >
          Đăng
        </button>
      </div>

      {/* user comment */}

      <div className="flex mx-40 my-10">
        <img src={userIcon} alt="" className="h-14 w-14 mr-5 cursor-pointer" />
        <div className="px-6 bg-[#e1e1e1] w-full rounded-xl">
          <h1 className=" text-[#C72F44] font-bold py-2">Nguyễn Linh</h1>
          <div className="h-[0.1px] bg-[#C72F44]"></div>
          <p className="text-black text-sm py-3">Hay ko</p>
          <p className="text-[#635d66] text-[12px] py-2">1 tháng trước</p>
        </div>
      </div>

      <div className="flex mx-40 my-10">
        <img src={userIcon} alt="" className="h-14 w-14 mr-5 cursor-pointer" />
        <div className="px-6 bg-[#e1e1e1] w-full rounded-xl">
          <h1 className=" text-[#C72F44] font-bold py-2">Nguyễn Linh</h1>
          <div className="h-[0.1px] bg-[#C72F44]"></div>
          <p className="text-black text-sm py-3">Hay ko</p>
          <p className="text-[#635d66] text-[12px] py-2">1 tháng trước</p>
        </div>
      </div>
      <div className="h-[1px] bg-[#C42F44] mx-25"></div>
    </div>
  );
};

export default Comment;
