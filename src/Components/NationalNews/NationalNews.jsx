import React from "react";
import { lifestyleData } from "../../DummyData"; // Update the path
import "./NatinalNews.css"

const LifestyleCard = () => {
  return (
    <div className="LocalNews">
      <h2 className="heading">स्थानीय समाचार</h2>
      <div className="cardContainer">
        {lifestyleData.map((data) => (
          <div className="card" key={data.title}>
            <img src={data.cover} alt="Loading" />
            <div className="card-content">
              <h5>{data.title}</h5>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleCard;
