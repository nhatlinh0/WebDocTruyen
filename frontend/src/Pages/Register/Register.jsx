import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import registerBg from "../../assets/background1.webp";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      password !== confirmPassword ||
      !email ||
      !password ||
      !confirmPassword ||
      password.length < 8
    ) {
      toast.error("Vui lòng nhập đủ thông tin");
      return;
    }

    const userData = {
      name: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://newphim.online/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
      } else {
        toast.error(data.message || "Đăng ký thất bại!");
      }
    } catch (error) {
      toast.error("Lỗi kết nối! Vui lòng thử lại.");
    }
  };

  return (
    <AuthLayout>
      <div className="flex w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
        {/* Phần hình ảnh bên trái */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={registerBg}
            alt="Đăng ký tài khoản"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1552] to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-3">Tham gia cùng chúng tôi</h2>
            <p className="text-gray-200">
              Tạo tài khoản để lưu truyện yêu thích, bình luận và nhiều tính
              năng hấp dẫn khác.
            </p>
          </div>
        </div>

        {/* Phần form đăng ký bên phải */}
        <div className="w-full lg:w-1/2 bg-[#2B1552] p-8 md:p-12">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Đăng ký tài khoản
            </h1>
            <p className="text-gray-300">
              Tạo tài khoản để khám phá thế giới truyện
            </p>
          </div>

          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="nhập email của bạn"
              />
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-gray-300 text-sm font-medium"
              >
                Họ và tên
              </label>
              <input
                id="fullName"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nhập họ và tên"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-medium"
              >
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Tạo mật khẩu (ít nhất 8 ký tự)"
              />
              <p className="text-xs text-gray-400">
                Mật khẩu phải có ít nhất 8 ký tự
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-300 text-sm font-medium"
              >
                Nhập lại mật khẩu
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nhập lại mật khẩu"
              />
            </div>

            {/* Terms and Conditions */}

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
                onClick={handleRegister}
              >
                Tạo tài khoản
              </button>
            </div>
          </form>

          {/* Social registration */}
          {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#41276b]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#2B1552] text-gray-300">
                  Hoặc đăng ký với
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-[#41276b] rounded-md shadow-sm bg-[#231B27] text-sm font-medium text-gray-300 hover:bg-[#2a2030]"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-[#41276b] rounded-md shadow-sm bg-[#231B27] text-sm font-medium text-gray-300 hover:bg-[#2a2030]"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"></path>
                </svg>
                Facebook
              </button>
            </div>
          </div> */}

          {/* Login link */}
          <p className="mt-6 text-center text-sm text-gray-300">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="font-medium text-[#C42F44] hover:text-[#d13a51]"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
