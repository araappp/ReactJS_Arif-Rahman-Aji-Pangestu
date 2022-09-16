import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function ProfilePage({ cards }) {
  return (
    <>
      <Header text="To Do App" />
      <ProfileCard />
    </>
  );
}

export default ProfilePage;
