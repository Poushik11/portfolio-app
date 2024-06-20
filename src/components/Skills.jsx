// import React from "react";
import Reveal from "./Reveal";
import "./skillv.css"; // Import the CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container ">
      <div className="section-header text-center">
        <Reveal>
          <h1 className="title">Skills</h1>
        </Reveal>
      </div>

      <div className="section mb-10">
        <div className="section-title">
          <h1>Languages and Frameworks</h1>
        </div>
        <div className="grid">
          {[
            { className: "devicon-javascript-plain", name: "JavaScript" },
            { className: "devicon-react-original", name: "ReactJS" },
            { className: "devicon-nodejs-plain", name: "NodeJS" },
            { className: "devicon-express-original", name: "Express" },
            { className: "devicon-tailwindcss-plain", name: "TailwindCSS" },
            { className: "devicon-cplusplus-plain", name: "C/C++" },
            { className: "devicon-go-original-wordmark", name: "Golang" },
            { className: "devicon-java-plain", name: "Java" },
            { className: "devicon-python-plain", name: "Python" },
            { className: "devicon-nextjs-original-wordmark", name: "NextJS" },
            { className: "devicon-redux-original", name: "Redux" },
            { className: "devicon-html5-plain", name: "HTML5" },
            { className: "devicon-css3-plain", name: "CSS3" },
            { className: "devicon-bootstrap-plain", name: "Bootstrap" },
          ].map((item, index) => (
            <Reveal key={index}>
              <div className="icons">
                <i className={`${item.className} icon`}></i>
                <p>{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section mb-10">
        <div className="section-title">
          <h1>Databases</h1>
        </div>
        <div className="grid">
          {[
            { className: "devicon-firebase-plain", name: "Firebase" },
            { className: "devicon-mongodb-plain", name: "MongoDB" },
            { className: "devicon-mysql-plain", name: "MySQL" },
            { className: "devicon-redis-plain", name: "Redis" },
          ].map((item, index) => (
            <Reveal key={index}>
              <div className="icons">
                <i className={`${item.className} icon`}></i>
                <p>{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section mb-10">
        <div className="section-title">
          <h1>Others</h1>
        </div>
        <div className="grid">
          {[
            { className: "devicon-vscode-plain", name: "DSA" },
            { className: "devicon-git-plain", name: "Git/GitHub" },
            { className: "devicon-vscode-plain", name: "VS Code" },
            { className: "devicon-docker-plain", name: "Docker" },
            {
              className: "devicon-amazonwebservices-plain-wordmark",
              name: "AWS",
            },
          ].map((item, index) => (
            <Reveal key={index}>
              <div className="icons">
                <i className={`${item.className} icon`}></i>
                <p>{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
