import React from "react";

import image from "../../Assets/sao-slider.jpg";

const Slider = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="h-160 w-full object-cover object-bottom"
        />
        <div className="flex flex-col bg-white/70 absolute top-1/2 -translate-y-1/2 left-[15%] h-75 w-md p-5 ">
          <div className="flex justify-between items-center">
            <h1 className="uppercase text-xl font-bold">Nổi bật</h1>
            <div className="flex justify-center items-center">
              <div className="h-2.5 w-2.5 rounded-full border-1 border-[#c42f44] m-1 cursor-pointer bg-[#c42f44]"></div>
              <div className="h-2.5 w-2.5 rounded-full border-1 border-[#c42f44] m-1 cursor-pointer"></div>
              <div className="h-2.5 w-2.5 rounded-full border-1 border-[#c42f44] m-1 cursor-pointer"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold my-5">Kagurabachi</h1>
          <p className="text-xs font-bold h-25">
            Chihiro, con trai của một thợ rèn huyền thoại, sống yên bình cho đến
            khi bi kịch ập đến, cướp đi tất cả. Cầm thanh kiếm cuối cùng của
            cha, cậu lao vào hành trình báo thù, đối mặt với những kẻ thù tàn ác
            và bí ẩn đằng sau thanh kiếm huyền thoại.
          </p>
          <div className="place-self-end flex justify-center items-center h-10 w-42 rounded-2xl bg-[#c42f44] cursor-pointer hover:bg-[#a12837] hover:scale-105 duration-300">
            <h1 className="text-xl font-bold uppercase text-white text-center">
              Đọc ngay
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
