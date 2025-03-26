import React from "react";
import card from "../../Assets/card3_web.png";

const WebCard = () => {
  return (
    <div className="flex justify-center items-center gap-10 mx-30 bg-gradient-to-r from-[#c52002] from-[-11.02%] to-[#98039b] to-[118.24%] rounded-3xl px-30 py-10 my-20">
      <div className="flex-1">
        <h1 className="text-white text-3xl font-bold mb-10">
          Trải Nghiệm Đọc Truyện Tối Ưu Nhất
        </h1>
        <p className="text-white italic text-lg font-light">
          Ứng dụng của chúng tôi được thiết kế bởi những fan manga dành cho
          những fan manga. Từ giờ không còn quảng cáo, bạn có thể thưởng thức
          manga chất lượng HD với bản dịch chính thức. Và đó chưa phải là tất
          cả.
        </p>
      </div>
      <img src={card} alt="" className="h-100 flex-1" />
    </div>
  );
};

export default WebCard;
