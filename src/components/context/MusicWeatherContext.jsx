import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import countryDB from "../../test/weather-test.json";
import { getBackgroundImage } from "../../utils/getBackgroundImage";

const MusicWeatherContext = createContext();

const MusicWeatherProvider = ({ children }) => {
  //
  /*
    Navigation around the views of the app
  */
  //
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
    setCityName("");
    setWeatherData([]);
    setBtnFlag(true);
    setBackgrounds({ sm: "", md: "", lg: "" });
    setIsDay(null);
    setIsHumidity(null);
    setLoading(true);
  };

  const goToInfo = () => {
    navigate("/info");
  };

  const goToFavoriteCities = () => {
    navigate("/favorite");
  };

  //
  /*
    Light and Dark Mode
  */
  //
  const [btnDarkMode, setBtnDarkMode] = useState(true);
  const [theme, setTheme] = useState("light");

  const darkModeTrigger = () => {
    setBtnDarkMode(!btnDarkMode);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [countryCode, setCountryCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [citiesArray, setCitiesArray] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);
  //
  //
  /* From this point I would applied a JSON file as a TEST file with some countries and
    cities, the main objective for doing this is that when I found a proper API
   for cities I would use it with the Country API for a better performance.  
   This will not interfere with the purpose and fuctionality of the app.
   */
  //
  //

  //
  /*
    Country and city handlers:
  */
  //

  const countryHandler = (e) => {
    setCountryCode(e.target.value);
  };

  const cityHandler = (e) => {
    setCityName(e.target.value);
  };

  const checkCityInfo = () => {
    setTimeout(() => goToInfo(), 1000);
  };

  //
  /*
     Get the info of the city selected
  */
  //

  // useState to change dynamically the backgorund image when day is night or daylight
  const [isDay, setIsDay] = useState(null);
  const [isHumidity, setIsHumidity] = useState(null);
  const [backgrounds, setBackgrounds] = useState({ sm: "", md: "", lg: "" });

  useEffect(() => {
    const BACKEND_URL =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    const fetchWeatherData = async (cityName) => {
      if (!cityName) return;

      try {
        const response = await axios.get(`${BACKEND_URL}/api/weather`, {
          params: { city: cityName },
        });

        const { location, current } = response.data;
        setLoading(false);
        setLocationData(location);
        setWeatherData(current);
        setIsDay(current.is_day);
        setIsHumidity(current.humidity);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    if (countryCode) {
      const countryByCode = countryDB.find(
        (country) => country.code === countryCode
      );
      const cities = countryByCode ? countryByCode.cities : [];
      setCitiesArray(cities);
    }

    if (cityName) {
      fetchWeatherData(cityName);
    }
  }, [countryCode, cityName]);

  //
  /*
  Update the background image depending of the humidity and time of day
  */
  //
  useEffect(() => {
    if (isDay !== null && isHumidity !== null) {
      const bg = getBackgroundImage(isDay, isHumidity);
      setBackgrounds(bg);
    }
  }, [isDay, isHumidity]);

  //
  /*
     Get the cities array, of a country selected, in alphabethical order:
  */
  //

  const citiesInOrder = citiesArray.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  });

  //
  /*
     Get the country array in alphabethical order:
  */
  //

  const countriesInOrder = countryDB.sort((a, b) => {
    if (a.country.toLowerCase() < b.country.toLowerCase()) return -1;
    if (a.country.toLowerCase() > b.country.toLowerCase()) return 1;
    return 0;
  });

  //
  /*
    Search the weather info for the country and the city selected: 
  */
  //

  const countrySelected = countryDB.filter(
    (oneCountry) => oneCountry.code === countryCode
  );

  const countryName = countrySelected.map((oneCountry) => oneCountry.country);

  //
  /*
    Different states at the time saving a favorite city
  */
  //

  const [btnFlag, setBtnFlag] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  //
  /*
   Handler for adding fav cities:
   */
  //

  const [arrayFavCities, setArrayFavCities] = useState(() => {
    const savedFavCities = localStorage.getItem("arrayFavCities");
    return savedFavCities ? JSON.parse(savedFavCities) : [];
  });

  //
  /*
   Update the array when a city is added:
   */
  //
  useEffect(() => {
    const arrayFavCitiesNoDupe = arrayFavCities.filter((oneCity, idx) => {
      return arrayFavCities.indexOf(oneCity) === idx;
    });
    setArrayFavCities(arrayFavCitiesNoDupe);
  }, []);

  useEffect(() => {
    localStorage.setItem("arrayFavCities", JSON.stringify(arrayFavCities));
  }, [arrayFavCities]);

  //
  /*
    Delete fav city from fav city array: 
  */
  //

  const deleteFavCity = (favoriteCity) => {
    const newArrayFavCities = arrayFavCities.filter(
      (oneCity) => oneCity !== favoriteCity
    );
    setArrayFavCities(newArrayFavCities);
  };

  //
  /*
   Check if the selected city exist already in the Fav City
   to change the status of the btn
   */
  //

  useEffect(() => {
    for (let i = 0; i < arrayFavCities.length; i++) {
      const found = arrayFavCities[i] === cityName;
      if (found) {
        setBtnFlag(false);
        break;
      } else if (!found) {
        setBtnFlag(true);
      }
    }
  }, [cityName]);

  //
  /*
   Handler to save that city in view -> Favorite Cities, NO repeat cities
   */
  //

  const favCity = () => {
    setArrayFavCities([...arrayFavCities, cityName]);

    if (btnFlag === true) {
      setBtnFlag(false);
      setMessage(`${cityName} Added to favorite cities!`);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  return (
    <MusicWeatherContext.Provider
      value={{
        loading,
        goToHome,
        goToInfo,
        goToFavoriteCities,
        darkModeTrigger,
        btnDarkMode,
        theme,
        countryHandler,
        cityHandler,
        countriesInOrder,
        citiesInOrder,
        citiesArray,
        countryName,
        cityName,
        setCityName,
        countryCode,
        weatherData,
        setWeatherData,
        checkCityInfo,
        btnFlag,
        setBtnFlag,
        favCity,
        showMessage,
        message,
        arrayFavCities,
        locationData,
        setLocationData,
        deleteFavCity,
        backgrounds,
        isDay,
        setIsDay,
        isHumidity,
        setIsHumidity,
        btnFlag,
      }}
    >
      {children}
    </MusicWeatherContext.Provider>
  );
};

export { MusicWeatherContext, MusicWeatherProvider };
