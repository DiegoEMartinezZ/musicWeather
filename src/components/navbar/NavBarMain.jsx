import React, { useContext, useState } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import BtnSettings from "../ui/buttons/BtnSettings";
import DarkMode from "../ui/icons/DarkMode";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Title from "../ui/txt/Title";
import SubtitleSettings from "../ui/txt/SubtitleSettings";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const NavBarMain = () => {
  const { goToHome, goToFavoriteCities, theme } =
    useContext(MusicWeatherContext);

  const [showSettings, setShowSettings] = useState(false);
  const [settingsIcon, setSettingsIcon] = useState(true);

  const visibleSettings = () => {
    setShowSettings(!showSettings);
    setSettingsIcon(!settingsIcon);
  };

  const conditionSettings = settingsIcon == true ? faStar : faXmark;

  return (
    <nav className="flex justify-between items-center px-5 py-3 text-blue bg-black">
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={goToHome}
        className="text-bright-sun-400
         mx-4 cursor-pointer"
      />

      <img
        src="/img/logoDark.png"
        alt="logo music weather"
        className="h-auto w-20"
      />

      <div>
        <FontAwesomeIcon
          icon={conditionSettings}
          onClick={visibleSettings}
          className="text-bright-sun-400
           mx-4 cursor-pointer "
        />
      </div>

      <ul
        className={`${
          showSettings == true ? "block" : "hidden"
        } bg-black p-3 rounded-lg text-white text-right absolute right-4 top-16`}
      >
        <BtnSettings handler={goToFavoriteCities} txt={"Favorite Cities"} />
      </ul>
    </nav>
  );
};

export default NavBarMain;
