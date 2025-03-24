import React from "react";
import UserProfile from "../../Components/UserProfile/UserProfile";
import Footer from "../../Components/Footer/Footer";
import { CiEdit } from "react-icons/ci";
import MenuUser from "../../Components/MenuUser/MenuUser";
const User = () => {
  return (
    <div>
      <UserProfile />
      <MenuUser />
    </div>
  );
};

export default User;
