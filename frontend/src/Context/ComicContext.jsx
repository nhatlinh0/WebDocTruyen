import userIcon from "../Assets/avatar-icon.jpg";
import usercover from "../Assets/user-cover.jpg";
// import image1 from "../Assets/sao-slider.jpg";
// import image2 from "../Assets/kagurabachi-slider.jpg";
// import image3 from "../Assets/sao-slider.jpg";
import image1 from "../Assets/background1.webp";
import image2 from "../Assets/background2.jpg";
import image3 from "../Assets/background3.webp";
import image4 from "../Assets/background4.jpg";
import image5 from "../Assets/background5.jpg";

import { createContext, useEffect, useState } from "react";

export const ComicContext = createContext(null);

const ComicContextProvider = (props) => {
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

  const [allComics, setAllComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllComics = async () => {
      try {
        setIsLoading(true);

        const totalPages = 10;

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
      image: image5,
      title: "1913 tân quân phiệt",
      category: "Nổi bật",
      description:
        "Dân quốc + thần y + hệ thống + trọng sinh + Bến Thượng Hải Thân hoạn bệnh nan y trung y học viện học sinh Diệp Trường Thanh trọng sinh đến dân quốc năm đầu Bến Thượng Hải một cái tương đồng tên họ y quán học đồ trên người.",
      comicId: 34152,
    },
    {
      id: 2,
      image: image4,
      title: "Bắc Đẩu Đế Tôn",
      category: "Nổi bật",
      description:
        "Mấy chục vạn năm về sau, một trận oanh động Mộ Vân thành tiến giai xem lễ, thiên tài thiếu niên Lý Mộc bị người ám toán, nhân sinh rơi xuống đáy cốc.",
      comicId: 34117,
    },
    {
      id: 3,
      image: image1,
      title: "Chấp Ma (Hợp Thể Song Tu)",
      category: "Nổi bật",
      description:
        'Vương Lâm - một thiếu niên bình thường, may mắn được gia nhập vào một môn phái tu tiên xuống dốc của nước Triệu, vì thiếu linh căn, vì một hiểu nhầm tai hại, vì một khối thiết tinh và nhờ có được một "Thần Bí Hạt Châu". Vương Lâm đã bước lên con đường tu tiên và trên con đường này, hắn sẽ đối mặt với chuyện gì?',
      comicId: 34026,
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
