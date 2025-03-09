import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";

const Home = () => {
  return (
    <>
      <section className="text-center items-center justify-center h-screen">
        <Navbar />
        <Content />
        <Footer />
      </section>
    </>
  );
};

export default Home;
