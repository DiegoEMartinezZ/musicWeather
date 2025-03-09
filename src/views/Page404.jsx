import { useContext } from "react";
import { MusicWeatherContext } from "../components/context/MusicWeatherContext";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import ButtonToViews from "../components/ui/buttons/ButtonToViews";

const Page404 = () => {
  const { goToHome } = useContext(MusicWeatherContext);
  return (
    <div className="text-bright-sun-950 text-center flex flex-col items-center justify-center h-screen">
      <h1 className="py-2">
        An error ocurred, please go back or press the button below.
      </h1>
      <ButtonToViews icon={faArrowLeft} handler={goToHome} />
    </div>
  );
};

export default Page404;
