import React from "react";
import NavbarSettings from "../components/navbar/NavbarSettings";
import FavoriteCity from "../components/FavoriteCities/FavoriteCity";
import Title from "../components/ui/txt/Title";
import Footer from "../components/footer/Footer";

const FavoriteCities = () => {
  return (
    <section className="bg-black text-center h-screen">
      <NavbarSettings />
      <Title title={"My Favorite Cities"} />
      <FavoriteCity />
      <Footer />
    </section>
  );
};

export default FavoriteCities;
