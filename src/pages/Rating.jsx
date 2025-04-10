import React, { useState } from "react";
import Rating from "react-rating";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { comment } from "postcss";
import { toast, ToastContainer } from "react-toastify";

const Ratings = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [newComment, setNewComment] = useState({ rating: 0, comment: "" });
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ucup Dwisana",
      rating: 3,
      comment: "Sangat cocok, cocok oe hantam!",
    },
    {
      id: 2,
      name: "Naomi Yamaguci",
      rating: 5,
      comment: "Pahlawan himmel pasti akan melakukan hal yang sama.",
    },
    {
      id: 3,
      name: "Farrel A",
      rating: 4,
      comment: "Puh sepuh, ajarin dong puh.",
    },
  ]);
  const [editComment, setEditComment] = useState({
    id: null,
    rating: 0,
    comment: "",
  });

  const handleSave = () => {
    const updateComment = comments.map((comment) =>
      comment.id === editComment.id ? editComment : comment
    );
    setComments(updateComment);
    setEditComment({ id: null, rating: 0, comment: "" });
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    const updateComment = comments.filter((comment) => comment.id !== id);
    setComments(updateComment);
  };

  const handleAdd = () => {
    if(!newComment.rating || !newComment.comment){
      toast.error("Please fill the rating and comment!")
      return
    }
    const newId = comments.length + 1;
    setComments([
      ...comments,
      {
        id: newId,
        name: "Anonymous",
        rating: newComment.rating,
        comment: newComment.comment,
      },
    ]);
    setNewComment({ rating: 0, comment: "" });
  };

  return (
    <div className="mx-5 md:container md:mx-auto">
      <ToastContainer/>
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
          <button
            className="bg-green-400 text-white px-4 py-2 rounded-md"
            onClick={handleAdd}
          >
            Send
          </button>
        </div>
      </div>

      {comments.map((comment) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 my-3"
          key={comment.id}
        >
          <div className="flex items-center w-full">
            <img
              src="https://i.pravatar.cc/150"
              alt="avatar"
              className="w-12 h-12 rounded-full mr-4 "
            />

            {/* Comment Edit n Delete */}
            <div className="flex-grow">
              {isEdit && editComment.id === comment.id ? (
                <>
                  <div className="flex items-center justify-between w-full mb-2">
                    <div>
                      <span className="font-bold text-lg mr-2">
                        {comment.name}
                      </span>
                      <Rating
                        initialRating={editComment.rating}
                        onChange={(rate) =>
                          setEditComment({ ...editComment, rating: rate })
                        }
                        emptySymbol={"far fa-star text-yellow-300"}
                        fullSymbol={"fas fa-star text-yellow-300"}
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        className="bg-green-400 text-white px-4 rounded-md"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between w-full mb-2">
                    <div>
                      <span className="font-bold text-lg mr-2">
                        {comment.name}
                      </span>
                      <Rating
                        readonly
                        initialRating={comment.rating}
                        emptySymbol={"far fa-star text-yellow-300"}
                        fullSymbol={"fas fa-star text-yellow-300"}
                      />
                    </div>
                    <div className="flex gap-3">
                      <FaTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(comment.id)}
                      />
                      <FaEdit
                        className="text-blue-500 cursor-pointer"
                        onClick={() => {
                          setIsEdit(true);
                          setEditComment(comment);
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
              <p className="text-gray-700">
                {isEdit && editComment.id === comment.id ? (
                  <textarea
                    name="editComment"
                    id=""
                    type="text"
                    placeholder="Your Comment"
                    value={editComment.comment}
                    onChange={(e) => {
                      setEditComment({
                        ...editComment,
                        comment: e.target.value,
                      });
                    }}
                    className="border p-2 rounded-md w-full h-[8rem] focus:border-green-500 focus:outline-none focus:ring-transparent"
                  ></textarea>
                ) : (
                  comment.comment
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
