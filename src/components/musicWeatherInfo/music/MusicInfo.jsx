import {
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons/faBackwardStep";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";
import { useContext } from "react";

const MusicInfo = () => {
  const { music, isPlaying } = useContext(MusicWeatherContext);
  return (
    <>
      <section className="mx-3">
        <div className="w-fit relative bg-black text-left rounded-xl px-5 py-1 m-auto">
          <div className="flex items-center justify-center py-1">
            <FontAwesomeIcon
              icon={faMusic}
              className="p-2 bg-bright-sun-400 text-white mr-4 rounded-full h-4 w-4"
            />
            <section className="text-left ">
              <h1 className="text-sm font-semibold text-blue ">Song Name</h1>
              <h2 className="text-xs font-light text-white">Band's name</h2>
            </section>
          </div>
        </div>
      </section>
      <section className="w-fit m-auto">
        <div className="bg-black py-3 flex justify-around rounded-xl items-center my-5 text-sm">
          <FontAwesomeIcon
            icon={faBackwardStep}
            className="mx-5 text-white cursor-pointer"
          />
          <FontAwesomeIcon
            onClick={music}
            icon={isPlaying === true ? faPlay : faPause}
            className="mx-5 text-bright-sun-400 cursor-pointer"
          />
          <FontAwesomeIcon icon={faForwardStep} className="mx-5 text-white" />
        </div>
      </section>
    </>
  );
};

export default MusicInfo;
