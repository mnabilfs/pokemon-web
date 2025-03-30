import React from "react";
import ReactFlipCard from "reactjs-flip-card";

const FlipCard = () => {
  return (
    <div className="w-full md:w-64 flex justify-center">
      <ReactFlipCard
        perspective={1000}
        flipDirection="horizontal"
        hoverAnimation={true}
      />
    </div>
  );
};

export default FlipCard;
