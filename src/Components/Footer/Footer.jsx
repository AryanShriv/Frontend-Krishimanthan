import React from "react";
import "./Footer.css";
import { newsData, FooterLabels } from "../../DummyData";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <h1>KrishiManthan</h1>
          <p>
            कृषि मंथन न्यूज़ वेबसाइट: कृषि से जुड़ी ताज़ा ख़बरें और जानकारी
            प्रदान करने वाली वेबसाइट। यह भारतीय किसानों को उनके क्षेत्र में हो
            रही प्रमुख घटनाओं, नए तकनीकों, खेती की उन्नति और समस्याओं के बारे
            में सूचित करती है।
          </p>
          <div>
            <p>krishimanthan@gmail.com</p>
            <p>+91 9485468410</p>
          </div>
        </div>

        <div className="footer-news">
          <h4>कृषि समाचार</h4>
          {newsData.map((newsItem, index) => (
            <div className="news" key={index}>
              <img src={newsItem.imgSrc} alt="Loading" />
              <p>{newsItem.title}</p>
            </div>
          ))}
        </div>

        <div className="footer-labels">
          <h4>लेबल</h4>
          <ul>
            {FooterLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>© all rights reserved</p>
        <p>
          made with <span>&#x2764;</span> by Agile Support
        </p>
      </div>
    </div>
  );
}

export default Footer;
