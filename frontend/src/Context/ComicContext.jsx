import userIcon from "../Assets/avatar-icon.jpg";
import usercover from "../Assets/user-cover.jpg";
import image1 from "../Assets/sao-slider.jpg";
import image2 from "../Assets/kagurabachi-slider.jpg";
import image3 from "../Assets/sao-slider.jpg";
import { createContext, useEffect, useState } from "react";

export const ComicContext = createContext(null);

const ComicContextProvider = (props) => {
  // const truyenDeXuat = [
  //   {
  //     id: 1,
  //     img: blackclover,
  //     name: "Black Clover",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 369,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 2,
  //     img: jujutsu,
  //     name: "Jujutsu Kaisen",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 273,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 3,
  //     img: nanatsu,
  //     name: "Nanatsu no Taizan",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 346,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 4,
  //     img: bluelock,
  //     name: "Blue Lock",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 271,
  //     rate: 4.5,
  //   },
  // ];

  // const truyenMoi = [
  //   {
  //     id: 5,
  //     img: bleach,
  //     name: "Bleach",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 686,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 6,
  //     img: bokunohero,
  //     name: "Boku no Hero Academia",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 431,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 7,
  //     img: haikyuu,
  //     name: "Haikyuu!!",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 402,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 8,
  //     img: sao,
  //     name: "Sword Art Online",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 11,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 9,
  //     img: kagurabachi,
  //     name: "Kagurabachi",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 22,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 10,
  //     img: rezero,
  //     name: "Re:Zero",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 32,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 11,
  //     img: kmy,
  //     name: "Kimetsu no Yaiba",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 205,
  //     rate: 4.5,
  //   },
  //   {
  //     id: 12,
  //     img: yakusoku,
  //     name: "Yakusoku no Neverland",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 8,
  //     rate: 4.5,
  //   },
  // ];

  const [truyenMoi, setTruyenMoi] = useState([]);

  useEffect(() => {
    fetch(`https://newphim.online/api/truyen-chu-moi-nhat`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTruyenMoi(data);
      });
  }, []);

  // const allComicsLocal = [
  //   {
  //     id: 1,
  //     img: blackclover,
  //     name: "Black Clover",
  //     slug: "black-clover",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 369,
  //     category: [1, 2, 3],
  //     rate: 4.5,
  //     create_at: "12-5-2015",
  //   },
  //   {
  //     id: 2,
  //     img: jujutsu,
  //     name: "Jujutsu Kaisen",
  //     slug: "jujutsu-kaisen",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 273,
  //     category: [1, 2, 3],
  //     rate: 4.1,
  //     create_at: "12-5-2016",
  //   },
  //   {
  //     id: 3,
  //     img: nanatsu,
  //     name: "Nanatsu no Taizan",
  //     slug: "nanatsu-no-taizan",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 346,
  //     category: [4, 5, 6],
  //     rate: 4.6,
  //     create_at: "12-5-2017",
  //   },
  //   {
  //     id: 4,
  //     img: bluelock,
  //     name: "Blue Lock",
  //     slug: "blue-lock",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 271,
  //     category: [7, 8, 9],
  //     rate: 4.2,
  //     create_at: "12-5-2018",
  //   },
  //   {
  //     id: 5,
  //     img: bleach,
  //     name: "Bleach",
  //     slug: "bleach",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 686,
  //     category: [7, 8, 9],
  //     rate: 4.8,
  //     create_at: "12-5-2019",
  //   },
  //   {
  //     id: 6,
  //     img: bokunohero,
  //     name: "Boku no Hero Academia",
  //     slug: "boku-no-hero-academia",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 431,
  //     category: [10, 11, 12],
  //     rate: 4.0,
  //     create_at: "12-5-2020",
  //   },
  //   {
  //     id: 7,
  //     img: haikyuu,
  //     name: "Haikyuu!!",
  //     slug: "haikyuu",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 402,
  //     category: [10, 11, 12],
  //     rate: 4.3,
  //     create_at: "12-5-2020",
  //   },
  //   {
  //     id: 8,
  //     img: sao,
  //     name: "Sword Art Online",
  //     slug: "sword-art-online",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 11,
  //     category: [13, 14, 15],
  //     rate: 4.4,
  //     create_at: "12-5-2021",
  //   },
  //   {
  //     id: 9,
  //     img: kagurabachi,
  //     name: "Kagurabachi",
  //     slug: "kagurabachi",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 22,
  //     category: [13, 14, 15],
  //     rate: 4.5,
  //     create_at: "12-5-2022",
  //   },
  //   {
  //     id: 10,
  //     img: rezero,
  //     name: "Re:Zero",
  //     slug: "rezero",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 32,
  //     category: [16, 17, 18],
  //     rate: 4.7,
  //     create_at: "12-5-2023",
  //   },
  //   {
  //     id: 11,
  //     img: kmy,
  //     name: "Kimetsu no Yaiba",
  //     slug: "kimetsu-no-yaiba",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 205,
  //     category: [5, 10, 12],
  //     rate: 4.1,
  //     create_at: "12-5-2024",
  //   },
  //   {
  //     id: 12,
  //     img: yakusoku,
  //     name: "Yakusoku no Neverland",
  //     slug: "yakusoku-no-neverland",
  //     author: "Kawahara Reki",
  //     desc: "Năm 2022, công ty điện tử ARGUS sáng chế ra thiết bị có thể điều khiển hoạt động của não bộ mang tên NERvGear, giúp cho các trò chơi thực tế ảo trở thành hiện thực. Nhân vật chính Kirito cùng hơn 9500 người chơi khác được “may mắn” trải nghiệm Sword Art Online – game VRMMORPG đầu tiên trên thế giới ngay từ khi nó chính thức hoạt động, nhưng lại không thể ngờ rằng nó cũng chính là cái bẫy chết người sẽ khiến cuộc sống của họ hoàn toàn thay đổi. Hệ thống “Đăng xuất” trong game biến mất, tất cả sẽ bị nhốt trong SAO và không thể thoát ra trừ phi có người hoàn tất 100 tầng của tòa thành khổng lồ Aincrad. Ngoài ra, chỉ một lần ",
  //     status: "Đang hoạt động",
  //     chapter_number: 8,
  //     category: [1, 18, 19],
  //     rate: 4.6,
  //     create_at: "12-5-2025",
  //   },
  // ];

  const [allComics, setAllComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllComics = async () => {
      try {
        setIsLoading(true);

        const totalPages = 4;

        const fetchPromises = Array.from({ length: totalPages }, (_, i) =>
          fetch(`https://newphim.online/api/truyen-chu?page=${i + 1}`).then(
            (res) => {
              if (!res.ok)
                throw new Error(`Không thể lấy dữ liệu trang ${i + 1}`);
              return res.json();
            }
          )
        );

        const results = await Promise.all(fetchPromises);

        const combinedData = results.flat();
        setAllComics(combinedData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllComics();
  }, []);

  //   const allChapters = [
  //     {
  //       id: 1,
  //       comic_id: 2,
  //       title: "Người báo thù",
  //       content:
  //         'Cung điện vàng son lộng lẫy, ánh mặt trời xuyên qua tấm rèm tơ tằm thêu những đường vân uốn lượn, phủ lên gương mặt dịu dàng của thiếu niên trong thủy tạ.\nThiếu niên mặc trường bào nhạt màu hình hạc, ngồi trước án thư, làn da trắng tựa sứ, lông mày đẹp như tranh, sợi mi dày bao bọc một đôi mắt đen sáng ngời, nhẹ nhàng rũ xuống tạo thành hai mảnh trăng lưỡi liềm trên sống mũi cao thẳng. Mái tóc đen mượt một nửa được buộc lại bằng ngọc đới, một nửa phủ lên bộ áo gấm mềm mại, xõa từ cổ xuống thắt lưng.\nTư thế ưu nhã, dung mạo vô song.\nBên ngoài thủy tạ vang lên tiếng nói cười giòn giã, nhưng người nọ dường như không để ý, ánh mắt vẫn chăm chú nhìn vào quyển thư tịch trên tay.\n"Điện hạ."\nMưu sĩ Công Tôn Dương và Phạm Chu lần lượt bước vào thủy tạ.\nCông Tôn Dương cười nói: "Hôm nay là tiệc Lưu Thương, danh sĩ các nước đều muốn tranh nhau khoe tài, điện hạ không muốn đi xem một chút sao?"\nNgười ngồi sau bức rèm là Thái tử Giang quốc',
  //       create_at: "20/02/2025",
  //     },
  //     {
  //       id: 2,
  //       comic_id: 2,
  //       title: "Người báo thù",
  //       content: `Editor: Nấm Mộc

  //   Bóng đêm như mực.

  //   Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.

  //   Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.

  //   Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.

  //   Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.

  //   Xoay người chuẩn bị đóng cửa.

  //   “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.

  //   TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.

  //   Lưng thoáng liền toát ra tầng mồ hôi lạnh.

  //   Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.

  //   Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.

  //   Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.

  //   Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)

  //   Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.

  //   Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.

  //   Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.

  //   Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.

  //   Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.

  //   Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.

  //   Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.

  //   “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.

  //   Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh

  //   “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”

  //   “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.

  //   Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)

  //   Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.

  //   Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.

  //   Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.

  //   Như vậy là cô đem thân thể chính mình kính dâng sao?

  //   Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?

  //   Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)

  //   Bất cứ giá nào! `,
  //       create_at: "20/02/2025",
  //     },
  //     {
  //       id: 3,
  //       comic_id: 2,
  //       title: "Người báo thù",
  //       content: `Editor: Nấm Mộc

  // Bóng đêm như mực.

  // Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.

  // Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.

  // Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.

  // Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.

  // Xoay người chuẩn bị đóng cửa.

  // “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.

  // TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.

  // Lưng thoáng liền toát ra tầng mồ hôi lạnh.

  // Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.

  // Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.

  // Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.

  // Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)

  // Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.

  // Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.

  // Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.

  // Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.

  // Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.

  // Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.

  // Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.

  // “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.

  // Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh

  // “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”

  // “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.

  // Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)

  // Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.

  // Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.

  // Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.

  // Như vậy là cô đem thân thể chính mình kính dâng sao?

  // Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?

  // Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)

  // Bất cứ giá nào! `,
  //       create_at: "20/02/2025",
  //     },
  //     {
  //       id: 4,
  //       comic_id: 2,
  //       title: "Người báo thù",
  //       content: `Editor: Nấm Mộc

  //   Bóng đêm như mực.

  //   Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.

  //   Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.

  //   Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.

  //   Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.

  //   Xoay người chuẩn bị đóng cửa.

  //   “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.

  //   TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.

  //   Lưng thoáng liền toát ra tầng mồ hôi lạnh.

  //   Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.

  //   Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.

  //   Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.

  //   Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)

  //   Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.

  //   Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.

  //   Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.

  //   Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.

  //   Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.

  //   Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.

  //   Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.

  //   “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.

  //   Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh

  //   “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”

  //   “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.

  //   Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)

  //   Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.

  //   Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.

  //   Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.

  //   Như vậy là cô đem thân thể chính mình kính dâng sao?

  //   Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?

  //   Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)

  //   Bất cứ giá nào! `,
  //       create_at: "20/02/2025",
  //     },
  //     {
  //       id: 5,
  //       comic_id: 2,
  //       title: "Người báo thù",
  //       content: `Editor: Nấm Mộc

  //   Bóng đêm như mực.

  //   Khách sạn Wies, lửa từ ngọn đèn sáng rực rỡ.

  //   Hành lang dài tĩnh mịch, nhìn không thấy điểm dừng, ánh sáng đèn mờ nhạt dọi xuống dưới, đem hành lang dài bao phủ càng thêm thần bí đẹp đẽ mà quý giá.

  //   Một thân hình nhỏ nhắn xinh xinh, rón ra rón rén đi đến trước“phòng tổng thống”.

  //   Cửa phòng khép hờ, Trang Nại Nại theo khe cửa đi vào bên trong xem xét, cả căn phòng thập phần yên tĩnh, chỉ có trong phòng tắm truyền đến tiếng nước dồn dập chảy, vì thế Trang Nại Nại nhẹ nhàng đẩy cửa ra, đi vào trong phòng.

  //   Xoay người chuẩn bị đóng cửa.

  //   “Đem tài liệu đặt trên bàn là được rồi”. Đột nhiên, thanh âm mị hoặc trong trẻo nhưng lạnh lùng theo phòng tắm truyền ra.

  //   TimTrang Nại Nại “lộp bộp” một chút, thiếu chút nữa theo miệng nhảy ra.

  //   Lưng thoáng liền toát ra tầng mồ hôi lạnh.

  //   Cô quay đầu nhìn cũng không thấy người đi ra, lúc này mới nặng nề thở phào nhẹ nhõm, đóng cửa lại.

  //   Trong phòng cũng không mở đèn, chỉ còn lại ánh sáng yếu ớt ở ngọn đèn đầu giường, cùng cửa sổ rộng rãi sát đất, các ngọn đèn ở thành Bắc Kinh dần tắt đi, tạo nên cảnh tượng tươi sáng rõ nét đối lập.

  //   Chẳng qua, Trang Nại Nại cũng không rãnh rỗi nhìn ngắm cảnh sắc.

  //   Cô đứng trước giường lớn, rất nhanh lấy ra một cái áo ngủ gợi cảm rồi mặc vào, hít sâu một hơi, chui vào trong chăn, bày ra một tư thế dụ-hoặc (dụ dỗ-mê hoặc)

  //   Đúng lúc này, tiếng nước trong phòng tắm dừng lại, ngay sau đó cửa bị mở ra, một thân ảnh cao lớn từ bên trong phòng đi tới.

  //   Mang theo một cỗ hơi nước nhàn nhạt bay ra, còn có hơi thở tôn quý bẩm sinh, làm cho Trang Nại Nại hô hấp cảm thấy rất khó khăn.

  //   Người đàn ông mặc một chiếc áo tắm, cầm khăn mặt chà lau tóc, bỗng nhiên phát giác được trong phòng có người, động tác ngừng lại, mãnh liệt ngẩng đầu lên.

  //   Đôi mắt hẹp dài của anh bỗng híp lại, lóe ra tia sương giá rợn người, hai con ngươi sắc bén trực tiếp tập trung trên người Trang Nại Nại.

  //   Hôm nay,Trang Nại Nại mang đồ trang sức trang nhã, ánh sáng lờ mờ dọi trên khuôn mặt trắng sứ nhỏ nhắn, đôi mắt đen như mực, môi như anh đào, ngũ quan khéo léo tinh xảo, đẹp không sao tả xiết.

  //   Cô mặc cái áo ngủ màu hồng nhạt, làm nổi bật cả thân thể như muốn buông thả nụ hoa khiến cho người ta muốn ngắt hái.

  //   Thế nhưng, người đàn ông kia cũng không bị cái cảnh sắc hấp dẫn này dụ hoặc, ngược lại là ánh mắt trầm xuống, trong con ngươi dấy lên mùi nguy hiểm, đe dọa đến cái người đang nằm trên giường.

  //   “Tại sao cô lại ở đây?” Môi mỏng của anh khẽ mở, tiếng nói mang theo một loại hoa lệ khuynh hướng cảm xúc, mị hoặc lòng người nhưng lại lạnh như băng hàn.

  //   Trang Nại Nại căng thẳng nuốt một ngụm nước bọt, cố gắng làm cho bản thân bình tĩnh lại, khuôn mặt xinh đẹp gạt bỏ nụ cười rực rỡ, tròng mắt chuyển động cực kỳ nhanh

  //   “ Cái kia, đêm vẫn còn dài, tôi tới làm cho anh ấm-giường ah...”

  //   “Ấm-giường?” mày người đàn ông kia nhăn lại, thanh âm lạnh như băng, một câu hỏi, nói ra là một mùi khắc nghiệt.

  //   Trang Nại Nại cảm thấy một đợt cảm giác bị áp bách mãnh liệt, nhất thời hô hấp lại trở nên khẩn trương lên, cô kiên trì mở miệng: “Đúng, đúng rồi tôi là hôn thê của anh, chúng ta ở cùng nhau, thiên kinh địa nghĩa*...” (* là điều hiển nhiên)

  //   Lúc này, Trang Nại Nại nháy mắt nói, một đợt hơi thở nam tính tràn ngập xâm lược, bỗng nhiên tới gần, người đàn ông thân hình cao lớn vô cùng áp bức,ngũ quan gần ngay trước mắt lại tinh xảo như người điêu khắc.

  //   Trang Nại Nại một chút cử động cũng không dám, mắt to như nước trong veo nhìn Tư Chính Đình, trái tim đập vô cùng dữ dội.

  //   Chăn mền trên người bị xốc lên, cảm giác trong không khí mát lạnh xuyên thấu vào thân thể.

  //   Như vậy là cô đem thân thể chính mình kính dâng sao?

  //   Bất quá, qua đêm nay, anh hẳn là sẽ thực hiện hôn ước, cùng mình kết hôn...sao?

  //   Nghĩ đến đây, Trang Nại Nại lập tức nhắm mắt lại, bày ra một bộ dáng thấy chết không sờn. ( coi thường cái chết)

  //   Bất cứ giá nào! `,
  //       create_at: "20/02/2025",
  //     },
  //   ];

  const allUsers = [
    {
      id: 1,
      email: "linh",
      password: "123",
      fullname: "Linh Nguyễn",
      intro: "Hello",
      avatar: userIcon,
      coverphoto: usercover,
      province: "AG",
    },
    {
      id: 2,
      email: "nguyen",
      password: "123",
      fullname: "Lại Nguyên",
      intro: "Hello",
      avatar: userIcon,
      coverphoto: usercover,
      province: "LD",
    },
  ];

  const allComments = [
    {
      id: 1,
      user_id: 1,
      content: "Hay ko",
      comic_id: 11,
      create_at: "2025/2/13",
    },
    {
      id: 2,
      user_id: 2,
      content: "Hay qua",
      comic_id: 11,
      create_at: "2025/2/13",
    },
  ];

  const savedComics = [
    {
      user_id: 1,
      comic_id: 11,
    },
    {
      user_id: 1,
      comic_id: 12,
    },
    {
      user_id: 1,
      comic_id: 13,
    },
    {
      user_id: 2,
      comic_id: 14,
    },
  ];

  const historyComics = [
    {
      user_id: 1,
      comic_id: 14,
    },
    {
      user_id: 1,
      comic_id: 15,
    },
    {
      user_id: 1,
      comic_id: 16,
    },
    {
      user_id: 2,
      comic_id: 18,
    },
  ];

  // const allCategory = [
  //   {
  //     id: 1,
  //     img: kmy,
  //     name: "Shounen",
  //     desc: "Hành động, phiêu lưu dành cho nam trẻ tuổi",
  //   },
  //   {
  //     id: 2,
  //     img: tokyoghoul,
  //     name: "Seinen",
  //     desc: "Dành cho nam trưởng thành, thường có nội dung sâu sắc hoặc bạo lực",
  //   },
  //   {
  //     id: 3,
  //     img: kaguya,
  //     name: "Shoujo",
  //     desc: "Tình cảm, lãng mạn dành cho nữ trẻ tuổi",
  //   },
  //   {
  //     id: 4,
  //     img: nodame,
  //     name: "Jonsei",
  //     desc: "Dành cho nữ trưởng thành, tập trung vào tâm lý, tình cảm người lớn",
  //   },
  //   {
  //     id: 5,
  //     img: rezero,
  //     name: "Isekai",
  //     desc: "Xuyên không, thế giới khác",
  //   },
  //   {
  //     id: 6,
  //     img: horror,
  //     name: "Horror",
  //     desc: "Kinh dị, tâm lý",
  //   },
  //   {
  //     id: 7,
  //     img: haikyuu,
  //     name: "Sports",
  //     desc: "Thể thao, thi đấu",
  //   },
  //   {
  //     id: 8,
  //     img: rezero,
  //     name: "Fantasy",
  //     desc: "Thế giới phép thuật, sinh vật huyền bí, và những cuộc phiêu lưu kỳ ảo",
  //   },
  //   {
  //     id: 9,
  //     img: rezero,
  //     name: "Science Fiction",
  //     desc: "Khoa học viễn tưởng, công nghệ tương lai, du hành vũ trụ",
  //   },
  //   {
  //     id: 10,
  //     img: rezero,
  //     name: "Romance",
  //     desc: "Tình yêu, cảm xúc, câu chuyện lãng mạn",
  //   },
  //   {
  //     id: 11,
  //     img: rezero,
  //     name: "Slice of Life",
  //     desc: "Đời thường, phản ánh cuộc sống hàng ngày của nhân vật",
  //   },
  //   {
  //     id: 12,
  //     img: rezero,
  //     name: "Comedy",
  //     desc: "Hài hước, gây cười bằng tình huống hoặc lời thoại dí dỏm",
  //   },
  //   {
  //     id: 13,
  //     img: rezero,
  //     name: "Supernatural",
  //     desc: "Siêu nhiên, ma quái, các thế lực thần bí",
  //   },
  //   {
  //     id: 14,
  //     img: rezero,
  //     name: "Reverse Harem",
  //     desc: "Nhân vật nữ chính được nhiều nam nhân theo đuổi",
  //   },
  //   {
  //     id: 15,
  //     img: rezero,
  //     name: "Mecha",
  //     desc: "Người máy khổng lồ, công nghệ chiến đấu tiên tiến",
  //   },
  //   {
  //     id: 16,
  //     img: rezero,
  //     name: "Military",
  //     desc: "Quân đội, chiến tranh, chiến lược quân sự",
  //   },
  //   {
  //     id: 17,
  //     img: rezero,
  //     name: "Historical",
  //     desc: "Lấy bối cảnh lịch sử, các nhân vật có thật hoặc hư cấu",
  //   },
  //   {
  //     id: 18,
  //     img: rezero,
  //     name: "Game",
  //     desc: "Thế giới trò chơi, nhân vật có thể bị kẹt trong game",
  //   },
  //   {
  //     id: 19,
  //     img: rezero,
  //     name: "Harem",
  //     desc: "Nhân vật chính được nhiều người yêu thích hoặc theo đuổi",
  //   },
  // ];

  const [allCategory, setallCategory] = useState([]);

  useEffect(() => {
    fetch(`https://newphim.online/api/categories`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setallCategory(data));
  }, []);

  const sliderComic = [
    {
      id: 1,
      image: image1,
      title: "Đao kiếm thần vực",
      category: "Nổi bật",
      description:
        "Chihiro, con trai của một thợ rèn huyền thoại, sống yên bình cho đến khi bi kịch ập đến, cướp đi tất cả. Cầm thanh kiếm cuối cùng của cha, cậu lao vào hành trình báo thù, đối mặt với những kẻ thù tàn ác và bí ẩn đằng sau thanh kiếm huyền thoại.",
      comicId: 11,
    },
    {
      id: 2,
      image: image2,
      title: "Thợ săn hắc ám",
      category: "Nổi bật",
      description:
        "Trong một thế giới nơi bóng tối ngự trị, Abel - thợ săn quái vật trẻ tuổi với khả năng nhìn thấu bóng đêm, chiến đấu chống lại các sinh vật hắc ám đe dọa loài người. Khi anh phát hiện ra một âm mưu đe dọa cả thế giới, Abel phải đối mặt với quá khứ bí ẩn của chính mình.",
      comicId: 12,
    },
    {
      id: 3,
      image: image3,
      title: "Linh hồn chiến binh",
      category: "Nổi bật",
      description:
        "Sau khi hy sinh trong trận chiến cuối cùng, linh hồn của chiến binh Haruki bị mắc kẹt giữa cõi âm và dương. Để tìm đường trở về, anh phải giúp những người còn sống vượt qua nguy hiểm và học cách sử dụng sức mạnh mới của mình trong một thế giới đầy rẫy những kẻ thù vô hình.",
      comicId: 13,
    },
  ];

  const contextValue = {
    allComics,
    truyenMoi,
    allCategory,
    sliderComic,
    isLoading,
    allUsers,
    allComments,
    savedComics,
    historyComics,
  };

  return (
    <ComicContext.Provider value={contextValue}>
      {props.children}
    </ComicContext.Provider>
  );
};

export default ComicContextProvider;
