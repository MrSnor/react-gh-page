import React from "react";

const Avatar = (props) => {
  return <img src={props.img} alt="" className={`w-56 transition-all ${props.className}`} />;
};

export default Avatar;
