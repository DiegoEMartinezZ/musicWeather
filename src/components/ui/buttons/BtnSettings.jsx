import React from "react";

const BtnSettings = ({ handler, txt }) => {
  return (
    <ol onClick={handler} className="text-blue cursor-pointer ">
      {txt}
    </ol>
  );
};

export default BtnSettings;
