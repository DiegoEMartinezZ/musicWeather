import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonToViews = ({ icon, handler }) => {
  return (
    <>
      <button
        className="text-black px-3 p-2 rounded-full m-2 text-sm bg-blue"
        onClick={handler}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};

export default ButtonToViews;
