import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Label = ({ icon, txt }) => {
  return (
    <label className=" text-blue m-2 mt-8 font-semibold uppercase text-sm flex items-center justify-center">
      <FontAwesomeIcon icon={icon} className="px-1" /> {txt}
    </label>
  );
};

export default Label;
