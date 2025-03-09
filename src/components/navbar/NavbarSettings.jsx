import React, { useContext } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Icons from "../ui/icons/Icons";

const NavbarSettings = () => {
  const { goToHome } = useContext(MusicWeatherContext);
  return (
    <nav className="text-bright-sun-400  flex justify-end items-center p-5">
      <div>
        <Icons iconName={faHome} handler={goToHome} />
      </div>
    </nav>
  );
};

export default NavbarSettings;
