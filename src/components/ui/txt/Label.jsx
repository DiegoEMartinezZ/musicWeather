import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Label = ({ icon, txt }) => {
  return (
    <label className=" text-bright-sun-400 m-2 mt-8 font-semibold uppercase text-sm flex items-center justify-center">
      <FontAwesomeIcon icon={icon} className="px-1" /> {txt}
    </label>
  );
};

export default Label;
