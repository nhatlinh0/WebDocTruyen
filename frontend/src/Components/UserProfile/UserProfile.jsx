import React from "react";
import { CiEdit } from "react-icons/ci";
import usercover from "../../Assets/user-cover.jpg";
import avatar from "../../Assets/avatar-icon.jpg";
const UserProfile = () => {
  return (
    <div>
      <img
        src={usercover}
        alt=""
        className="px-25 mt-10 w-full h-100 object-cover"
      />
      <div className="mx-25 relative flex ">
        <img
          src={avatar}
          alt=""
          className="rounded-full -translate-y-[60px] ml-25 w-50 ring-2 ring-red-500 "
        />
        <div className="text-white flex-1 px-10 py-6">
          <p className="font-bold text-2xl">Admin Linh</p>
          <p className="text-lg">(hello)</p>
        </div>
        <div className="text-[#C72F44] text-lg py-6">
          <span className="cursor-pointer">Sửa hồ sơ</span>
          <CiEdit className="cursor-pointer inline-block w-6 h-6 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
