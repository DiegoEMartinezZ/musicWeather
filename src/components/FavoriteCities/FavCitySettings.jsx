import {
  faCaretDown,
  faEye,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import axios from "axios";
import BtnFavoriteCities from "../ui/buttons/BtnFavoriteCities";

const FavCitySettings = ({ favoriteCity, idx }) => {
  const {
    arrayFavCities,
    setWeatherData,
    goToInfo,
    setLocationData,
    deleteFavCity,
    setBtnFlag,
    setIsDay,
    setIsHumidity,
  } = useContext(MusicWeatherContext);
  const [showFavCityOptions, setShowFavCityOptions] = useState(false);

  //
  /*
    Handler to view options for each fav city
  */
  //
  const settingsFavCity = () => {
    setShowFavCityOptions(!showFavCityOptions);
  };

  const fetchACity = () => {
    const BACKEND_URL =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    // Ensure the favorite city exists in the array of favorite cities
    const isFavoriteCity = arrayFavCities.includes(favoriteCity);
    if (!isFavoriteCity) {
      console.error("Favorite city not found in the list of favorite cities.");
      return;
    }

    // Function to fetch weather data for the favorite city
    const fetchWeatherDataFavCity = async (cityName) => {
      try {
        if (!cityName) {
          return;
        }

        // Call the backend API to fetch weather data
        const response = await axios.get(`${BACKEND_URL}/api/weather`, {
          params: { city: cityName },
        });

        // Destructure and set the data
        const { current: weatherData, location: locationData } = response.data;
        setBtnFlag(false);
        setWeatherData(weatherData);
        setLocationData(locationData);
        setIsDay(weatherData.is_day);
        setIsHumidity(weatherData.humidity);

        // Navigate to the information page after successful fetch
        goToInfo();
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    // Fetch the weather data for the favorite city
    fetchWeatherDataFavCity(favoriteCity);
  };

  return (
    <>
      <ol
        key={idx}
        className="bg-bright-sun-400 text-black my-4 px-5 p-1 w-3/4 rounded-lg flex justify-around m-auto items-center lg:w-1/4"
      >
        <li className="flex justify-around">
          <div className="flex items-center">
            <h1>{favoriteCity}</h1>
            <FontAwesomeIcon
              onClick={settingsFavCity}
              icon={faCaretDown}
              className={`${
                showFavCityOptions === true ? "-rotate-90" : "rotate-0"
              } ml-2 `}
            />
          </div>
          {showFavCityOptions && (
            <section className="flex flex-row flex-nowrap ml-3">
              <BtnFavoriteCities handler={fetchACity} icon={faEye} />
              <BtnFavoriteCities
                handler={() => deleteFavCity(favoriteCity)}
                icon={faXmarkCircle}
              />
            </section>
          )}
        </li>
      </ol>
    </>
  );
};

export default FavCitySettings;
