import React from "react";
import useTitle from "../hooks/useTitle";

const AddService = () => {
  useTitle('AddService');
  
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const img = form.img.value;
    const desc = form.desc.value;

    const addService = {
      title,
      price,
      rating,
      img,
      desc,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-9/12 mx-auto my-5">
      <h2 className="text-3xl font-semibold uppercase text-center my-5">
        Add Your Service
      </h2>
      <form onSubmit={handleAddService} className="border p-5 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Title"
            className="input input-bordered my-3 w-full"
            name="title"
            required
          />
          <input
            type="text"
            placeholder="Your Price"
            className="input input-bordered my-3 w-full"
            name="price"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Rating"
            className="input input-bordered my-3 w-full"
            name="rating"
            required
          />
          <input
            type="text"
            placeholder="Your Photo Url"
            className="input input-bordered my-3 w-full"
            name="img"
            required
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full h-24"
          placeholder="Your Description"
          name="desc"
          required
        ></textarea>
        <input
          type="submit"
          className="btn btn-warning mt-2"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddService;
