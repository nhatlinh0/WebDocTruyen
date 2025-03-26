import React from "react";
import UserProfile from "../../Components/UserProfile/UserProfile";
import MenuUser from "../../Components/MenuUser/MenuUser";
import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  const selectedMenu = location.state?.menu || "saved";
  return (
    <div>
      <UserProfile />
      <MenuUser initialMenu={selectedMenu} />
    </div>
  );
};

export default User;
