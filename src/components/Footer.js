import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/prateek__savanur_/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/prateek_savanur">
          <TwitterIcon />
        </a>
        <a href="https://linkedin.com/in/prateek-p-savanur-50b78b24a">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/PrateekSavanur">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; Prateek Savanur </p>
    </div>
  );
}

export default Footer;
