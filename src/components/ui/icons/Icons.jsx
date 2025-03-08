import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icons = ({ iconName, handler }) => {
  return (
    <FontAwesomeIcon
      icon={iconName}
      className=" mx-4 cursor-pointer text-blue "
      onClick={handler}
    />
  );
};

export default Icons;
