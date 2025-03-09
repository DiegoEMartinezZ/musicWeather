import React from "react";
import {
  faBehance,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../socialMedia/SocialMedia";

const Footer = () => {
  return (
    <>
      <footer
        className="
          text-blue sticky bottom-0 right-0 left-0 bg-black p-5 text-center py-3 text-xs italic font-light lg:w-1/3 lg:block lg:m-auto"
      >
        <div className="flex justify-around my-2 px-4">
          <SocialMedia
            name={faInstagram}
            url={"https://www.instagram.com/lowoncyan_"}
          />
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
        </div>
        <h4 className="text-xs"> Diego Martínez - 2025 </h4>
      </footer>
    </>
  );
};

export default Footer;
