import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, rating, price, desc } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="service-img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-600 font-semibold">
            Price: ${price}
          </p>
          <p className=" text-orange-600 font-semibold">Rating: {rating}</p>
          <p>{desc.slice(0, 100)}...</p>
          <div className="card-actions justify-start">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-warning">Service Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
