import React from "react";
import Avatar from "./Avatar";

const Card = (props) => {
  // console.log(props);

  return (
    <div className={`grid place-content-center text-center ring-2 rounded ${props.className} `}>
      <Avatar img={props.img} dada={false} />
      <h1 className={props.Hclasses}> {props.name} </h1>
    </div>
  );
};

export default Card;