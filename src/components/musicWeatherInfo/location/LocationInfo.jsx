import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";
import TitleFavoriteCities from "../../ui/txt/TitleFavoriteCities";

const LocationInfo = () => {
  const { locationData } = useContext(MusicWeatherContext);

  return (
    <>
      <section className=" py-2 flex flex-col text-bright-sun-300 bg-black w-fit px-5 m-auto rounded-lg justify-center items-center 2xl:mt-44">
        <TitleFavoriteCities favCity={locationData.name} />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2 " />
          <h3 className="font-sm text-sm"> {locationData.country} </h3>
        </div>
      </section>
    </>
  );
};

export default LocationInfo;
