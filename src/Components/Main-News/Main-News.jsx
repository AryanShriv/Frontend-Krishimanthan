import React from "react";
import article from "../../Assets/Swiper/slider-4.jpg";
import "./main-News.css";
const Article = () => {
  return (
    <>
      <div className="article">
        <div className="image">
          <img src={article} alt="" />
        </div>
        <div className="text">
          <h2>हमारा संकल्प</h2>
          <p>
            आधुनिक खेती: तकनीकी उन्नति से भरा कृषि का नया युग! आधुनिक खेती में
            तकनीकी उन्नति ने कृषि क्षेत्र में नए युग का आगमन किया है। स्वच्छ
            ऊर्जा, स्मार्ट सेंसर्स, रोबोटिक ट्रैक्टर, और स्वच्छ ऊर्जा पंप सिस्टम
            जैसे तकनीकी उपकरणों से युक्त खेती ने उत्पादन में वृद्धि की है। इससे
            किसानों को अधिक मुनाफा और आत्मनिर्भरता मिली है। आधुनिक खेती से कृषि
            सेक्टर में सुरक्षित, सातत्यपूर्ण, और उच्च उत्पादकता हेतु एक
            महत्वपूर्ण परिवर्तन देखने को मिल रहा है।
          </p>
        </div>
        <button className="button">आगे पढ़ें</button>
      </div>
    </>
  );
};

export default Article;
