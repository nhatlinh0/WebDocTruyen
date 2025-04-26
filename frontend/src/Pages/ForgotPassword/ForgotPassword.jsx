import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import forgotBg from "../../assets/background1.webp";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://newphim.online/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    // Giả lập gửi yêu cầu (chỉ UI)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Yêu cầu đã được gửi. Vui lòng kiểm tra email của bạn!");
    }, 1000);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    fetch("https://newphim.online/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: code,
        password: password,
        password_confirmation: passwordConfirm,
      }),
    })
      .then((res) => {
        const isSuccess = res.ok;
        return res.json().then((data) => ({
          ...data,
          isSuccess, // Thêm trường isSuccess vào data
        }));
      })
      .then((data) => {
        setIsSubmitting(false);
        if (data.isSuccess) {
          toast.success(data.message || "Đặt lại mật khẩu thành công!");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          toast.error(
            data.message || "Không thể đặt lại mật khẩu. Vui lòng thử lại."
          );
        }
      })
      .catch((error) => {
        setIsSubmitting(false); // Tắt loading khi lỗi
        console.error("Error:", error);
        toast.error(
          "Có lỗi xảy ra khi đặt lại mật khẩu. Vui lòng thử lại sau."
        );
      });
  };
  return (
    <>
      {isSubmitting && (
        <div className="absolute inset-0 z-100 bg-[#151018]/80 rounded-3xl flex justify-center items-center">
          <div className="text-center text-white">
            <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl">Đang xử lý...</p>
          </div>
        </div>
      )}

      <AuthLayout>
        <div className="flex w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {/* Phần hình ảnh bên trái */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <img
              src={forgotBg}
              alt="Đọc truyện online"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1552] to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-3">Quên mật khẩu?</h2>
              <p className="text-gray-200">
                Đừng lo lắng, chúng tôi sẽ giúp bạn khôi phục lại mật khẩu.
              </p>
            </div>
          </div>

          {/* Phần form khôi phục mật khẩu bên phải */}
          <div className="w-full lg:w-1/2 bg-[#2B1552] p-8 md:p-12">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">
                Khôi phục mật khẩu
              </h1>
              <p className="text-gray-300">
                Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu
              </p>
            </div>

            {!isSubmitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                    placeholder="Nhập email của bạn"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
                  >
                    Gửi liên kết đặt lại mật khẩu
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 px-4 bg-[#231B27] rounded-md border border-[#41276b]">
                <svg
                  className="w-16 h-16 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white mt-4">
                  Yêu cầu đã được gửi!
                </h3>
                <p className="text-gray-300 mt-2 mb-4">
                  Chúng tôi đã gửi một email đến {email} với hướng dẫn đặt lại
                  mật khẩu của bạn.
                </p>
                <p className="text-gray-400 text-sm">
                  Nếu bạn không nhận được email trong vòng vài phút, vui lòng
                  kiểm tra thư mục spam hoặc thử lại.
                </p>

                <form className="space-y-6" onSubmit={handleForgot}>
                  <div className="space-y-2">
                    {/* code  */}
                    <label
                      htmlFor="code"
                      className="block text-gray-300 text-sm font-medium"
                    >
                      Mã OTP
                    </label>
                    <input
                      id="code"
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                      placeholder="Nhập mã xác nhận"
                      required
                    />

                    {/* password  */}
                    <label
                      htmlFor="code"
                      className="block text-gray-300 text-sm font-medium"
                    >
                      Nhập mật khẩu mới
                    </label>
                    <input
                      id="code"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                      placeholder="Nhập mật khẩu mới"
                      required
                    />

                    {/* password confirm  */}
                    <label
                      htmlFor="code"
                      className="block text-gray-300 text-sm font-medium"
                    >
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      id="code"
                      type="password"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                      placeholder="Xác nhận mật khẩu mới"
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
                    >
                      Gửi liên kết đặt lại mật khẩu
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link
                to="/login"
                className="text-[#C42F44] hover:text-[#d13a51] font-medium flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Quay lại đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ForgotPassword;
