import React from "react";
import "./Projects.scss";
import data from "./Data";
import { Link } from "react-router-dom";

const Projects = ({ darkMode }) => {
  const name = "<My Projects/>";
  return (
    <div className={`projects ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>{name}</h1>
      <div className="projects_container">
        <div className="projects_container_content">
          {data.map((item, i) => (
            <div key={i} className="projects_container_content_items">
              <div className="projects_container_content_items_pic">
                <img src={item.pic} alt="" />
              </div>
              <div className="projects_container_content_items_text">
                <div className="projects_container_content_items_text_name">{item.name}</div>
                <div className="projects_container_content_items_text_details">
                  <p>{item.details}</p>
                </div>
                <div className="projects_container_content_items_text_link">
                  <Link to={item.link}>{item.name}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
