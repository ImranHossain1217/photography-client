import React from "react";

const Review = ({ review }) => {
  const { _id, name, message, photo } = review;

  const handleReviewDelete = (id) => {
    const confirm = window.confirm("Are You Sure, Delete Your Review?");
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={photo} alt="" />
          </div>
        </div>
        <h4 className="font-bold">Name: {name}</h4>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleReviewDelete(_id)}
            className="btn btn-square btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Review;
