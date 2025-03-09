import { useContext, useState } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const NavBarMain = () => {
  const { goToHome, goToFavoriteCities } = useContext(MusicWeatherContext);

  const [showSettings, setShowSettings] = useState(false);
  const [settingsIcon, setSettingsIcon] = useState(true);

  const visibleSettings = () => {
    setShowSettings(!showSettings);
    setSettingsIcon(!settingsIcon);
  };

  const conditionSettings = settingsIcon == true ? faStar : faXmark;

  return (
    <nav className="flex justify-between items-center px-5 py-3 text-blue bg-black/50">
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={goToHome}
        className="text-bright-sun-400
         mx-4 cursor-pointer"
      />

      <h1 className="font-light">Music Weather 1.0</h1>

      <div>
        <FontAwesomeIcon
          icon={conditionSettings}
          onClick={goToFavoriteCities}
          className="text-bright-sun-400
           mx-4 cursor-pointer "
        />
      </div>
    </nav>
  );
};

export default NavBarMain;
