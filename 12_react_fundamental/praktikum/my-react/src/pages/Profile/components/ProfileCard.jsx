import React from "react";
import styles from "./modul.css";
import { mockUsers } from "../../../mockData";

function ProfileCard(props) {
  const card1 = {
    id: 1,
    title: "Membuat Komponen",
    completed: true,
  };

  const card2 = {
    id: 2,
    title: "Unit Testing",
    completed: false,
  };

  const card3 = {
    id: 3,
    title: "Setup Development Environment",
    completed: true,
  };

  const card4 = {
    id: 4,
    title: "Deploy ke server",
    completed: false,
  };

  return (
    <>
      <div className="container">
        <div className="satu">
          <h4>{card1.title} </h4>
        </div>
        <div className="dua">
          <h4>{card2.title} </h4>
        </div>
        <div className="tiga">
          <span className="strikethrough">
            {" "}
            <h4>{card3.title} </h4>{" "}
          </span>
        </div>
        <div className="empat">
          <h4>{card4.title} </h4>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
