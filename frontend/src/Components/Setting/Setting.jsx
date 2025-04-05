import React, { useContext, useEffect, useState } from "react";
import avatar_default from "../../Assets/avatar-icon.jpg";
import usercover from "../../Assets/user-cover.jpg";
import { UserContext } from "../../Context/UserContext";

const Setting = () => {
  const userId = localStorage.getItem("userId");
  const { userData, loading } = useContext(UserContext);
  const [formData, setFormData] = useState({
    nickname: "",
    name: "",
    province: "",
    avatar: "",
    anhbia: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!loading) {
      setFormData({
        email: userData.email || "",
        nickname: userData.nickname || "",
        name: userData.name || "",
        province: userData.province || "",
        avatar: userData.avatar,
        anhbia: userData.anhbia || "",
      });
    }
  }, [userData, loading]);

  // Tạo hàm xử lý thay đổi file avatar
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Kiểm tra kích thước file (giới hạn 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Kích thước ảnh quá lớn. Vui lòng chọn ảnh nhỏ hơn 5MB.");
      return;
    }

    // Kiểm tra loại file
    if (!file.type.match("image.*")) {
      alert("Vui lòng chọn file ảnh.");
      return;
    }

    try {
      // Tạo FormData để gửi file
      const formDataToSend = new FormData();
      formDataToSend.append("avatar", file);
      formDataToSend.append("userId", userId);

      // Gửi file lên server
      const response = await fetch(
        "https://newphim.online/api/user/upload-avatar",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Cập nhật formData với đường dẫn ảnh mới
        setFormData((prev) => ({
          ...prev,
          avatar: result.avatarPath, // Đường dẫn mới từ server
        }));

        alert("Tải ảnh đại diện thành công!");
      } else {
        alert(`Lỗi: ${result.message || "Không thể tải ảnh lên"}`);
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
      alert("Đã xảy ra lỗi khi tải ảnh lên.");
    }
  };

  // Tạo hàm xử lý thay đổi file ảnh bìa
  const handleCoverChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Kiểm tra kích thước file (giới hạn 8MB)
    if (file.size > 8 * 1024 * 1024) {
      alert("Kích thước ảnh quá lớn. Vui lòng chọn ảnh nhỏ hơn 8MB.");
      return;
    }

    // Kiểm tra loại file
    if (!file.type.match("image.*")) {
      alert("Vui lòng chọn file ảnh.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("cover", file);
      formDataToSend.append("userId", userId);

      const response = await fetch(
        "https://newphim.online/api/user/upload-cover",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Cập nhật formData với đường dẫn ảnh bìa mới
        setFormData((prev) => ({
          ...prev,
          anhbia: result.coverPath, // Đường dẫn mới từ server
        }));

        alert("Tải ảnh bìa thành công!");
      } else {
        alert(`Lỗi: ${result.message || "Không thể tải ảnh lên"}`);
      }
    } catch (error) {
      console.error("Error uploading cover:", error);
      alert("Đã xảy ra lỗi khi tải ảnh lên.");
    }
  };

  // Hàm xóa ảnh bìa
  const handleRemoveCover = async () => {
    try {
      const response = await fetch(
        `https://newphim.online/api/user/remove-cover/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Xóa ảnh bìa trong formData
        setFormData((prev) => ({
          ...prev,
          anhbia: "",
        }));

        alert("Đã xóa ảnh bìa!");
      } else {
        alert(`Lỗi: ${result.message || "Không thể xóa ảnh bìa"}`);
      }
    } catch (error) {
      console.error("Error removing cover:", error);
      alert("Đã xảy ra lỗi khi xóa ảnh bìa.");
    }
  };

  console.log(formData);

  if (loading)
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải...</p>
        </div>
      </div>
    );
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
            {/* Email đăng nhập (readonly) */}
            <div className="space-y-2">
              <label
                htmlFor="user-email"
                className="block text-gray-300 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="user-email"
                className="w-full px-4 py-3 bg-[#1d1820] text-gray-400 rounded-md border border-[#41276b] cursor-not-allowed"
                value={formData?.email}
                readOnly
              />
              <p className="text-xs text-gray-400">Email không thể thay đổi</p>
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
                value={formData?.nickname}
                onChange={(e) =>
                  setFormData({ ...formData, nickname: e.target.value })
                }
              />
            </div>

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
                defaultValue={formData?.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Quốc gia */}
            <div className="space-y-2">
              <label
                htmlFor="country"
                className="block text-gray-300 text-sm font-medium"
              >
                Tỉnh thành
              </label>
              <select
                id="country"
                className="w-full overflow-y-auto px-4 py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors"
                defaultValue="VN"
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
              >
                <option value="default" selected>
                  -- Tỉnh thành --
                </option>
                <option value="AG">An Giang</option>
                <option value="BV">Bà Rịa - Vũng Tàu</option>
                <option value="BL">Bạc Liêu</option>
                <option value="BK">Bắc Kạn</option>
                <option value="BG">Bắc Giang</option>
                <option value="BN">Bắc Ninh</option>
                <option value="BT">Bến Tre</option>
                <option value="BD">Bình Định</option>
                <option value="BP">Bình Phước</option>
                <option value="BTh">Bình Thuận</option>
                <option value="BDg">Bình Dương</option>
                <option value="CM">Cà Mau</option>
                <option value="CB">Cao Bằng</option>
                <option value="CT">Cần Thơ</option>
                <option value="ĐN">Đà Nẵng</option>
                <option value="ĐB">Điện Biên</option>
                <option value="ĐL">Đắk Lắk</option>
                <option value="ĐNông">Đắk Nông</option>
                <option value="ĐNa">Đồng Nai</option>
                <option value="ĐTh">Đồng Tháp</option>
                <option value="GL">Gia Lai</option>
                <option value="HG">Hà Giang</option>
                <option value="HNa">Hà Nam</option>
                <option value="HN">Hà Nội</option>
                <option value="HT">Hà Tĩnh</option>
                <option value="HD">Hải Dương</option>
                <option value="HP">Hải Phòng</option>
                <option value="HGg">Hậu Giang</option>
                <option value="HB">Hòa Bình</option>
                <option value="HY">Hưng Yên</option>
                <option value="HCM">TP. Hồ Chí Minh</option>
                <option value="KH">Khánh Hòa</option>
                <option value="KG">Kiên Giang</option>
                <option value="KT">Kon Tum</option>
                <option value="LC">Lai Châu</option>
                <option value="LD">Lâm Đồng</option>
                <option value="LS">Lạng Sơn</option>
                <option value="LCA">Lào Cai</option>
                <option value="LA">Long An</option>
                <option value="ND">Nam Định</option>
                <option value="NA">Nghệ An</option>
                <option value="NB">Ninh Bình</option>
                <option value="NT">Ninh Thuận</option>
                <option value="PT">Phú Thọ</option>
                <option value="PY">Phú Yên</option>
                <option value="QB">Quảng Bình</option>
                <option value="QNa">Quảng Nam</option>
                <option value="QNg">Quảng Ngãi</option>
                <option value="QN">Quảng Ninh</option>
                <option value="QT">Quảng Trị</option>
                <option value="ST">Sóc Trăng</option>
                <option value="SL">Sơn La</option>
                <option value="TNI">Tây Ninh</option>
                <option value="TB">Thái Bình</option>
                <option value="TN">Thái Nguyên</option>
                <option value="TH">Thanh Hóa</option>
                <option value="TT-H">Thừa Thiên Huế</option>
                <option value="TV">Trà Vinh</option>
                <option value="TQ">Tuyên Quang</option>
                <option value="VL">Vĩnh Long</option>
                <option value="VP">Vĩnh Phúc</option>
                <option value="YB">Yên Bái</option>
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
                src={"https://newphim.online/" + formData?.avatar}
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
                  onChange={handleAvatarChange}
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
                  src={"https://newphim.online/" + formData.anhbia}
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
                  onChange={handleCoverChange}
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-transparent text-gray-300 border border-gray-600 rounded hover:border-gray-400 hover:text-gray-200 transition-colors"
                  onClick={handleRemoveCover}
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
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
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
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
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
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
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
