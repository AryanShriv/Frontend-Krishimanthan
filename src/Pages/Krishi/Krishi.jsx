import React from "react";
import "./Krishi.css";
import { mainCardData } from "../../Dummy";
import { lifestyleData } from "../../DummyData";

function Krishi() {
  return (
    <>
      <div className="heading">
        <p>शीर्षक - कृषि</p>
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

      <div id="National" className="LocalNewsKrishi">
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

      <div id="Pradeshik" className="LocalNewsKrishi">
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

      {/* Corporate News */}

      <div id="Corporate" className="LocalNewsKrishi">
        <h2 className="heading">कारपोरेट कहानियां की गतिविधियां</h2>
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

      <div id="Success" className="LocalNewsKrishi">
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

      {/* Yojnaa News */}

      <div id="Yojnaa" className="LocalNewsKrishi">
        <h2 className="heading">कृषि विभाग द्वारा संचालित योजनाएं</h2>
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

      <div id="New" className="LocalNewsKrishi">
        <h2 className="heading">कृषि में हो रहे नवाचार</h2>
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

      {/* Crops News */}

      <div id="Crops" className="LocalNewsKrishi">
        <h2 className="heading">फसल तकनीक</h2>
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

      {/* Problems News */}

      <div id="Problems" className="LocalNewsKrishi">
        <h2 className="heading">खेती बाड़ी की समस्याओं का समाधान</h2>
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

      {/* machinery News */}

      <div id="Machinery" className="LocalNewsKrishi">
        <h2 className="heading">कृषि मशीनरी</h2>
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
            <a href="#Corporate">कारपोरेट कहानियां की गतिविधियां</a>
          </li>
          <li>
            <a href="#Success">सफलता की कहानी</a>
          </li>
          <li>
            <a href="#Yojnaa">कृषि विभाग द्वारा संचालित योजनाएं</a>
          </li>
          <li>
            <a href="#New">कृषि में हो रहे नवाचार</a>
          </li>
          <li>
            <a href="#Crop">फसल तकनीक</a>
          </li>
          <li>
            <a href="#Problems">खेती बाड़ी की समस्याओं का समाधान</a>
          </li>
          <li>
            <a href="#Machinery">कृषि मशीनरी</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Krishi;