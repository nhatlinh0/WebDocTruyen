import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/avatar-icon.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1b0e2d]">
      <header className="bg-[#231B27] text-white py-4 shadow-lg border-b border-[#3b2d46]">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <Link to="/" className="flex items-center group">
            {/* <div className="relative overflow-hidden rounded-full w-10 h-10 border-2 border-[#C42F44] shadow-md transition-all duration-300 group-hover:border-white">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div> */}
            <span className="ml-3 text-xl font-bold tracking-wide group-hover:text-[#C42F44] transition-colors">
              READ3
            </span>
          </Link>
          {/* <div className="flex space-x-5 items-center">
            <Link
              to="/login"
              className="font-medium hover:text-[#C42F44] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#C42F44] after:transition-all hover:after:w-full"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            >
              Đăng ký
            </Link>
          </div> */}
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        {children}
      </main>

      <footer className="bg-[#231B27] text-gray-300 py-5 border-t border-[#3b2d46]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center">
            <p className="text-sm text-gray-400 text-center w-full">
              &copy; {new Date().getFullYear()} Web Đọc Truyện. Tất cả các quyền
              được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
