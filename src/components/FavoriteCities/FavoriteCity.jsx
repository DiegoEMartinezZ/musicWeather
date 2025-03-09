import React, { useContext } from "react";
import FavCitySettings from "./FavCitySettings";
import { MusicWeatherContext } from "../context/MusicWeatherContext";

const FavoriteCity = () => {
  const { arrayFavCities } = useContext(MusicWeatherContext);

  return (
    <>
      {arrayFavCities.length <= 0 ? (
        <h1 className="text-white"> No saved favorite cities :( </h1>
      ) : (
        <ul>
          {arrayFavCities.sort().map((city, idx) => (
            <FavCitySettings favoriteCity={city} key={idx} />
          ))}
        </ul>
      )}
    </>
  );
};

export default FavoriteCity;
