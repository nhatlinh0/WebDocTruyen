import React, { useContext } from "react";
import { CiZoomOut } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

const Reading = () => {
  const { comicSlug } = useParams();
  const { allchapters, allComics } = useContext(ComicContext);
  const comic = allComics.find((item) => item.slug == comicSlug);
  const chapters = allchapters.filter((item) => item.comic_id == comic.id);

  return (
    <div className="text-white bg-[#231B27]">
      <h1 className="text-3xl font-bold text-[#C42F44] my-7 ml-20">
        {comic.name}
      </h1>

      <div className="flex bg-[#151018] p-2">
        <div className="flex justify-center items-center gap-4 flex-3">
          <CiZoomOut className="text-5xl cursor-pointer" />
          <p className="text-2xl">aA</p>
          <CiZoomIn className="text-5xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-4 flex-7">
          <div className="bg-[#C72F44] px-3 py-4 rounded-lg cursor-pointer">
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </div>
          <div className="flex justify-between items-center bg-[#332B37] h-full w-1/2 rounded-xl p-4">
            <p>Chương 1: Người báo thù</p>
            <div className="pl-2 border-l-2 cursor-pointer">
              <IoIosArrowDown className="text-2xl" />
            </div>
          </div>
          <div className="bg-[#C72F44] px-3 py-4 rounded-lg cursor-pointer">
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="mx-55 my-20">
        <p className="text-2xl leading-20">
          “Lục Nam, Tần Lâm, công ty đã quyết định, các ngươi bên trong một viên
          đem phụ trách chiếu cố kia kiện bề ngoài cực giống nhân loại giết chóc
          binh khí.” Đương Lục Nam lần nữa mở to mắt thời điểm. Một vị ăn mặc
          màu trắng áo dài, thoạt nhìn như là cao quản trung niên nữ nhân, đang
          đứng ở hắn trước mặt, khoa trương đến huy xuống tay thế, họa bánh
          nướng lớn. Nàng phía sau là thật lớn chứa đầy dinh dưỡng dịch đặc thù
          phong bế vật chứa. Một con ăn mặc màu đỏ vi chủ thể, màu trắng vì phụ
          váy liền áo, mang theo lang nhĩ màu đỏ mũ choàng, mang theo con lai
          đặc thù tóc vàng loli chính mang theo điềm tĩnh thần sắc ngủ say ở
          trong đó. Nhân thiết đồ “Ân, tuy rằng các ngươi khả năng đã từ các
          ngươi sau lưng cấp trên nơi đó biết được các ngươi kế tiếp yêu cầu đối
          mặt sự tình.” “Bất quá xuất phát từ bảo hiểm khởi kiến, ta còn là cho
          các ngươi giới thiệu một chút đi, đầu tiên, ta sau lưng nữ hài kia
          chính là ta trong miệng kia trân quý giết chóc binh khí.” “Hoặc là
          nói...... Công ty nhân công tạo thần kế hoạch thứ 4 kỳ sản vật ── Khăn
          Đỏ.” Trung niên nữ nhân lo chính mình đến tiếp tục lấy mang theo giới
          thiệu thương phẩm miệng lưỡi tiến hành nói. Nàng ngữ khí bên trong có
          chỉ là nùng liệt ngạo mạn cùng tự hào cảm. Căn bản là không có một
          chút ít đối vô nhân đạo thực nghiệm phản cảm, cùng với hãm hại tiểu nữ
          hài cảm thấy thẹn cảm. “Ta đây là xuyên qua đến ta vừa mới đánh trong
          trò chơi sao?” Lục Nam một bên nghe trung niên nữ nhân nói nói, một
          bên tiểu tâm đến đánh giá trước mắt hết thảy.“Lục Nam, Tần Lâm, công
          ty đã quyết định, các ngươi bên trong một viên đem phụ trách chiếu cố
          kia kiện bề ngoài cực giống nhân loại giết chóc binh khí.” Đương Lục
          Nam lần nữa mở to mắt thời điểm. Một vị ăn mặc màu trắng áo dài, thoạt
          nhìn như là cao quản trung niên nữ nhân, đang đứng ở hắn trước mặt,
          khoa trương đến huy xuống tay thế, họa bánh nướng lớn. Nàng phía sau
          là thật lớn chứa đầy dinh dưỡng dịch đặc thù phong bế vật chứa. Một
          con ăn mặc màu đỏ vi chủ thể, màu trắng vì phụ váy liền áo, mang theo
          lang nhĩ màu đỏ mũ choàng, mang theo con lai đặc thù tóc vàng loli
          chính mang theo điềm tĩnh thần sắc ngủ say ở trong đó. Nhân thiết đồ
          “Ân, tuy rằng các ngươi khả năng đã từ các ngươi sau lưng cấp trên nơi
          đó biết được các ngươi kế tiếp yêu cầu đối mặt sự tình.” “Bất quá xuất
          phát từ bảo hiểm khởi kiến, ta còn là cho các ngươi giới thiệu một
          chút đi, đầu tiên, ta sau lưng nữ hài kia chính là ta trong miệng kia
          trân quý giết chóc binh khí.” “Hoặc là nói...... Công ty nhân công tạo
          thần kế hoạch thứ 4 kỳ sản vật ── Khăn Đỏ.” Trung niên nữ nhân lo
          chính mình đến tiếp tục lấy mang theo giới thiệu thương phẩm miệng
          lưỡi tiến hành nói. Nàng ngữ khí bên trong có chỉ là nùng liệt ngạo
          mạn cùng tự hào cảm. Căn bản là không có một chút ít đối vô nhân đạo
          thực nghiệm phản cảm, cùng với hãm hại tiểu nữ hài cảm thấy thẹn cảm.
          “Ta đây là xuyên qua đến ta vừa mới đánh trong trò chơi sao?” Lục Nam
          một bên nghe trung niên nữ nhân nói nói, một bên tiểu tâm đến đánh giá
          trước mắt hết thảy.
        </p>
      </div>

      <div className="flex justify-center items-center gap-20">
        <div
          className="rounded-xl w-45 py-4 text-center cursor-pointer 
  bg-gradient-to-r from-blue-700 to-blue-900 shadow-md 
  hover:from-blue-800 hover:to-blue-950 transition duration-300"
        >
          Chương trước
        </div>

        <div
          className="rounded-xl w-45 py-4 text-center cursor-pointer 
  bg-gradient-to-r from-blue-700 to-blue-900 shadow-md 
  hover:from-blue-800 hover:to-blue-950 transition duration-300"
        >
          Chương sau
        </div>
      </div>
    </div>
  );
};

export default Reading;
