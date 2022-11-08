import React from "react";
import {Link}from 'react-router-dom'
import SideMenuItems from "../sideMenuItems/SideMenuItems";
//import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import '../../../App.css'
function SideMenu() {
  
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

          
           <Link to="/adminDashBorad/enseignant">
              <li>
                <SideMenuItems source={require("../../../res/images/teacher2.png")} alt={""} text={"Enseignant"}/>
              </li>
              </Link>
         
            
            <Link to="/adminDashBorad/etudiant">
              <li>
                <SideMenuItems source={require("../../../res/images/reading-book (1).png")} alt={""} text={"Etudiant"}/>
              </li>
              </Link>
            

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
