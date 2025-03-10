import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const LocationInfo = () => {
  const { locationData, btnFlag } = useContext(MusicWeatherContext);

  return (
    <>
      <div className="2xl:mt-44">
        {!btnFlag && (
          <div className="font-base flex justify-center items-center text-sm w-fit m-auto p-1 rounded-xl px-3 my-2 bg-black text-blue">
            <FontAwesomeIcon
              icon={faStar}
              className="mr-2 text-bright-sun-400"
            />
            <h1>Favorite City</h1>
          </div>
        )}
        <section className=" py-2 flex items-center justify-center text-white bg-black w-fit px-5 m-auto rounded-xl">
          <div className="flex items-center justify-between">
            <h3 className="font-sm text-sm"> {locationData.name} </h3>
            <FontAwesomeIcon
              icon={faLocationDot}
              className=" mx-4 text-bright-sun-400"
            />
            <h3 className="font-sm text-sm"> {locationData.country} </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationInfo;
