import React from "react";
import card from "../../Assets/card1_web.png";
//bg-gradient-to-r from-[#c52002] from-[-11.02%] to-[#98039b] to-[118.24%]
const Introduce = () => {
  return (
    <div className="flex justify-center items-center gap-10 mx-30 bg-gradient-to-l from-[#9420c6] from-[1.84%] to-[#2088c9] rounded-3xl px-30 py-10">
      <div className="flex-1">
        <h1 className="text-white text-3xl font-bold mb-10">
          Chào mừng bạn đến với <span className="text-[#C42F44]">READ3</span> -
          thế giới truyện đa dạng dành cho tất cả mọi người!
        </h1>
        <p className="text-white italic text-lg font-light">
          Chúng tôi cung cấp kho truyện phong phú với nhiều thể loại hấp dẫn
          như: Action, Adventure, Fantasy, Manhwa, Manhua, Manga, Ngôn Tình, Hài
          Hước, Kinh Dị, Trinh Thám,... được cập nhật liên tục
          <span className="text-[#C42F44]"> mỗi ngày.</span>
        </p>
      </div>
      <img src={card} alt="" className="h-100 flex-1" />
    </div>
  );
};

export default Introduce;
