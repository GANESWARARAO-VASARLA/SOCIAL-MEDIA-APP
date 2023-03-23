import React from "react";
import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
import "./stories.scss";

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679506752/DSC_0891_yadsuz.jpg" alt="" className="storyProfile" />
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679506752/DSC_0891_yadsuz.jpg" alt="" className="storybackground" />
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679506752/DSC_0891_yadsuz.jpg" alt="" className="storyadd" />
        <span className="text">Ganesh</span>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;
