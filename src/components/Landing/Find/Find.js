import React from "react";

import "./Find.css";
import Map from "./Map/Map";

const Find = () => {
  return (
    <div className="where">
      <h1>Find us</h1>
      <div className="find-container">
        <Map
          loadingElement={<div style={{ height: `100%` }} />}
          center={{ lat: 32.777638, lng: -96.79551 }}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${
            process.env.REACT_APP_PLACES_KEY
          }`}
          containerElement={<div style={{ height: `300px`, width: "300px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div className="location">
          <h3 className="find-title">Good Donut</h3>
          <h3>501 S Ervay St</h3>
          <h3>Dallas, TX 75201</h3>
          <p className="hours">Hours of Operation:</p>
          <p>M-F 6am-11am</p>
          <p>Sa 9am-1pm</p>
        </div>
      </div>

      <div className="social-box">
        <h3 className="social">Let's get social!</h3>
        <div className="links">
          <i className="fab fa-google-plus-square fa-3x" />
          <i className="fab fa-facebook-square fa-3x" />
          <i className="fab fa-twitter-square fa-3x" />
        </div>
      </div>

      <footer className="footer">
        Disclaimer: This is a demo full-stack application. By no means will this
        site be used to provide donuts
      </footer>
    </div>
  );
};
export default Find;
