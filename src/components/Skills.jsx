// import React from "react";
import Cards from "./Cards";
import "../styles/Card.css";

function Skills() {
  const skillsData = [
    {
      name: "CSS",
      status: "Completed",
      image: "https://cdn-icons-png.flaticon.com/128/919/919826.png",
    },
    {
      name: "HTML",
      status: "Completed",
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
    },
    {
      name: "JAVA",
      status: "Ongoing",
      image: "https://cdn-icons-png.flaticon.com/128/919/919854.png",
    },
    {
      name: "JAVASCRIPT",
      status: "Completed",
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      name: "NodeJS",
      status: "Completed",
      image: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
    },
    {
      name: "ExpressJs",
      status: "Ongoing",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=avif&w=512",
    },
    {
      name: "React",
      status: "Ongoing",
      image: "https://img.icons8.com/?size=2x&id=NfbyHexzVEDk&format=png",
    },
    {
      name: "TailwindCss",
      status: "Ongoing",
      image: "https://img.icons8.com/?size=2x&id=WoopfRcDj3RF&format=png",
    },
    {
      name: "MongoDB",
      status: "Ongoing",
      image: "https://img.icons8.com/?size=2x&id=74402&format=png",
    },
    {
      name: "Python",
      status: "Moderate",
      image: "https://cdn-icons-png.flaticon.com/128/3098/3098090.png",
    },
    {
      name: "Cloud",
      status: "Completed",
      image: "https://cdn-icons-png.flaticon.com/128/3211/3211343.png",
    },
    {
      name: "Git",
      status: "Completed",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-git-18-1175219.png?f=avif&w=512",
    },
  ];

  return (
    <div className="skills-section">
      <p className="skill-title">Skills:</p>
      <div className="flex">
        {skillsData.map((skill, index) => (
          <Cards
            key={index}
            name={skill.name}
            status={skill.status}
            image={skill.image}
          />
        ))}
        {/* <div className="shadow"></div>
        <div className="cat">
          <div className="ear"></div>
          <div className="eye"></div>
          <div className="mouth"></div>
          <div className="nose"></div>
          <div className="tail"></div>
          <div className="body"></div>
          <div className="bubble"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
