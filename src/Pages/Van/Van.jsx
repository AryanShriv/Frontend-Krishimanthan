import React from "react";
// import "./Van.css";
import { mainCardData } from "../../Dummy";
import { lifestyleData } from "../../DummyData";

function Van() {
  return (
    <>
      <div className="heading">
        <p>शीर्षक - वन</p>
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

      <div id="National" className="LocalNewsVan">
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

      <div id="Pradeshik" className="LocalNewsVan">
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

      <div id="Yojnaa" className="LocalNewsVan">
        <h2 className="heading">वन विभाग की योजनाएं</h2>
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

      <div id="New" className="LocalNewsVan">
        <h2 className="heading">वन विभाग में नवाचार</h2>
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

      {/* Adivasi News */}

      <div id="Adivasi" className="LocalNewsVan">
        <h2 className="heading">
          वरना क्षेत्र क्षेत्र में रहने वाले आदिवासियों की दी जा रही सुविधाएं
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

      <div id="Success" className="LocalNewsVan">
        <h2 className="heading">सफलता की कहानियां</h2>
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

      {/* NationalGarden News */}

      <div id="NationalGarden" className="LocalNewsVan">
        <h2 className="heading">
          देश प्रदेश में राष्ट्रीय उद्यानों में जानकारी
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

      {/* Info News */}

      <div id="Info" className="LocalNewsVan">
        <h2 className="heading">वनोपज से संबंधित जानकारी</h2>
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
        <h2 className="heading margin-5" >इस पृष्ठ पर</h2>
        <ul>
          <li>
            <a href="#National">राष्ट्रीय समाचार</a>
          </li>
          <li>
            <a href="#Pradeshik">प्रादेशिक समाचार</a>
          </li>
          <li>
            <a href="#Yojnaa">वन विभाग की योजनाएं</a>
          </li>
          <li>
            <a href="#New">वन विभाग में नवाचार</a>
          </li>
          <li>
            <a href="#Adivasi">
              वरना क्षेत्र क्षेत्र में रहने वाले आदिवासियों की दी जा रही
              सुविधाएं
            </a>
          </li>
          <li>
            <a href="#Success">सफलता की कहानियां</a>
          </li>
          <li>
            <a href="#NationalGarden">
              देश प्रदेश में राष्ट्रीय उद्यानों में जानकारी
            </a>
          </li>
          <li>
            <a href="#Info">वनोपज से संबंधित जानकारी</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Van;