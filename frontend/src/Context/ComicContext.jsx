import bleach from "../Assets/bleach-cover.jpg";
import blackclover from "../Assets/blackclover-cover.jpg";
import bokunohero from "../Assets/bokunohero-cover.jpg";
import bluelock from "../Assets/bluelock-cover.jpg";
import haikyuu from "../Assets/haikyuu-cover.jpg";
import jujutsu from "../Assets/jujutsu-cover.jpg";
import kagurabachi from "../Assets/kagurabachi-cover.webp";
import kmy from "../Assets/kmy-cover.webp";
import nanatsu from "../Assets/nanatsu-cover.jpg";
import rezero from "../Assets/rezero-cover.jpg";
import sao from "../Assets/sao-cover.jpg";
import yakusoku from "../Assets/yakusoku-cover.jpg";
import tokyoghoul from "../Assets/tokyoghoul-cover.png";
import kaguya from "../Assets/kaguya-cover.webp";
import nodame from "../Assets/nodame-cover.webp";
import horror from "../Assets/horror-cover.jpg";
import { createContext } from "react";

export const ComicContext = createContext(null);

const ComicContextProvider = (props) => {
  const truyenDeXuat = [
    {
      id: 1,
      img: blackclover,
      name: "Black Clover",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 369,
      rate: 4.5,
    },
    {
      id: 2,
      img: jujutsu,
      name: "Jujutsu Kaisen",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 273,
      rate: 4.5,
    },
    {
      id: 3,
      img: nanatsu,
      name: "Nanatsu no Taizan",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 346,
      rate: 4.5,
    },
    {
      id: 4,
      img: bluelock,
      name: "Blue Lock",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 271,
      rate: 4.5,
    },
  ];

  const truyenMoi = [
    {
      id: 5,
      img: bleach,
      name: "Bleach",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 686,
      rate: 4.5,
    },
    {
      id: 6,
      img: bokunohero,
      name: "Boku no Hero Academia",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 431,
      rate: 4.5,
    },
    {
      id: 7,
      img: haikyuu,
      name: "Haikyuu!!",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 402,
      rate: 4.5,
    },
    {
      id: 8,
      img: sao,
      name: "Sword Art Online",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 11,
      rate: 4.5,
    },
    {
      id: 9,
      img: kagurabachi,
      name: "Kagurabachi",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 22,
      rate: 4.5,
    },
    {
      id: 10,
      img: rezero,
      name: "Re:Zero",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 32,
      rate: 4.5,
    },
    {
      id: 11,
      img: kmy,
      name: "Kimetsu no Yaiba",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 205,
      rate: 4.5,
    },
    {
      id: 12,
      img: yakusoku,
      name: "Yakusoku no Neverland",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 8,
      rate: 4.5,
    },
  ];

  const truyenKhamPha = [
    {
      id: 13,
      img: kmy,
      name: "Shounen",
      desc: "Hành động, phiêu lưu dành cho nam trẻ tuổi",
    },
    {
      id: 14,
      img: tokyoghoul,
      name: "Seinen",
      desc: "Dành cho nam trưởng thành, thường có nội dung sâu sắc hoặc bạo lực",
    },
    {
      id: 15,
      img: kaguya,
      name: "Shoujo",
      desc: "Tình cảm, lãng mạn dành cho nữ trẻ tuổi",
    },
    {
      id: 16,
      img: nodame,
      name: "Jonsei",
      desc: "Dành cho nữ trưởng thành, tập trung vào tâm lý, tình cảm người lớn",
    },
    {
      id: 17,
      img: rezero,
      name: "Isekai",
      desc: "Xuyên không, thế giới khác",
    },
    {
      id: 18,
      img: horror,
      name: "Horror",
      desc: "Kinh dị, tâm lý",
    },
    {
      id: 19,
      img: haikyuu,
      name: "Sports",
      desc: "Thể thao, thi đấu",
    },
  ];

  const allComics = [
    {
      id: 1,
      img: blackclover,
      name: "Black Clover",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 369,
      rate: 4.5,
    },
    {
      id: 2,
      img: jujutsu,
      name: "Jujutsu Kaisen",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 273,
      rate: 4.5,
    },
    {
      id: 3,
      img: nanatsu,
      name: "Nanatsu no Taizan",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 346,
      rate: 4.5,
    },
    {
      id: 4,
      img: bluelock,
      name: "Blue Lock",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 271,
      rate: 4.5,
    },
    {
      id: 5,
      img: bleach,
      name: "Bleach",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 686,
      rate: 4.5,
    },
    {
      id: 6,
      img: bokunohero,
      name: "Boku no Hero Academia",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 431,
      rate: 4.5,
    },
    {
      id: 7,
      img: haikyuu,
      name: "Haikyuu!!",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 402,
      rate: 4.5,
    },
    {
      id: 8,
      img: sao,
      name: "Sword Art Online",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 11,
      rate: 4.5,
    },
    {
      id: 9,
      img: kagurabachi,
      name: "Kagurabachi",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 22,
      rate: 4.5,
    },
    {
      id: 10,
      img: rezero,
      name: "Re:Zero",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 32,
      rate: 4.5,
    },
    {
      id: 11,
      img: kmy,
      name: "Kimetsu no Yaiba",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 205,
      rate: 4.5,
    },
    {
      id: 12,
      img: yakusoku,
      name: "Yakusoku no Neverland",
      author: "Kawahara Reki",
      desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
      status: "Đang hoạt động",
      chapter: 8,
      rate: 4.5,
    },
  ];

  const allchapters = [
    {
      id: 1,
      comic_id: 2,
      number: 1,
      title: "Người báo thù",
      content: `Editor: Nấm Mộc
  
  Bóng đêm như mực.
  
  Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.
  
  Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.
  
  Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.
  
  Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.
  
  Xoay người chuẩn bị đóng cửa.
  
  
  “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.
  
  TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.
  
  Lưng thoáng liền toát ra tầng mồ hôi lạnh.
  
  Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.
  
  Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.
  
  Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.
  
  Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)
  
  Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.
  
  Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.
  
  Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.
  
  Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.
  
  
  Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.
  
  Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.
  
  Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.
  
  “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.
  
  Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh
  
  “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”
  
  “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.
  
  Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)
  
  
  Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.
  
  Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.
  
  Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.
  
  Như vậy là cô đem thân thể chính mình kính dâng sao?
  
  Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?
  
  Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)
  
  Bất cứ giá nào! `,
      create_at: "20/02/2025",
    },
    {
      id: 3,
      comic_id: 2,
      number: 3,
      title: "Người báo thù",
      content: `Editor: Nấm Mộc

Bóng đêm như mực.

Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.

Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.

Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.

Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.

Xoay người chuẩn bị đóng cửa.


“Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.

TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.

Lưng thoáng liền toát ra tầng mồ hôi lạnh.

Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.

Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.

Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.

Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)

Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.

Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.

Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.

Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.


Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.

Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.

Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.

“Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.

Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh

“ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”

“Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.

Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)


Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.

Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.

Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.

Như vậy là cô đem thân thể chính mình kính dâng sao?

Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?

Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)

Bất cứ giá nào! `,
      create_at: "20/02/2025",
    },
    {
      id: 4,
      comic_id: 2,
      number: 4,
      title: "Người báo thù",
      content: `Editor: Nấm Mộc
  
  Bóng đêm như mực.
  
  Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.
  
  Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.
  
  Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.
  
  Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.
  
  Xoay người chuẩn bị đóng cửa.
  
  
  “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.
  
  TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.
  
  Lưng thoáng liền toát ra tầng mồ hôi lạnh.
  
  Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.
  
  Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.
  
  Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.
  
  Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)
  
  Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.
  
  Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.
  
  Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.
  
  Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.
  
  
  Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.
  
  Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.
  
  Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.
  
  “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.
  
  Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh
  
  “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”
  
  “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.
  
  Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)
  
  
  Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.
  
  Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.
  
  Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.
  
  Như vậy là cô đem thân thể chính mình kính dâng sao?
  
  Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?
  
  Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)
  
  Bất cứ giá nào! `,
      create_at: "20/02/2025",
    },
    {
      id: 5,
      comic_id: 2,
      number: 5,
      title: "Người báo thù",
      content: `Editor: Nấm Mộc
  
  Bóng đêm như mực.
  
  Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.
  
  Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.
  
  Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.
  
  Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.
  
  Xoay người chuẩn bị đóng cửa.
  
  
  “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.
  
  TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.
  
  Lưng thoáng liền toát ra tầng mồ hôi lạnh.
  
  Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.
  
  Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.
  
  Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.
  
  Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)
  
  Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.
  
  Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.
  
  Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.
  
  Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.
  
  
  Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.
  
  Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.
  
  Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.
  
  “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.
  
  Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh
  
  “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”
  
  “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.
  
  Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)
  
  
  Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.
  
  Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.
  
  Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.
  
  Như vậy là cô đem thân thể chính mình kính dâng sao?
  
  Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?
  
  Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)
  
  Bất cứ giá nào! `,
      create_at: "20/02/2025",
    },
  ];

  const allusers = [
    {
      id: 1,
      username: "Linh Nguyễn",
      loginname: "linh",
      password: "123",
      avatar: "",
      coverphoto: "",
      intro: "",
      create_at: "",
    },
    {
      id: 2,
      username: "Lại Nguyên",
      loginname: "nguyen",
      password: "123",
      avatar: "",
      coverphoto: "",
      intro: "",
      create_at: "",
    },
  ];

  const allcomments = [
    {
      id: 1,
      user_id: 1,
      comic_id: 2,
      content: "Hay ko",
      create_at: "12/2/2025",
    },
    {
      id: 2,
      user_id: 2,
      comic_id: 2,
      content: "Hay qua",
      create_at: "12/2/2025",
    },
  ];

  const contextValue = {
    allComics,
    truyenDeXuat,
    truyenMoi,
    truyenKhamPha,
    allchapters,
    allusers,
    allcomments,
  };

  return (
    <ComicContext.Provider value={contextValue}>
      {props.children}
    </ComicContext.Provider>
  );
};

export default ComicContextProvider;
