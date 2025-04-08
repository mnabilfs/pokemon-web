import React, { useState } from "react";
import Rating from "react-rating";

const Ratings = () => {
  const [newComment, setNewComment] = useState({ rating: 0, comment: "" });
  return (
    <div className="mx-5 md:container md:mx-auto">
      <div className="text-2xl font-bold my-5">
        How would you describe our website?
      </div>
      <div className="shadow-md rounded">
        <div className="flex justify-start items-center mt-3 mx-3">
          <Rating
            name="rating"
            initialRating={newComment.rating}
            onChange={(rate) => setNewComment({ ...newComment, rating: rate })}
            emptySymbol={"far fa-star text-2xl text-yellow-300"}
            fullSymbol={"fas fa-star text-2xl text-yellow-300"}
          />
        </div>
        <hr className="my-3" />
        <div className="mx-3 mb-3">
          <textarea
            name="comment"
            id=""
            type="text"
            placeholder="Your Comment"
            value={newComment.comment}
            onChange={(e) => {
              setNewComment({ ...newComment, comment: e.target.value });
            }}
            className="border-none p-2 rounded-md w-full h-[8rem] focus:outline-none focus:border-transparent focus:ring-transparent"
          ></textarea>
        </div>
        <div className="flex justify-end pb-3 mx-3">
          <button className="bg-green-400 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 my-3">
        <div className="flex items-center w-full">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ratings;
