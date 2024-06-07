import React, { useContext, useEffect } from "react";
import { Context, server } from "../main";
import axios from "axios";
import Default from "../components/Default";

const Profile = () => {
  const { isAuthenticated, loading, user,setUser } = useContext(Context);

  useEffect(() => {
    if(isAuthenticated)
      {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((error) => {
        setUser({});
      });
    }
  }, []);

  console.log(loading,isAuthenticated,user);

  return !isAuthenticated ? (
    <Default />
  ) : (
    <div class="profile-container">
    <div class="profile-table">
        <div class="profile-row">
            <div class="profile-cell label">UserName:</div>
            <div class="profile-cell value">{user?.name}</div>
        </div>
        <div class="profile-row">
            <div class="profile-cell label">UserEmail:</div>
            <div class="profile-cell value">{user?.email}</div>
        </div>
    </div>
</div>


  );
};

export default Profile;
