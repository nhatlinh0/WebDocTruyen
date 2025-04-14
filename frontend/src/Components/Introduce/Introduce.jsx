import React from "react";
import card from "../../Assets/card1_web.png";

const Introduce = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mx-4 sm:mx-8 md:mx-16 lg:mx-30 bg-gradient-to-l from-[#9420c6] from-[1.84%] to-[#2088c9] rounded-xl md:rounded-3xl px-5 sm:px-8 md:px-16 lg:px-30 py-6 md:py-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-10">
          Chào mừng bạn đến với <span className="text-[#C42F44]">READ3</span> -
          thế giới truyện đa dạng dành cho tất cả mọi người!
        </h1>
        <p className="text-white italic text-sm sm:text-base md:text-lg font-light">
          Chúng tôi cung cấp kho truyện phong phú với nhiều thể loại hấp dẫn
          như: Action, Adventure, Fantasy, Manhwa, Manhua, Manga, Ngôn Tình, Hài
          Hước, Kinh Dị, Trinh Thám,... được cập nhật liên tục
          <span className="text-[#C42F44]"> mỗi ngày.</span>
        </p>
      </div>
      <img
        src={card}
        alt="Thư viện truyện"
        className="h-60 sm:h-80 md:h-100 lg:h-120 mt-5 md:mt-0 flex-none md:flex-1 object-contain"
      />
    </div>
  );
};

export default Introduce;
