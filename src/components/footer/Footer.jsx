import React from "react";
import {
  faBehance,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../socialMedia/SocialMedia";

const Footer = ({ year }) => {
  return (
    <>
      <footer
        className="
          text-bright-sun-400 absolute bottom-0 right-0 left-0 bg-black/50 text-center py-2 text-xs italic font-light lg:py-3 lg:px-52 lg:block lg:m-auto"
      >
        <div className="flex justify-around mx-12 items-center my-2 sm:mx-52 xl:mx-96">
          <SocialMedia
            name={faLinkedin}
            url={"https://www.linkedin.com/in/diegomz/"}
          />

          <SocialMedia
            name={faGithub}
            url={"https://github.com/DiegoEMartinezZ"}
          />

          <SocialMedia
            name={faBehance}
            url={"https://www.behance.net/lowoncyan_"}
          />

          <SocialMedia
            name={faInstagram}
            url={"https://www.instagram.com/lowoncyan_"}
          />
        </div>
        <h4 className="text-xs my-2 xl:my-0"> Diego Martínez - {year} </h4>
      </footer>
    </>
  );
};

export default Footer;
