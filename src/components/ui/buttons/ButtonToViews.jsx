import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonToViews = ({ icon, handler }) => {
  return (
    <>
      <button
        className="text-black p-1 px-4 rounded-full m-3 bg-blue"
        onClick={handler}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};

export default ButtonToViews;
