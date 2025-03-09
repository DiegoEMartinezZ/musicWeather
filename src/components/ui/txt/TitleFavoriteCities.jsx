import React from "react";

const TitleFavoriteCities = ({ favCity }) => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <h1 className="text-2xl font-semibold">{favCity} </h1>
      </div>
    </>
  );
};

export default TitleFavoriteCities;
