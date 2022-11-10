import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Service from "./Service";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
