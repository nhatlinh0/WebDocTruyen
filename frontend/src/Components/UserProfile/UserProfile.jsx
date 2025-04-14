import React, { useContext } from "react";
import usercover from "../../Assets/user-cover.jpg";
import avatar from "../../Assets/avatar-icon.jpg";
import { UserContext } from "../../Context/UserContext";

const UserProfile = () => {
  const { userData, loading } = useContext(UserContext);

  if (loading)
    return (
      <div className="bg-[#151018] rounded-lg sm:rounded-xl md:rounded-3xl h-40 sm:h-60 md:h-175 mx-4 sm:mx-8 md:mx-16 lg:mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-2 sm:mb-4"></div>
          <p className="text-lg sm:text-xl">Đang tải...</p>
        </div>
      </div>
    );

  return (
    <div>
      <img
        src={"https://newphim.online/" + userData?.anhbia || usercover}
        alt="Ảnh bìa người dùng"
        className="px-4 sm:px-8 md:px-16 lg:px-25 mt-4 sm:mt-6 md:mt-10 w-full h-40 sm:h-60 md:h-80 lg:h-100 object-cover rounded-lg sm:rounded-xl"
      />

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-25 relative flex flex-col sm:flex-row items-center sm:items-start">
        <img
          src={"https://newphim.online/" + userData?.avatar || avatar}
          alt="Avatar người dùng"
          className="rounded-full -translate-y-10 sm:-translate-y-[40px] md:-translate-y-[60px] mx-auto sm:mx-0 sm:ml-8 md:ml-16 lg:ml-25 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 ring-2 ring-red-500 object-cover"
        />

        <div className="text-white flex-1 px-4 sm:px-6 md:px-10 py-2 sm:py-4 md:py-6 text-center sm:text-left -mt-6 sm:mt-0">
          <p className="font-bold text-xl sm:text-2xl truncate">
            {userData?.name}
          </p>
          <p className="text-base sm:text-lg mt-1">
            {userData.nickname ? `(${userData.nickname})` : ""}
          </p>
        </div>

        <div className="text-[#C72F44] text-base sm:text-lg py-2 sm:py-4 md:py-6">
          <span className="cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
