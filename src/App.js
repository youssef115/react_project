import React from "react";
import BodyHeader from './components/youssefComponents/bodyHeader/bodyHeader';
import Cards from './components/youssefComponents/cards/Cards';
import Enseigant from './components/youssefComponents/Enseigant/enseignant';
import Etudiant from './components/youssefComponents/etudiant/etudiant'
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
            <BodyHeader/>
            <Body> 
                <Cards/> 
               
            </Body> 
            </>
          }/>
            
            <Route exact path="/adminDashBorad/enseignant" element={

              <>
              <SideMenu />
              <BodyHeader/>
              <Body> 
                  <Enseigant/>  
              </Body> 
              </>
            }/>

            <Route exact path="/adminDashBorad/etudiant" element={

              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Etudiant/>
               </Body>
              </>
            }/>

        </Routes>

      </Router>
    </>
  );
}

export default App;
