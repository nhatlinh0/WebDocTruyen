import React from "react";
import sao from "../../Assets/sao-slider.jpg";
import { MdOutlineStar } from "react-icons/md";

const ComicDisplay = ({ comic }) => {
  return (
    <div className=" rounded-3xl bg-[#151018] mx-25">
      <div className="relative h-88 w-full">
        <img
          src={sao}
          alt=""
          className="absolute inset-0 object-cover w-full h-88 rounded-tl-3xl rounded-tr-3xl brightness-30"
        />
        <img
          src={comic.img}
          alt=""
          className="absolute top-1/2 left-20 -translate-y-1/2 w-57 h-70 object-cover"
        />
      </div>

      <div className="mx-8">
        <div className="text-white flex items-center justify-between my-8">
          <p className="text-base font-bold">
            Trạng thái: <span className="text-[#FBFB6A]">{comic.status}</span>
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="px-6 py-1 rounded-xl font-bold cursor-pointer bg-[#4B474E]">
              Action
            </div>
            <div className="px-6 py-1 rounded-xl font-bold cursor-pointer bg-[#4B474E]">
              Fantasy
            </div>
            <div className="px-6 py-1 rounded-xl font-bold cursor-pointer bg-[#4B474E]">
              Romance
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-white mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold my-4">{comic.name}</h1>
            <p className="text-base font-bold my-4">Tác giả: {comic.author}</p>
            <div className="flex items-center gap-1 my-4">
              <p className="text-base font-bold">Đánh giá: {comic.rate}/5</p>
              <MdOutlineStar className="text-xl text-[#FFFF0C]" />
            </div>
            <div className="flex items-center gap-2 my-4">
              <div className="rounded-xl w-45 py-4 bg-[#C72F44] text-center uppercase text-base font-bold cursor-pointer">
                Đọc ngay
              </div>
              <div className="rounded-xl w-45 py-4 text-[#C72F44] border-2 border-[#C72F44] bg-white text-center uppercase text-base font-bold cursor-pointer">
                Lưu truyện
              </div>
            </div>
          </div>
          <div className="bg-[#231B27] rounded-xl p-3 flex-1">
            <p className="font-bold py-2">Nội dung</p>
            <p className="text-sm">
              Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều
              khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò
              chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng
              hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art
              Online - game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính
              thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái
              bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDisplay;
