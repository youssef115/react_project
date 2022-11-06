import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/youssefComponents/body/body";
import SideMenu from "./components/youssefComponents/sideMenu/sideMenu";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/adminDashBorad" element={
              <>
                <SideMenu />
                <Body />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
