import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const LocationInfo = () => {
  const { locationData } = useContext(MusicWeatherContext);

  return (
    <>
      <section className=" py-2 flex items-center justify-center text-white bg-black w-fit px-5 m-auto rounded-xl 2xl:mt-44">
        <div className="flex items-center justify-between">
          <h3 className="font-sm text-sm"> {locationData.name} </h3>
          <FontAwesomeIcon
            icon={faLocationDot}
            className=" mx-4 text-bright-sun-400"
          />
          <h3 className="font-sm text-sm"> {locationData.country} </h3>
        </div>
      </section>
    </>
  );
};

export default LocationInfo;
