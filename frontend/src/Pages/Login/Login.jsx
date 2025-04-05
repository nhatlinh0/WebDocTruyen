import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import loginBg from "../../assets/sao-slider.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState();

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("https://newphim.online/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);
        setIsLoading(false);
        window.location.href = "/";
      } else {
        alert("Đăng nhập thất bại: " + data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Lỗi kết nối đến máy chủ!");
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

      <AuthLayout>
        <div className="flex w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {/* Phần hình ảnh bên trái */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <img
              src={loginBg}
              alt="Đọc truyện online"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1552] to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-3">Chào mừng trở lại</h2>
              <p className="text-gray-200">
                Khám phá hàng ngàn truyện hay và cập nhật mới nhất.
              </p>
            </div>
          </div>

          {/* Phần form đăng nhập bên phải */}
          <div className="w-full lg:w-1/2 bg-[#2B1552] p-8 md:p-12">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Đăng nhập</h1>
              <p className="text-gray-300">
                Đăng nhập để tiếp tục hành trình của bạn
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-gray-300 text-sm font-medium"
                >
                  Tên đăng nhập hoặc Email
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                  placeholder="Nhập tên đăng nhập hoặc email"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="block text-gray-300 text-sm font-medium"
                  >
                    Mật khẩu
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#C42F44] hover:text-[#d13a51]"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              {/* Remember me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#C42F44] rounded border-gray-500 focus:ring-[#C42F44]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Lưu thông tin đăng nhập
                </label>
              </div>
              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
                >
                  Đăng nhập
                </button>
              </div>
            </form>

            {/* Social login
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#41276b]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#2B1552] text-gray-300">
                  Hoặc đăng nhập với
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

            {/* Registration link */}
            <p className="mt-8 text-center text-sm text-gray-300">
              Bạn chưa có tài khoản?{" "}
              <Link
                to="/register"
                className="font-medium text-[#C42F44] hover:text-[#d13a51]"
              >
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
