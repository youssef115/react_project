import React from "react";
import {Link}from 'react-router-dom'
import SideMenuItems from "../sideMenuItems/SideMenuItems";
import {faUserCheck,faUserXmark,faUsers} from '@fortawesome/free-solid-svg-icons'
import '../../../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SideMenu() {
  const [isActiveEnseignant,setActiveEnseignant]=React.useState(false);
  const [isActiveEtudiant,setActiveEtudiant]=React.useState(false);

  
  return (
  <>
    <div  className={'side-menu'} >
        <div className="brand-name">
            <Link to="/adminDashBorad"><h1>Admin Dashboard</h1></Link>
            
        </div>
        <ul>  
          {/* <li>
            <SideMenuItems source={require(`../../../res/images/dashboard (2).png`)} alt={""} text={"Dashboard"}/>
            </li> */}

          
           
              <li onClick={()=>setActiveEnseignant(!isActiveEnseignant)}>
                  <SideMenuItems source={require("../../../res/images/teacher2.png")} alt={""} text={"Enseignant"}/>
              </li>
              {isActiveEnseignant ? 
                <ul className="sub-text">
                <Link to="/adminDashBorad/AllEnseignant"><li><FontAwesomeIcon icon={faUsers} className="font-space"/>tous les Enseignant</li></Link>
                <Link to="/adminDashBorad/enseignantValid"><li><FontAwesomeIcon icon={faUserCheck} className="font-space"/> Enseignant valide</li></Link>
                <Link to="/adminDashBorad/enseignantNotValid"> <li><FontAwesomeIcon icon={faUserXmark} className="font-space"/>Enseignant non valide</li></Link>
                  
                </ul>:null}
              
         
            
            
              <li onClick={()=>setActiveEtudiant(!isActiveEtudiant)}>
                <SideMenuItems source={require("../../../res/images/reading-book (1).png")} alt={""} text={"Etudiant"}/>
              </li>
              {isActiveEtudiant ? 
                <ul className="sub-text">
                <Link to="/adminDashBorad/AllEtudiant"><li><FontAwesomeIcon icon={faUsers} className="font-space"/>tous les Etudiants</li></Link>
                <Link to="/adminDashBorad/etudiantValid"><li><FontAwesomeIcon icon={faUserCheck} className="font-space"/> Etudiants valide</li></Link>
                <Link to="/adminDashBorad/etudiantNotValid"><li><FontAwesomeIcon icon={faUserXmark} className="font-space"/>Etudiants non valide</li></Link>
                  
                </ul>:null}
              
            

          {/* <li>
            <SideMenuItems source={require("../../../res/images/school.png")} alt={""} text={"Schools"}/>
            </li>
          <li>
            <SideMenuItems source={require("../../../res/images/payment.png")} alt={""} text={"Income"}/>
            </li>
          <li>
            <SideMenuItems source={require("../../../res/images/help-web-button.png")} alt={""} text={"Help"}/>
            </li>
          <li>
            <SideMenuItems source={require("../../../res/images/settings.png")} alt={""} text={"Settings"}/>
            </li> */}

        </ul>
    </div>
  </>
  );
}

export default SideMenu;
