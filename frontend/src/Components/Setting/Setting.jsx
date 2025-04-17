import React, { useContext, useEffect, useState } from "react";
import defaultavatar from "../../Assets/comic-icon.png";
import defaultcover from "../../Assets/default-cover.webp";
import { UserContext } from "../../Context/UserContext";

const Setting = () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  const { refresh } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    name: "",
    country: "",
    avatar: "",
    anhbia: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const fileUrl = URL.createObjectURL(files[0]);
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
        [`${name}Preview`]: fileUrl,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // formDataToSend.append("_method", "PUT");
    formDataToSend.append("name", formData.name || "");
    formDataToSend.append("country", formData.country || "");
    formDataToSend.append("nickname", formData.nickname || "");
    if (formData.avatar instanceof File) {
      formDataToSend.append("avatar", formData.avatar);
    }

    if (formData.anhbia instanceof File) {
      formDataToSend.append("anhbia", formData.anhbia);
    }

    try {
      const response = await fetch(
        "https://newphim.online/api/user/update-profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      const data = await response.json();
      if (response.ok) {
        refreshUserData();
        refresh();
        alert("Cập nhật thông tin thành công!");
      } else {
        alert(`Lỗi: ${data.message || "Không thể cập nhật thông tin"}`);
      }
      console.log("Response:", data);
    } catch (error) {
      console.error("Lỗi gửi form:", error);
      alert("Đã xảy ra lỗi khi cập nhật thông tin.");
    }
  };

  const refreshUserData = () => {
    fetch(`https://newphim.online/api/user/profile/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const timestamp = new Date().getTime();
          setFormData({
            email: data.email || "",
            nickname: data.nickname || "",
            name: data.name || "",
            country: data.country || "",
            avatar: data.avatar ? `${data.avatar}?v=${timestamp}` : "",
            anhbia: data.anhbia ? `${data.anhbia}?v=${timestamp}` : "",
          });
          // Sau khi cập nhật userData, formData sẽ được cập nhật thông qua useEffect
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    refreshUserData();
  }, [userId]);

  // useEffect(() => {
  //   if (!loading) {
  //     setFormData({
  //       email: userData.email || "",
  //       nickname: userData.nickname || "",
  //       name: userData.name || "",
  //       country: userData.country || "",
  //       avatar: userData.avatar || "",
  //       anhbia: userData.anhbia || "",
  //     });
  //   }
  // }, [userData, loading]);

  // if (loading)
  //   return (
  //     <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
  //       <div className="text-center text-white">
  //         <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
  //         <p className="text-xl">Đang tải...</p>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="mt-8 sm:mt-10 md:mt-14 px-4 sm:px-6">
      <h2 className="text-white text-lg sm:text-xl ring-2 p-2 ring-[#41276b] mb-6 sm:mb-8 md:mb-12 text-center shadow-[#41276b] shadow-xl">
        Cài đặt tài khoản
      </h2>

      <div className="bg-[#2B1552] rounded-lg p-4 sm:p-6 max-w-5xl mx-auto">
        <h3 className="text-white text-lg sm:text-xl mb-4 sm:mb-6 border-b border-[#41276b] pb-2 sm:pb-3">
          Thông tin cá nhân
        </h3>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-4 sm:space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Email đăng nhập (readonly) */}
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="user-email"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1d1820] text-gray-400 rounded-md border border-[#41276b] cursor-not-allowed text-xs sm:text-sm"
                value={formData?.email || ""}
                readOnly
              />
              <p className="text-xs text-gray-400">Email không thể thay đổi</p>
            </div>

            {/* Biệt danh */}
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="nickname"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Biệt danh
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors text-xs sm:text-sm"
                placeholder="Nhập biệt danh của bạn"
                value={formData?.nickname || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* Tên người dùng */}
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="fullName"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Tên người dùng
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors text-xs sm:text-sm"
                placeholder="Nguyễn Văn A"
                value={formData?.name || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* Quốc gia */}
            <div className="space-y-2">
              <label
                htmlFor="country"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Tỉnh thành
              </label>
              <select
                id="country"
                name="country"
                className="w-full overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors text-xs sm:text-sm"
                value={formData.country || "default"}
                onChange={(e) => handleChange(e)}
              >
                <option value="default" selected>
                  -- Tỉnh thành --
                </option>
                <option value="An Giang">An Giang</option>
                <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                <option value="Bạc Liêu">Bạc Liêu</option>
                <option value="Bắc Kạn">Bắc Kạn</option>
                <option value="Bắc Giang">Bắc Giang</option>
                <option value="Bắc Ninh">Bắc Ninh</option>
                <option value="Bến Tre">Bến Tre</option>
                <option value="Bình Định">Bình Định</option>
                <option value="Bình Phước">Bình Phước</option>
                <option value="Bình Thuận">Bình Thuận</option>
                <option value="Bình Dương">Bình Dương</option>
                <option value="Cà Mau">Cà Mau</option>
                <option value="Cao Bằng">Cao Bằng</option>
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Điện Biên">Điện Biên</option>
                <option value="Đắk Lắk">Đắk Lắk</option>
                <option value="Đắk Nông">Đắk Nông</option>
                <option value="Đồng Nai">Đồng Nai</option>
                <option value="Đồng Tháp">Đồng Tháp</option>
                <option value="Gia Lai">Gia Lai</option>
                <option value="Hà Giang">Hà Giang</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Tĩnh">Hà Tĩnh</option>
                <option value="Hải Dương">Hải Dương</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Hậu Giang">Hậu Giang</option>
                <option value="Hòa Bình">Hòa Bình</option>
                <option value="Hưng Yên">Hưng Yên</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Khánh Hòa">Khánh Hòa</option>
                <option value="Kiên Giang">Kiên Giang</option>
                <option value="Kon Tum">Kon Tum</option>
                <option value="Lai Châu">Lai Châu</option>
                <option value="Lâm Đồng">Lâm Đồng</option>
                <option value="Lạng Sơn">Lạng Sơn</option>
                <option value="Lào Cai">Lào Cai</option>
                <option value="Long An">Long An</option>
                <option value="Nam Định">Nam Định</option>
                <option value="Nghệ An">Nghệ An</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Ninh Thuận">Ninh Thuận</option>
                <option value="Phú Thọ">Phú Thọ</option>
                <option value="Phú Yên">Phú Yên</option>
                <option value="Quảng Bình">Quảng Bình</option>
                <option value="Quảng Nam">Quảng Nam</option>
                <option value="Quảng Ngãi">Quảng Ngãi</option>
                <option value="Quảng Ninh">Quảng Ninh</option>
                <option value="Quảng Trị">Quảng Trị</option>
                <option value="Sóc Trăng">Sóc Trăng</option>
                <option value="Sơn La">Sơn La</option>
                <option value="Tây Ninh">Tây Ninh</option>
                <option value="Thái Bình">Thái Bình</option>
                <option value="Thái Nguyên">Thái Nguyên</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Huế">Huế</option>
                <option value="Trà Vinh">Trà Vinh</option>
                <option value="Tuyên Quang">Tuyên Quang</option>
                <option value="Vĩnh Long">Vĩnh Long</option>
                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                <option value="Yên Bái">Yên Bái</option>
              </select>
            </div>
          </div>

          {/* Anh dai dien */}
          <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Ảnh đại diện
          </label>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <img
              src={
                formData?.avatarPreview ||
                (formData.avatar
                  ? "https://newphim.online/" + formData.avatar
                  : defaultavatar)
              }
              alt="Avatar"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C42F44]"
            />
            <div>
              <label
                htmlFor="avatar-upload"
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#C42F44] text-white rounded cursor-pointer hover:bg-[#d13a51] transition-colors inline-block text-xs sm:text-sm"
              >
                Tải ảnh lên
              </label>
              <input
                id="avatar-upload"
                name="avatar"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
              <p className="text-xs text-gray-400 mt-1">
                Tối đa 5MB (JPG, PNG)
              </p>
            </div>
          </div>

          {/* Anh bia */}
          <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Ảnh bìa
          </label>
          <div className="space-y-3 sm:space-y-4">
            <div className="relative w-full h-40 sm:h-60 md:h-75 rounded-lg overflow-hidden border border-[#41276b]">
              <img
                src={
                  formData?.anhbiaPreview ||
                  (formData.anhbia
                    ? "https://newphim.online/" + formData.anhbia
                    : defaultcover)
                }
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm">
                  Ảnh bìa hiện tại
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <label
                htmlFor="cover-upload"
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#C42F44] text-white rounded cursor-pointer hover:bg-[#d13a51] transition-colors inline-block text-xs sm:text-sm w-full sm:w-auto text-center"
              >
                Thay đổi ảnh bìa
              </label>
              <input
                id="cover-upload"
                type="file"
                name="anhbia"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <p className="text-xs text-gray-400">
              Kích thước đề xuất: 1200 x 400 pixel. Tối đa 8MB (JPG, PNG)
            </p>
          </div>

          {/* Submit button */}
          <div className="pt-4 sm:pt-6 flex justify-end">
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50 text-xs sm:text-sm"
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>

      {/* <div className="bg-[#2B1552] rounded-lg p-6 max-w-5xl mx-auto mt-20">
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
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
            >
              Lưu
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="bg-[#2B1552] rounded-lg p-6 max-w-5xl mx-auto mt-1">
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
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50"
            >
              Lưu
            </button>
          </div>
        </div>
      </div> */}

      {/* password */}

      <div className="bg-[#2B1552] rounded-lg p-4 sm:p-6 max-w-5xl mt-8 sm:mt-12 md:mt-20 mx-auto">
        <h3 className="text-white text-lg sm:text-xl mb-4 sm:mb-6">
          Đổi mật khẩu
        </h3>
        <div className="pt-4 sm:pt-8 mt-4 sm:mt-6 border-t border-[#41276b]">
          <div className="space-y-4 sm:space-y-6">
            {/* Tên đăng nhập (readonly) */}
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="password-username"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Tên đăng nhập
              </label>
              <input
                type="text"
                id="password-username"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1d1820] text-gray-400 rounded-md border border-[#41276b] cursor-not-allowed text-xs sm:text-sm"
                value="adminlinh123"
                readOnly
              />
            </div>

            {/* Mật khẩu hiện tại */}
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="current-password"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Mật khẩu hiện tại
              </label>
              <input
                type="password"
                id="current-password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors text-xs sm:text-sm"
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
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="new-password"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                id="new-password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors text-xs sm:text-sm"
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
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="confirm-password"
                className="block text-gray-300 text-xs sm:text-sm font-medium"
              >
                Xác nhận mật khẩu mới
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#231B27] text-white rounded-md border border-[#41276b] focus:border-[#C42F44] focus:outline-none focus:ring-1 focus:ring-[#C42F44] transition-colors text-xs sm:text-sm"
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
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#C42F44] text-white font-medium rounded-md hover:bg-[#d13a51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C42F44] focus:ring-opacity-50 text-xs sm:text-sm"
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
