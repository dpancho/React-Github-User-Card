import React from "react";

const UserCard = props => {
  console.log("UserCard rendered");
  return (
    <div className="userCard">
      <img className="userImage" src={props.image} alt="img" />
      <div className="userInfo">
        <h1 className="userName">{props.name}</h1>
        <p className="userBio">{props.bio}</p>
        <p>Location:{props.location}</p>
        <p>Followers:{props.follower}</p>
        <p>Following:{props.following}</p>
      </div>
    </div>
  );
};

export default UserCard;