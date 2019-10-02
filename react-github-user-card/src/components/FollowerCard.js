import React from "react";

const FollowerCards = props => {
  console.log("FollowersCard rendered");
  return (
    <div className="followerCard">
      <img className="followerImage" src={props.image} alt="img" />
      <h3>{props.name}</h3>
    </div>
  );
};

export default FollowerCards;