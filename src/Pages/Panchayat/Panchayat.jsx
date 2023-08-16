import React from "react";
import "./Panchayat.css";
import { mainCardData } from "../../Dummy";
import { lifestyleData } from "../../DummyData";

function Panchayat() {
  return (
    <>
      <div className="heading">
        <p>शीर्षक - पंचायत</p>
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

      <div id="National" className="LocalNewsPanchayat">
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

      <div id="Pradeshik" className="LocalNewsPanchayat">
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

      <div id="Yojnaa" className="LocalNewsPanchayat">
        <h2 className="heading">सफल पंचायतों की कहानियां</h2>
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

      <div id="Success" className="LocalNewsPanchayat">
        <h2 className="heading">पंचायतों में हो रहे नवाचार</h2>
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

      <div id="Yojnaa" className="LocalNewsPanchayat">
        <h2 className="heading">पंचायत विभाग द्वारा चलाई जा रही योजनाएं</h2>
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
            <a href="#Success">सफल पंचायतों की कहानियां</a>
          </li>
          <li>
            <a href="#New">पंचायतों में हो रहे नवाचार</a>
          </li>
          <li>
            <a href="#Yojnaa">पंचायत विभाग द्वारा चलाई जा रही योजनाएं</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Panchayat;