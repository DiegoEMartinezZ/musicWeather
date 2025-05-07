import { useContext } from "react";
import { MusicWeatherContext } from "../components/context/MusicWeatherContext";
import ButtonToViews from "../components/ui/buttons/ButtonToViews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer/Footer";

const Page404 = () => {
  const { goToHome } = useContext(MusicWeatherContext);
  return (
    <>
      <div className="inset-0 w-auto h-screen  bg-cover bg-center bg-night-cold-sm md:bg-night-cold-md lg:bg-night-cold-lg">
        <section className="flex flex-col items-center justify-center h-screen bg-black/70">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-bright-sun-200 h-8 w-auto p-2"
          />
          <h1 className="px-5 my-3 py-3 text-sm bg-bright-sun-200 text-center font-semibold opacity-80 text-black rounded-xl w-72 ">
            An error ocurred, please go back or press the home button :)
          </h1>
          <ButtonToViews icon={faHome} handler={goToHome} />
        </section>
      </div>
      <Footer year={2025} />
    </>
  );
};

export default Page404;
