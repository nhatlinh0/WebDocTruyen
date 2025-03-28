import React from "react";
import UserProfile from "../../Components/UserProfile/UserProfile";
import MenuUser from "../../Components/MenuUser/MenuUser";
import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  const selectedMenu = location.state?.menu || "saved";
  const user = location.state.user;
  return (
    <div>
      <UserProfile user={user} />
      <MenuUser initialMenu={selectedMenu} user={user} />
    </div>
  );
};

export default User;
