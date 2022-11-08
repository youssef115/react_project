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
            {/*all the teachers*/}
            <Route exact path="/adminDashBorad/AllEnseignant" element={

              <>
              <SideMenu />
              <BodyHeader/>
              <Body> 
                  <Enseigant title="List de tous les enseignants"/>  
              </Body> 
              </>
            }/>
            {/*only the valid teachers*/}
            <Route exact path="/adminDashBorad/enseignantValid" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Enseigant title="List des enseignants valider"/>
               </Body>
              </>
            }/>
            {/*only the not valid teachers*/}
            <Route exact path="/adminDashBorad/enseignantNotValid" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Enseigant title="list des enseignants non valider"/>
               </Body>
              </>
            }/>

            {/*all the students*/}
            <Route exact path="/adminDashBorad/AllEtudiant" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Etudiant title="List de tous les etudiants"/>
               </Body>
              </>
            }/>
            {/*omly the valid students*/}
            <Route exact path="/adminDashBorad/etudiantValid" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Etudiant title="List des etudiants valide"/>
               </Body>
              </>
            }/>
            {/*omly the not valid students*/}
            <Route exact path="/adminDashBorad/etudiantNotValid" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Etudiant title="List des etudiants non valide"/>
               </Body>
              </>
            }/>
          

            
        </Routes>

      </Router>
    </>
  );
}

export default App;
