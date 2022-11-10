import React from "react";

const Profile = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="profile">
      <div className="profile__name">
        <p className="profile__firstname">{name.trim()}</p>
        <p className="profile__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="profile__picture" />
    </div>
  );
};

export default Profile;
