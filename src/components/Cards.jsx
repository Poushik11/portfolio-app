// import React from "react";
import "../styles/Card.css";

// eslint-disable-next-line react/prop-types
function Cards({ name, status, image }) {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img className="image" src={image} alt="" />
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{name}</p>
            <a href="#">{status}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
