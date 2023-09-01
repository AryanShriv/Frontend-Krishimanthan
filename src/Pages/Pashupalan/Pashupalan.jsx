import React from "react";
// import "./Pashupalan.css";
import { mainCardData } from "../../Dummy";
import { lifestyleData } from "../../DummyData";

function Pashupalan() {
  return (
    <>
      <div className="heading">
        <p>शीर्षक - पशुपालन</p>
      </div>
      <div className="MainCardContainer">
        {mainCardData.map((card, index) => (
          <div className="MainCard" key={index}>
            <div className="ImgHeading">
              <div className="CardImage">
                <img src={card.image} alt="loading" />
              </div>

              <div className="CardHeading">
                <h5>{card.heading}</h5>
              </div>
            </div>
            <div className="description">
              <p>{card.description}</p>
              <button>
                <a href="#" role="button">
                  आगे पढ़ें
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* National News */}

      <div id="National" className="LocalNewsPashupalan">
        <h2 className="heading">राष्ट्रीय समाचार</h2>
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

      {/* Pradeshik News */}

      <div id="Pradeshik" className="LocalNewsPashupalan">
        <h2 className="heading">प्रादेशिक समाचार</h2>
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

      {/* Yojnaa News */}

      <div id="Yojnaa" className="LocalNewsPashupalan">
        <h2 className="heading">
          राष्ट्र एवं राज्य स्तर पर संचालित पशुपालन की योजनाएं
        </h2>
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

      {/* Success News */}

      <div id="Success" className="LocalNewsPashupalan">
        <h2 className="heading">सफलता की कहानी</h2>
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

      {/* Milk Work News */}

      <div id="Milk" className="LocalNewsPashupalan">
        <h2 className="heading">
          दुग्ध व्यवसाय में उल्लेखनीय कार्य करने वाले सरकारी एवं निजी संस्थानों
          की जानकारी
        </h2>
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

      {/* Section Navigation */}
      <div className="section-navigation">
        <h2 className="heading">इस पृष्ठ पर</h2>
        <ul>
          <li>
            <a href="#National">राष्ट्रीय समाचार</a>
          </li>
          <li>
            <a href="#Pradeshik">प्रादेशिक समाचार</a>
          </li>
          <li>
            <a href="#Yojnaa">
              राष्ट्र एवं राज्य स्तर पर संचालित पशुपालन की योजनाएं
            </a>
          </li>
          <li>
            <a href="#Success">सफलता की कहानी</a>
          </li>

          <li>
            <a href="#Milk">
              दुग्ध व्यवसाय में उल्लेखनीय कार्य करने वाले सरकारी एवं निजी
              संस्थानों की जानकारी
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Pashupalan;
