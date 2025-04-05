import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import userIcon from "../../Assets/avatar-icon.jpg";
import { Link } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";
import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const { allCategory, allComics } = useContext(ComicContext);
  const { userData } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState();

  // setUserData({
  //   email: data.email || "",
  //   nickname: data.nickname || "",
  //   name: data.name || "",
  //   province: data.province || "",
  //   avatar: data.avatar || "",
  //   cover: data.anhbia || "",
  // });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Xử lý tìm kiếm khi người dùng nhập
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setShowResults(false);
      return;
    }

    // Tìm kiếm truyện dựa trên tên
    const results = allComics
      .filter((comic) => comic.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5); // Giới hạn 5 kết quả

    setSearchResults(results);
    setShowResults(true);
  };

  // Xử lý khi người dùng nhấn nút tìm kiếm
  const handleSearchSubmit = () => {
    if (searchQuery.trim() === "") return;

    // Chuyển hướng đến trang kết quả tìm kiếm
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setShowResults(false);
  };

  const handleLogout = () => {
    if (!token) {
      return;
    }

    setIsLoading(true);
    fetch("https://newphim.online/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          setIsLoading(false);
          window.location.href = "/login";
        } else {
          alert("Lỗi kết nối");
          setIsLoading(false);
        }
      })
      .catch((error) => alert(error));
  };

  // Xử lý khi người dùng nhấn Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 z-100 bg-[#151018]/80 rounded-3xl flex justify-center items-center">
          <div className="text-center text-white">
            <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl">Đang tải...</p>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center h-16 text-white text-base font-bold bg-gradient-to-b from-[#2B1552] to [#23B1B27]">
        <Link to={"/"}>
          <h1 className="uppercase text-[32px] text-[#C42F44] ml-20 cursor-pointer select-none hover:text-[#ff4d6d] duration-300">
            READ3
          </h1>
        </Link>

        <Link to={"/newest"}>
          <p className="cursor-pointer hover:text-[#ff4d6d] duration-300">
            Mới nhất
          </p>
        </Link>
        <Link to={"/popular"}>
          <p className="cursor-pointer hover:text-[#ff4d6d] duration-300">
            Phổ biến
          </p>
        </Link>

        <div className="h-[30px] relative group bg-transparent flex justify-between items-center cursor-pointer hover:text-[#ff4d6d]">
          <p className="">Thể loại</p>
          <IoIosArrowDown className="m-2.5" />

          <div className="absolute left-1/2 -translate-x-1/2 top-[48px] z-10 w-[500px] bg-[#231B27] border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className="grid grid-cols-3 p-6">
              {allCategory.map((item) => (
                <Link to={`/categories/${item.id}`} key={item.id}>
                  <li className="px-4 py-2 hover:bg-gray-200">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Search box - Updated with search functionality */}
        <div className="relative">
          <div className="flex justify-between items-center max-w-xl bg-[#d9d9d9] rounded-xl border-2 border-[rgba(196,47,68,0.4)] h-10 hover:border-[#C42F44] duration-300">
            <input
              className="h-7.5 w-85 ml-5 bg-transparent border-transparent outline-none text-sm placeholder-red-300 text-rose-600"
              type="text"
              placeholder="Bạn muốn tìm truyện gì?"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            <div
              className="flex justify-center items-center w-7.5 h-7.5 rounded-full bg-[#c42f44] mx-2.5 cursor-pointer hover:bg-[#ff4d6d] duration-300"
              onClick={handleSearchSubmit}
            >
              <IoSearchOutline className="w-5 h-5 text-[#f3f3f3]" />
            </div>
          </div>

          {/* Dropdown search results */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-[53px] z-50 bg-[#231B27] border border-[#C42F44] rounded-md shadow-xl">
              <ul className="py-2">
                {searchResults.map((comic, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-[#2B1552] transition-colors"
                  >
                    <Link
                      to={`/comic/${comic.id}`}
                      className="flex items-center space-x-3"
                      onClick={() => setShowResults(false)}
                    >
                      <img
                        src={"https://newphim.online/" + comic.img}
                        alt={comic.name}
                        className="w-10 h-14 object-cover rounded"
                      />
                      <div>
                        <p className="text-white font-medium">{comic.name}</p>
                        <p className="text-gray-400 text-sm">
                          Chương {comic.chapter_number}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
                <li className="px-4 py-2 text-center border-t border-[#3a2a43] mt-2">
                  <Link
                    to={`/search?q=${encodeURIComponent(searchQuery)}`}
                    className="text-[#C42F44] hover:text-[#ff4d6d] text-sm font-medium"
                    onClick={() => setShowResults(false)}
                  >
                    Xem tất cả kết quả
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* No results message */}
          {showResults &&
            searchQuery.trim() !== "" &&
            searchResults.length === 0 && (
              <div className="absolute left-0 right-0 top-12 z-50 bg-[#231B27] border border-[#C42F44] rounded-md shadow-xl">
                <p className="py-4 px-4 text-white text-center">
                  Không tìm thấy truyện phù hợp
                </p>
              </div>
            )}
        </div>

        <FaRegMoon className="w-5 h-5 cursor-pointer hover:text-[#ff4d6d] duration-300" />
        <div className="group relative flex items-center justify-center mr-20 space-x-2">
          {token && (
            <img
              src={"https://newphim.online/" + userData.avatar}
              alt=""
              className="w-11 h-11 rounded-[50%] cursor-pointer hover:scale-110 transition duration-300"
            />
          )}

          {token && (
            <p className="w-30 text-center truncate">{userData.name}</p>
          )}

          {token && (
            <div className="absolute top-[55px] z-50 w-64 bg-[#231B27] border border-[#C42F44] rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-4 border-b border-[#3a2a43]">
                <div className="flex items-center space-x-3">
                  <img
                    src={"https://newphim.online/" + userData.avatar}
                    alt="User profile"
                    className="w-12 h-12 rounded-full border-2 border-[#C42F44]"
                  />
                  <div>
                    <p className="font-medium text-white">{userData.name}</p>
                  </div>
                </div>
              </div>

              <ul className="p-2 font-normal text-white">
                <Link to={"/profile"} state={{ menu: "saved" }}>
                  <li className="px-4 py-3 flex items-center space-x-2 hover:bg-[#2B1552] hover:text-[#ff4d6d] rounded-md transition-colors duration-200 cursor-pointer">
                    <FaRegBookmark />
                    <span>Truyện đã lưu</span>
                  </li>
                </Link>

                <Link to={"/profile"} state={{ menu: "history" }}>
                  <li className="px-4 py-3 flex items-center space-x-2 hover:bg-[#2B1552] hover:text-[#ff4d6d] rounded-md transition-colors duration-200 cursor-pointer">
                    <FaRegClock />
                    <span>Lịch sử đọc</span>
                  </li>
                </Link>

                <Link to={"/profile"} state={{ menu: "setting" }}>
                  <li className="px-4 py-3 flex items-center space-x-2 hover:bg-[#2B1552] hover:text-[#ff4d6d] rounded-md transition-colors duration-200 cursor-pointer">
                    <FaRegUser />
                    <span>Thông tin hồ sơ</span>
                  </li>
                </Link>
              </ul>

              <div
                className="p-2 border-t border-[#3a2a43]"
                onClick={handleLogout}
              >
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#2B1552] hover:bg-[#231B27] text-white rounded-md border border-[#C42F44] transition-colors duration-200 cursor-pointer">
                  <MdOutlineLogin className="w-5 h-5 text-[#c42f44]" />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          )}

          {/* nút đăng nhập */}
          {!token && (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="flex items-center space-x-2 px-5 h-10 bg-transparent border-2 border-[#C42F44] text-white rounded-lg hover:bg-[#2B1552] hover:border-[#ff4d6d] hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(196,47,68,0.25)]"
              >
                <MdOutlineLogin className="w-5 h-5 text-[#ff4d6d]" />
                <span className="font-medium tracking-wide">Đăng nhập</span>
              </Link>
              <Link
                to="/register"
                className="px-5 h-10 p-2 bg-gradient-to-r from-[#C42F44] to-[#ff4d6d] text-white font-medium tracking-wide rounded-lg hover:shadow-[0_8px_20px_rgba(255,77,109,0.5)] hover:scale-105 transform transition-all duration-300"
              >
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
