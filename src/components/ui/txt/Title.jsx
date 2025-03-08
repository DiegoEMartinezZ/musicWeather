import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-center text-blue">
        <h1 className="text-2xl font-bold my-4">{title} </h1>
      </div>
    </>
  );
};

export default Title;
