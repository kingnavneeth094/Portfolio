import React from "react";
import insta from './images/instagram.png';
import linkedIn from './images/linkedin.png';
import github from './images/github.png';
import html from "./tech/HTML.png";
import css from "./tech/CSS.png";
import javascript from "./tech/JAVASCRIPT.png";
import react from "./tech/REACT.png";
import node from "./tech/NODE.png";
import python from "./tech/PYTHON.png";
import me1 from "./images/me1.jpg"; // Import the image file
import "./Home.scss";

const Home = ({ darkMode }) => {
  return (
    <div className={`home_wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="home_wrapper_text">
        <div className="home_wrapper_text_above">
          <div className="home_wrapper_text_above_text">
            <h1>Full Stack Developer</h1>
            <p>
              Hey! I'm Navneeth KS. A passionate full stack web developer based
              in Bengaluru, India 🏠
            </p>
            <div className="social_links">
              <a
                href="https://www.instagram.com/nuclear_navneeth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/navneeth-ks-69441b28b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/kingnavneeth094"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="home_wrapper_text_above_pic">
            <img src={me1} alt="Navneeth" />
          </div>
        </div>
        <div className="home_wrapper_text_below">
          <h3>Tech Stack |</h3>
          <div className="tech_icons">
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={javascript} alt="JavaScript" />
            <img src={react} alt="React" />
            <img src={node} alt="Node.js" />
            <img src={python} alt="Python" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



