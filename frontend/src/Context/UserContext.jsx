import { createContext, useState, useEffect, useCallback } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    nickname: "",
    name: "",
    country: "",
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
          const timestamp = new Date().getTime();
          setUserData({
            email: data.email || "",
            nickname: data.nickname || "",
            name: data.name || "",
            country: data.country || "",
            avatar: `${data.avatar}?v=${timestamp}` || "",
            anhbia: `${data.anhbia}?v=${timestamp}` || "",
          });
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [userId, loading]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const contextValue = {
    userData,
    setUserData,
    loading,
    refresh: fetchUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
