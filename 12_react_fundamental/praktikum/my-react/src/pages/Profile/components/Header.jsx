import React from "react";

function Header({ text }) {
  return (
    <>
      <div style={{ background: "grey" }}>
        <h1>{text}</h1>
        <hr />
      </div>
    </>
  );
}

export default Header;
