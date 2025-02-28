import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import instagram from "../../Assets/instagram-icon.png";
import gmail from "../../Assets/gmail-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-center h-110 mt-12 bg-gradient-to-b from-[#231B27] to-[#2B1552]">
      <Link to={"/"}>
        <h1
          className="text-[#C42F44] text-3xl font-bold uppercase cursor-pointer duration-300 hover:text-[#fff] hover:scale-105"
          onClick={() => window.scrollTo(0, 0)}
        >
          Read3
        </h1>
      </Link>
      <p className="text-2xl font-bold text-white">Kết nối với chúng tôi</p>
      <div className="flex space-x-12">
        <BiLogoFacebookCircle className="text-[#0866FF] text-5xl cursor-pointer duration-300 hover:scale-110" />
        <FaDiscord className="text-[#5865F2] text-5xl cursor-pointer duration-300 hover:scale-110" />
        <img
          src={instagram}
          alt=""
          width={48}
          height={48}
          className="cursor-pointer duration-300 hover:scale-110"
        />
        <img
          src={gmail}
          alt=""
          width={48}
          height={48}
          className="cursor-pointer duration-300 hover:scale-110"
        />
      </div>
      <ul className="flex space-x-10">
        <li className="text-base text-white font-bold cursor-pointer duration-300 hover:text-[#FFD700] hover:underline">
          Về chúng tôi
        </li>
        <li className="text-base text-white font-bold cursor-pointer duration-300 hover:text-[#FFD700] hover:underline">
          Quyền riêng tư
        </li>
        <li className="text-base text-white font-bold cursor-pointer duration-300 hover:text-[#FFD700] hover:underline">
          Chính sách bảo mật
        </li>
        <li className="text-base text-white font-bold cursor-pointer duration-300 hover:text-[#FFD700] hover:underline">
          Điều khoản
        </li>
        <li className="text-base text-white font-bold cursor-pointer duration-300 hover:text-[#FFD700] hover:underline">
          Quản lý nội dung
        </li>
      </ul>
      <p className="text-white">Copyright © 2025 Read3</p>
    </div>
  );
};

export default Footer;
