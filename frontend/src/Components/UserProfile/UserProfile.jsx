import React, { useContext } from "react";
import usercover from "../../Assets/user-cover.jpg";
import avatar from "../../Assets/avatar-icon.jpg";
import { UserContext } from "../../Context/UserContext";

const UserProfile = () => {
  const { userData, loading } = useContext(UserContext);
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
    <div>
      <img
        src={"https://newphim.online/" + userData?.anhbia || usercover}
        alt=""
        className="px-25 mt-10 w-full h-100 object-cover"
      />
      <div className="mx-25 relative flex ">
        <img
          src={"https://newphim.online/" + userData?.avatar || avatar}
          alt=""
          className="rounded-full -translate-y-[60px] ml-25 w-50 ring-2 ring-red-500 "
        />
        <div className="text-white flex-1 px-10 py-6">
          <p className="font-bold text-2xl">{userData?.name}</p>
          <p className="text-lg">
            {userData.nickname ? `(${userData.nickname})` : ""}
          </p>
        </div>
        <div className="text-[#C72F44] text-lg py-6">
          <span className="cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
