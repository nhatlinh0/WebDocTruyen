import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import userIcon from "../../Assets/icons8-user-100.png";

const Comment = () => {
  return (
    <div className="text-white">
      <div className="flex mx-25 my-10">
        <FaCommentAlt className="text-[#A411D6] text-3xl" />
        <p className="text-xl ml-5">Bình luận (3)</p>
      </div>
      <div className="flex mx-40 justify-between items-start h-26 rounded-2xl border-1 p-2">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Bạn đang nghĩ gì?"
        />
        <div className="rounded-xl w-26 py-2 bg-[#C72F44] text-center text-base font-bold place-self-end cursor-pointer">
          Đăng
        </div>
      </div>

      {/* user comment */}

      <div className="flex mx-40 my-10">
        <img src={userIcon} alt="" className="h-14 w-14 mr-5 cursor-pointer" />
        <div className=" flex flex-col justify-center gap-3 pl-6 h-30 bg-[#e1e1e1] w-full rounded-xl">
          <h1 className="text-[18px] text-[#C72F44] font-bold">Nguyễn Linh</h1>
          <p className="text-black">Hay ko</p>
          <p className="text-[#635d66] text-sm">1 tháng trước</p>
        </div>
      </div>

      <div className="flex mx-40 my-10">
        <img src={userIcon} alt="" className="h-14 w-14 mr-5 cursor-pointer" />
        <div className=" flex flex-col justify-center gap-3 pl-6 h-30 bg-[#e1e1e1] w-full rounded-xl">
          <h1 className="text-[18px] text-[#C72F44] font-bold">Lại Nguyên</h1>
          <p className="text-black">Hay </p>
          <p className="text-[#635d66] text-sm">1 tháng trước</p>
        </div>
      </div>
      <div className="h-[1px] bg-[#C42F44] mx-25"></div>
    </div>
  );
};

export default Comment;
