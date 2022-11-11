import React from "react";
import aboutImg from "../assets/about.jpg";
import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle('About');

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 relative">
            <img
              src={aboutImg}
              className="w-4/5 rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="font-bold text-xl md:text-3xl mb-5">ABOUT US</h1>
            <h1 className="text-2xl md:text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              Touted as the number one destination for everything digital
              photography-related, Digital Photography Review is bursting at the
              virtual seams with all the sector's latest news and product
              reviews.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-warning rounded-md">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
