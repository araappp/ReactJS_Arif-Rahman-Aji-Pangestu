import React from "react";
import Facebook from "../components/gambar/Facebook.png";
import Instagram from "../components/gambar/Instagram.png";
import Twitter from "../components/gambar/Twitter.png";
import Whatsapp from "../components/gambar/Whatsapp.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container my-auto">
        <div className="row">
          <div className="img-footer col-12 text-center">
          <a className="navbar-brand fw-bold fs-2"  href="/">
            <span style={{color:"orange"}}>RRQ</span> Store
          </a>
          </div>
        </div>
        <div className="row">
            <div className="help col d-flex justify-content-center py-5">
          <div className="number">
            <p className="text7">085959969540</p>
            <p className="text7">Jalan Rawa simprug</p>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="social-media col-12 d-flex justify-content-center ">
            <img src={Facebook} alt="Facebook" width="92" height="92" className="img-fluid"/>
            <img src={Instagram} alt="Instagram" width="92" height="92" className="img-fluid"/>
            <img src={Twitter} alt="Twitter" width="92" height="92" className="img-fluid"/>
            <img src={Whatsapp} alt="Whatsapp" width="92" height="92" className="img-fluid"/>
          </div>
          </div>
          <hr className="line" width="auto" />
        </div>
        <div className="row">
          <div className="copy-footer col-12 text-center">
            <p>
              &copy; Copyright 2022 Weekly Task - Alterra
              Academy
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
