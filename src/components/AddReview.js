import React from "react";

const AddReview = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
      <h2 className="text-3xl font-semibold uppercase text-center my-5">
        Add Your Review
      </h2>
      <form className="border p-5 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered my-3 w-full"
          />
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered my-3 w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Photo Url"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          className="textarea textarea-bordered w-full h-24"
          placeholder="message"
        ></textarea>
        <input type="submit" className="btn btn-warning" value="Send Review" />
      </form>
    </div>
  );
};

export default AddReview;
