import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ProfilePage from "./pages/Profile/ProfilePage";
import { mockUsers } from "./mockData";

function App() {
  return (
    <>
      <ProfilePage cards={mockUsers} />
    </>
  );
}

export default App;
