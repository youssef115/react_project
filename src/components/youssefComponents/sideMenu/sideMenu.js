import React from "react";
import SideMenuItems from "../sideMenuItems/SideMenuItems";
//import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import '../../../App.css'
function SideMenu() {
  
  return (
  <>
    <div  className={'side-menu'} >
        <div className="brand-name">
            <h1>Admin Dashboard</h1>
        </div>
        <ul>  
          {/* <li>
            <SideMenuItems source={require(`../../../res/images/dashboard (2).png`)} alt={""} text={"Dashboard"}/>
            </li> */}

           <a href="/adminDashBorad/enseigant">
              <li>
                <SideMenuItems source={require("../../../res/images/teacher2.png")} alt={""} text={"Enseignant"}/>
              </li>
           </a> 
            <a href="/adminDashBorad/etudiant">
              <li>
                <SideMenuItems source={require("../../../res/images/reading-book (1).png")} alt={""} text={"Etudiant"}/>
              </li>
            </a>

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
