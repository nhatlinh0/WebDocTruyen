import React from "react";
import avatar from "../../Assets/avatar-icon.jpg";
import usercover from "../../Assets/user-cover.jpg";

const Setting = () => {
  return (
    <div className="mt-14">
      <h2 className="text-white text-xl ring-2 p-2  ring-[#41276b] mb-12 text-center shadow-[#41276b] shadow-xl">
        Cài đặt tài khoản
      </h2>

      <div className="bg-[#2B1552] rounded-lg p-6 max-w-5xl mx-auto">
        <h3 className="text-white text-xl mb-6 border-b border-[#41276b] pb-3">
          Thông tin cá nhân
        </h3>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tên người dùng */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-gray-300 text-sm font-medium"
              >
                Tên người dùng
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nguyễn Văn A"
                defaultValue="Admin Linh"
              />
            </div>

            {/* Biệt danh */}
            <div className="space-y-2">
              <label
                htmlFor="nickname"
                className="block text-gray-300 text-sm font-medium"
              >
                Biệt danh
              </label>
              <input
                type="text"
                id="nickname"
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nhập biệt danh của bạn"
                defaultValue="hello"
              />
            </div>

            {/* Tên đăng nhập (readonly) */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-gray-300 text-sm font-medium"
              >
                Tên đăng nhập
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-[#1d1820] text-gray-400 rounded-md border border-[#41276b] cursor-not-allowed"
                value="adminlinh123"
                readOnly
              />
              <p className="text-xs text-gray-400">
                Tên đăng nhập không thể thay đổi
              </p>
            </div>

            {/* Quốc gia */}
            <div className="space-y-2">
              <label
                htmlFor="country"
                className="block text-gray-300 text-sm font-medium"
              >
                Quốc gia
              </label>
              <select
                id="country"
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                defaultValue="VN"
              >
                <option value="VN">Việt Nam</option>
                <option value="US">Hoa Kỳ</option>
                <option value="JP">Nhật Bản</option>
                <option value="KR">Hàn Quốc</option>
                <option value="CN">Trung Quốc</option>
                <option value="OT">Khác</option>
              </select>
            </div>
          </div>

          {/* Avatar section */}
          <div className="pt-4 border-t border-[#41276b]">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Ảnh đại diện
            </label>
            <div className="flex items-center space-x-6">
              <img
                src={avatar}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-2 border-[#C42F44]"
              />
              <div>
                <label
                  htmlFor="avatar-upload"
                  className="px-4 py-2 bg-[#C42F44] text-white rounded cursor-pointer hover:bg-[#d13a51] transition-colors inline-block"
                >
                  Tải ảnh lên
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Tối đa 5MB (JPG, PNG)
                </p>
              </div>
            </div>
          </div>

          {/* Cover Image section */}
          <div className="pt-4 border-t border-[#41276b] mt-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Ảnh bìa
            </label>
            <div className="space-y-4">
              <div className="relative w-full h-75 rounded-lg overflow-hidden border border-[#41276b]">
                <img
                  src={usercover}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">Ảnh bìa hiện tại</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <label
                  htmlFor="cover-upload"
                  className="px-4 py-2 bg-[#C42F44] text-white rounded cursor-pointer hover:bg-[#d13a51] transition-colors inline-block"
                >
                  Thay đổi ảnh bìa
                </label>
                <input
                  id="cover-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-transparent text-gray-300 border border-gray-600 rounded hover:border-gray-400 hover:text-gray-200 transition-colors"
                >
                  Xóa ảnh bìa
                </button>
              </div>

              <p className="text-xs text-gray-400">
                Kích thước đề xuất: 1200 x 400 pixel. Tối đa 8MB (JPG, PNG)
              </p>
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>

      {/* password */}

      <div className="bg-[#2B1552] rounded-lg p-6 max-w-5xl mt-20 mx-auto">
        <div className="pt-8 mt-6 border-t border-[#41276b]">
          <h3 className="text-white text-xl mb-6">Đổi mật khẩu</h3>

          <div className="space-y-6">
            {/* Tên đăng nhập (readonly) */}
            <div className="space-y-2">
              <label
                htmlFor="password-username"
                className="block text-gray-300 text-sm font-medium"
              >
                Tên đăng nhập
              </label>
              <input
                type="text"
                id="password-username"
                className="w-full px-4 py-3 bg-[#1d1820] text-gray-400 rounded-md border border-[#41276b] cursor-not-allowed"
                value="adminlinh123"
                readOnly
              />
            </div>

            {/* Mật khẩu hiện tại */}
            <div className="space-y-2">
              <label
                htmlFor="current-password"
                className="block text-gray-300 text-sm font-medium"
              >
                Mật khẩu hiện tại
              </label>
              <input
                type="password"
                id="current-password"
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nhập mật khẩu hiện tại"
              />
            </div>

            {/* Mật khẩu mới */}
            <div className="space-y-2">
              <label
                htmlFor="new-password"
                className="block text-gray-300 text-sm font-medium"
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                id="new-password"
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nhập mật khẩu mới"
              />
              <p className="text-xs text-gray-400">
                Mật khẩu phải có ít nhất 8 ký tự
              </p>
            </div>

            {/* Xác nhận mật khẩu mới */}
            <div className="space-y-2">
              <label
                htmlFor="confirm-password"
                className="block text-gray-300 text-sm font-medium"
              >
                Xác nhận mật khẩu mới
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                placeholder="Nhập lại mật khẩu mới"
              />
            </div>

            {/* Nút Đổi mật khẩu */}
            <div className="pt-2">
              <button
                type="button"
                className="px-5 py-2.5 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
              >
                Đổi mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
