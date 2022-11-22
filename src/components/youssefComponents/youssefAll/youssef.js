import React from 'react'
import BodyHeader from '../bodyHeader/bodyHeader';
import Cards from '../cards/Cards';
import Enseigant from '../Enseigant/enseignant';
import Etudiant from '../etudiant/etudiant'
import Body from "../body/body";
import SideMenu from "../sideMenu/sideMenu";
import {Route,Routes} from "react-router-dom";
import MyProfile from '../profile/myprofile/myProfile';
import EditProfile from '../profile/editProfile/editProfile';

function Youssef() {
  return (
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
            {/*only the not valid students*/}
            <Route exact path="/adminDashBorad/etudiantNotValid" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
               <Etudiant title="List des etudiants non valide"/>
               </Body>
              </>
            }/>
            {/* my profil*/}
            <Route exact path="/adminDashBorad/myProfil" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
                  
                  <MyProfile/>
               </Body>
              </>
            }/>
            {/*edit profil*/}
            <Route exact path="/adminDashBorad/editProfil" element={
              <>
              <SideMenu />
              <BodyHeader/>
               <Body>
                  <EditProfile/>
               </Body>
              </>
            }/>
    </Routes>
  )
}
export default Youssef