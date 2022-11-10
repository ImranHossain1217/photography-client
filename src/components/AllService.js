import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const AllService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-5xl my-4 font-semibold">
          Our All Services
        </h1>
        <p>
          Adobe, Disney, Kleinfeld Bridal, TRESemmé, Panasonic, Cosmopolitan,
          Copella, McVitie's, OK! Magazine, William Collins, My Modern Met, Rock
          n Roll Bride, Love My Dress, HELLO! Magazine, Digital Photographer
          Magazine
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllService;
