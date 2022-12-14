import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Review from "./Review";

const ServiceDetails = () => {
  const { title, img, price, rating, desc } = useLoaderData();
  const [reviews,setReviews] = useState([]);
  useTitle('Service Details');

    useEffect(()=> {
      fetch('https://photography-server-beta.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
    },[]);

  return (
    <div className="w-10/12 mx-auto my-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <PhotoProvider>
          <figure className="md:w-1/2">
            <PhotoView src={img}>
              <img src={img} alt="Album" />
            </PhotoView>
          </figure>
        </PhotoProvider>
        <div className="card-body md:w-1/2">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-orange-600">Price: ${price}</p>
          <p className="font-semibold">Rating: {rating}</p>
          <p>
            Description:
            <br />
            {desc}
          </p>
          <div className="card-actions justify-end">
           <Link to='/addReview'>
           <button className="btn btn-warning">Add Review</button>
           </Link>
          </div>
        </div>
      </div>
    <div className="my-5">
      {
        reviews.map(review => <Review key={review._id} review={review}></Review>)
      }
    </div>
    </div>
  );
};

export default ServiceDetails;
