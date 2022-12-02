import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Menjadi organisasi E-sports terkemuka di Asia Tenggara, dengan
              membangun merek dan tim profesional yang terdiri dari
              individu-individu yang sangat bersemangat dan terampil yang ingin
              menunjukkan potensi mereka kepada dunia. Founded in October 2013,
              Rex Regum Qeon (RRQ) was born by combining the best Indonesian
              DotA players who were already well known in the international
              gaming community. By the end of 2017, Rex Regum began expanding
              into other games such as the popular FPS game Point Blank and then
              to the highly successful mobile game Mobile Legends Bang Bang. Now
              Team RRQ has expanded over 8 game divisions including FREE FIRE,
              FIFA, APEX LEGENDS, PUBG and PUBGM by acquiring some of the best
              talents from not only in Indonesia but regionally.
            </p>
            <Link to="/contact" className="btn btn-outline-dark px-3">Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/products/EVR.png" alt="About Us" height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
