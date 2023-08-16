import React from "react";
import "./Sehkarita.css";
import { mainCardData } from "../../Dummy";
import { lifestyleData } from "../../DummyData";

function Sehkarita() {
  return (
    <>
      <div className="heading">
        <p>शीर्षक - सहकारिता</p>
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

      <div id="National" className="LocalNewsSehkarita">
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

      <div id="Pradeshik" className="LocalNewsSehkarita">
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

      {/* Success News */}

      <div id="Success" className="LocalNewsSehkarita">
        <h2 className="heading">सफल सहकारी समितियों की कहानियां</h2>
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

      {/* International News */}

      <div id="International" className="LocalNewsSehkarita">
        <h2 className="heading">
          अंतरराष्ट्रीय स्तर पर संचालित सहकारी गतिविधियां
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

      {/* New News */}

      <div id="New" className="LocalNewsSehkarita">
        <h2 className="heading">सहकारिता में हो रहे नवाचार</h2>
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

      {/* Praise News */}

      <div id="Praise" className="LocalNewsSehkarita">
        <h2 className="heading">
          किसी सरकारी कर्मचारी ने यदि कोई उल्लेखनीय कार्य किया है तो उसकी
          जानकारी
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

      {/* Department News */}

      <div id="Department" className="LocalNewsSehkarita">
        <h2 className="heading">
          सहकारिता विभाग द्वारा संचालित योजनाओं की जानकारी
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
            <a href="#Success">सफल सहकारी समितियों की कहानियां</a>
          </li>
          <li>
            <a href="#International">
              अंतरराष्ट्रीय स्तर पर संचालित सहकारी गतिविधियां
            </a>
          </li>
          <li>
            <a href="#New">सहकारिता में हो रहे नवाचार</a>
          </li>
          <li>
            <a href="#Praise">
              किसी सरकारी कर्मचारी ने यदि कोई उल्लेखनीय कार्य किया है तो उसकी
              जानकारी
            </a>
          </li>
          <li>
            <a href="#Department">
              सहकारिता विभाग द्वारा संचालित योजनाओं की जानकारी
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sehkarita;