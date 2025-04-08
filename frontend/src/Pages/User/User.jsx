import React, { useContext } from "react";
import UserProfile from "../../Components/UserProfile/UserProfile";
import MenuUser from "../../Components/MenuUser/MenuUser";
import { useLocation } from "react-router-dom";

const User = () => {
  return (
    <div>
      <UserProfile />
      <MenuUser />
    </div>
  );
};

export default User;
