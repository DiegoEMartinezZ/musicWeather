import React, { useContext } from "react";
import ButtonToViews from "../components/ui/buttons/ButtonToViews";
import Footer from "../components/footer/Footer";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { MusicWeatherContext } from "../components/context/MusicWeatherContext";

const Landing = () => {
  const { goToHome } = useContext(MusicWeatherContext);
  return (
    <>
      <section className="bg-gradient-to-b from-bright-sun-300 to-bright-sun-500  top-0 bottom-0 right-0 left-0">
        <div className="text-bright-sun-950 text-center flex flex-col items-center justify-center h-screen">
          <img
            src="/img/logoLight.png"
            alt="logo music weather"
            className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-72"
          />
          <ButtonToViews icon={faPlay} handler={goToHome} />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Landing;
