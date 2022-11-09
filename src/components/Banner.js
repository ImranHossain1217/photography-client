import React from "react";
import img1 from "../assets/slider/slider-1.jpg";
import img2 from "../assets/slider/slider-2.jpg";
import img3 from "../assets/slider/slider-3.jpg";
import img4 from "../assets/slider/slider-4.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-md banner-container">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img1} className="w-full" alt="" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            CREATED <br /> WITH <br /> PHOTOGRAPHY
          </h1>
        </div>
        <div className="absolute flex justify-end transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:top-1/2">
          <p className="text-white md:text-xl mt-2">
            We designed Photography theme to make it works especially for
            photography & portfolio site. Here are a few included examples that
            you can import with one click.
          </p>
        </div>
        <div className="absolute flex justify-start transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:block hidden">
          <button className="btn btn-warning mr-5">Discover More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img2} className="w-full" alt="" />
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            CREATED <br /> WITH <br /> PHOTOGRAPHY
          </h1>
        </div>
        <div className="absolute flex justify-end transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:top-1/2">
          <p className="text-white md:text-xl mt-2">
            We designed Photography theme to make it works especially for
            photography & portfolio site. Here are a few included examples that
            you can import with one click.
          </p>
        </div>
        <div className="absolute flex justify-start transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:block hidden">
          <button className="btn btn-warning mr-5">Discover More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img3} className="w-full" alt="" />
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            CREATED <br /> WITH <br /> PHOTOGRAPHYg
          </h1>
        </div>
        <div className="absolute flex justify-end transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:top-1/2">
          <p className="text-white md:text-xl mt-2">
            We designed Photography theme to make it works especially for
            photography & portfolio site. Here are a few included examples that
            you can import with one click.
          </p>
        </div>
        <div className="absolute flex justify-start transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:block hidden">
          <button className="btn btn-warning mr-5">Discover More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img4} className="w-full" alt="" />
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            CREATED <br /> WITH <br /> PHOTOGRAPHY
          </h1>
        </div>
        <div className="absolute flex justify-end transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:top-1/2">
          <p className="text-white md:text-xl mt-2">
            We designed Photography theme to make it works especially for
            photography & portfolio site. Here are a few included examples that
            you can import with one click.
          </p>
        </div>
        <div className="absolute flex justify-start transform w-1/2 -translate-y-1/2 left-20 top-2/3 md:block hidden">
          <button className="btn btn-warning mr-5">Discover More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
