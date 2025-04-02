import React from "react";

const Card = (props) => {
  const [image, name, types, handleDeatail] = props;
  return (
    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl mx-auto w-64 md:w-[20rem] h-auto md:h-full hover:scale-105 transition duration-300 ease-in-out">
        <img src={image} alt={name} className="w-64 md:w-full mx-auto" />
    </div>
  );
};

export default Card;
