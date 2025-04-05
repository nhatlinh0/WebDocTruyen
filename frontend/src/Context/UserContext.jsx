import { createContext, useState, useEffect, useCallback } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    nickname: "",
    name: "",
    province: "",
    avatar: "",
    anhbia: "",
  });

  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  const fetchUserData = useCallback(() => {
    fetch(`https://newphim.online/api/user/profile/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUserData({
            email: data.email || "",
            nickname: data.nickname || "",
            name: data.name || "",
            province: data.province || "",
            avatar: data.avatar || "",
            anhbia: data.anhbia || "",
          });
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const contextValue = {
    userData,
    setUserData,
    loading,
    refreshUserData: fetchUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
