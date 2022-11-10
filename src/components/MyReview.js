import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myreview, setMyreview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure, Delete Your Review??");
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => console.log(data));
    }
  };
  return (
    <div className="w-9/12 mx-auto my-5">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myreview.map((review) => (
              <>
                <tr>
                  <th>1</th>
                  <td>{review.name}</td>
                  <td>{review.message}</td>
                  <td>
                    <button
                      
                      className="btn btn-square mr-2"
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(review._id)} className="btn btn-square btn-outline mt-2">
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
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
