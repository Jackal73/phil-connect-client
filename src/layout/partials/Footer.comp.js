import React from "react";
import tikkitLogo from "../../assets/img/tikkitLogo.png";
import freedomLogo from "../../assets/img/freedom-title-logo.png";
import "./footer.style.css";

export const Footer = () => {
  return (
    <>
      <div className="text-center copyright">
        <img
          src={tikkitLogo}
          className="mt-1 mb-1 ml-1 mr-1"
          alt="logo"
          height="20px"
        />
        <img
          src={freedomLogo}
          className="mt-1 mb-1 mr-3 cursor"
          alt="logo"
          height="16px"
          onClick={() => window.open("https://freedom-title.com", "_blank")}
        />
      </div>
      <div className="text-center copyright">
        <span className="font6 mb-2 mr-1">&copy;2023 by </span>
        <a
          href="https://shawnKebel-portfolio.netlify.app"
          alt="link"
          className="mt-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;kblDesigners&nbsp;
        </a>
        <span className="font6 ml-1">&nbsp;All Rights Reserved.</span>
      </div>
    </>
  );
};
