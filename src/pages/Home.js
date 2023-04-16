import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi , I am Prateek Savanur</h2>
        <div className="prompt">
          <p>Student in DSCE. Passionate about Blockchain technologies</p>
          <a href="https://linkedin.com/in/prateek-p-savanur-50b78b24a">
            <LinkedInIcon />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prateek.savanur@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/PrateekSavanur">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">Front-End</li>
          <span>
            HTML-Beginner, CSS - Beginner, Javascript - Beginner, React -
            Beginner
          </span>
        </ol>
        <ol className="list">
          <li className="item">Back-End</li>
          <span>
            Nodejs - Beginner, Hardhat - intermediate, ethersjs - intermediate,
            mocha - intermediate
          </span>
        </ol>
        <ol className="list">
          <li className="item">Languages</li>
          <span>Solidity - intermediate, Java , Javascript , C++ ,C</span>
        </ol>
      </div>
    </div>
  );
}

export default Home;
