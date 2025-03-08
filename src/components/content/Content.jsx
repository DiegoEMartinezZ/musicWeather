import React, { useContext } from "react";
import SectionCityCountry from "../sectionCityCountry/SectionCityCountry";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import ButtonToViews from "../ui/buttons/ButtonToViews";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

const Content = () => {
  const { checkCityInfo, loading } = useContext(MusicWeatherContext);
  return (
    <section className=" bg-black h-screen text-center">
      <div className="text-dark text-center flex flex-col items-center justify-center h-screen">
        <img src="/img/logoDark.png" />

        <SectionCityCountry />
        {loading ? (
          <div className="flex py-4 items-center justify-center space-x-2">
            <div
              className="w-2 h-2 bg-blue rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        ) : (
          <ButtonToViews handler={checkCityInfo} icon={faPlay} />
        )}
      </div>
    </section>
  );
};

export default Content;
