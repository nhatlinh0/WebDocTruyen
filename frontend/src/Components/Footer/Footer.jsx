import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import instagram from "../../Assets/instagram-icon.png";
import gmail from "../../Assets/gmail-icon.png";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Heart,
  BookOpen,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-gradient-to-b from-[#231B27] to-[#2B1552] text-gray-300 mt-20 px-30">
        {/* Top footer section with columns */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and about column */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="text-red-500 h-8 w-8 mr-2" />
                <h2 className="text-3xl font-bold text-[#C42F44] cursor-pointer duration-300 hover:text-[#fff] hover:scale-105">
                  READ3
                </h2>
              </div>
              <p className="mb-6 text-sm leading-relaxed">
                <span className="text-[#C42F44]">READ3</span> - nền tảng đọc
                truyện trực tuyến với hàng nghìn bộ truyện đa dạng thể loại, cập
                nhật liên tục và hoàn toàn miễn phí.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Thể loại column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Thể loại truyện
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Manga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Manhwa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Manhua
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Action
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Fantasy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Romance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Adventure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Comedy
                  </a>
                </li>
              </ul>
            </div>

            {/* Links column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Liên kết
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Quyền riêng tư
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Quản lý nội dung
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Liên hệ</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>1 Phù Đổng Thiên Vương, Phường 8, TP. Đà Lạt</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span>0123 456 789</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span>contact@read3.vn</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span>www.read3.vn</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Đăng ký nhận tin
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
                  />
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-md transition-colors">
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              &copy; {currentYear} READ3. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center text-sm">
              <span>Được phát triển với</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>bởi đội ngũ READ3</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
