import React from "react";
import card from "../../Assets/card3_web.png";

const WebCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mx-4 sm:mx-8 md:mx-16 lg:mx-30 bg-gradient-to-r from-[#c52002] from-[-11.02%] to-[#98039b] to-[118.24%] rounded-xl md:rounded-3xl px-5 sm:px-8 md:px-16 lg:px-30 py-6 md:py-10 my-8 md:my-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-10">
          Trải Nghiệm Đọc Truyện Tối Ưu Nhất
        </h1>
        <p className="text-white italic text-sm sm:text-base md:text-lg font-light">
          Ứng dụng của chúng tôi được thiết kế bởi những fan manga dành cho
          những fan manga. Từ giờ không còn quảng cáo, bạn có thể thưởng thức
          manga chất lượng HD với bản dịch chính thức. Và đó chưa phải là tất
          cả.
        </p>
      </div>
      <img
        src={card}
        alt="Ứng dụng đọc truyện"
        className="h-60 sm:h-80 md:h-100 mt-6 md:mt-0 flex-none md:flex-1 object-contain"
      />
    </div>
  );
};

export default WebCard;
