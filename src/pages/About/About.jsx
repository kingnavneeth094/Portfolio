import React from "react";
import "./About.scss";

const About = () => {
    const name = "<Navneeth/>"
    return (
        <div className="about">
            <div className="about_container">
                <h1>{name}</h1>
                <div className="about_container_content">
                    <p>
                        <h2>Innovative Thinker | Problem Solver | Tech Enthusiast</h2>
                        <br />
                        I am deeply fascinated by the rapid advancements in technology and how they are reshaping our world. My passion for tech extends beyond just using the latest gadgets; I am constantly exploring emerging trends, experimenting with new tools and frameworks, and seeking innovative solutions to real-world problems. I believe that technology has the power to drive positive change and create a better future for everyone. I am committed to staying at the forefront of these developments, learning new skills, and contributing to innovative projects that make a meaningful impact.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About;