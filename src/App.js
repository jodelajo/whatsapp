import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TextBlok from "./components/textBlok/TextBlok";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <div className="wrapper">
        <div className="wrapper-green">
          <TextBlok
            // text="Lieve familie, voor een top-sollicitatie bij een super leuk bedrijf, heb ik jullie aanbeveling nodig."
            className="green1"
          />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white1" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white2" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white3" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white12" />
        </div>
        {/* <div className="wrapper-white">
          <TextBlok className="white4" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white5" />
        </div> */}

        <div className="wrapper-green">
          <TextBlok
            // text="Lieve familie, voor een top-sollicitatie bij een super leuk bedrijf, heb ik jullie aanbeveling nodig."
            className="green2"
          />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white6" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white7" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white8" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white13" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white16" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white9" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white10" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white11" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white14" />
        </div>
        <div className="wrapper-white">
          <TextBlok className="white15" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
