import React from "react";

import Footer from "../components/footer/Footer";
import InfoContent from "../components/content/InfoContent";

const InfoView = () => {
  return (
    <>
      <section className="text-center items-center justify-center h-screen">
        <InfoContent />
        <Footer />
      </section>
    </>
  );
};

export default InfoView;
