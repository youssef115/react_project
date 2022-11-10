import React from "react";
import {Link}from 'react-router-dom'
import SideMenuItems from "../sideMenuItems/SideMenuItems";

//import {faUserCheck,faUserXmark,faUsers} from '@fortawesome/free-solid-svg-icons'
import '../../../App.css'
//import { motion } from "framer-motion";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenuSubItems from "../sideMenuSubItems/sideMenuSubItems";


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

          
           
              <li onClick={()=>setActiveEnseignant(!isActiveEnseignant)} className="unselectable ">
                  <SideMenuItems source={require("../../../res/images/teacher2.png")} alt={""} text={"Enseignant"}/>
              </li>
              {/*make an animation to the list items :D */}
              {isActiveEnseignant ? 
                <>
                <SideMenuSubItems 
                  link1="/adminDashBorad/AllEnseignant" text1="tous les Enseignant"
                  link2="/adminDashBorad/enseignantValid" text2="Enseignant valide"
                  link3="/adminDashBorad/enseignantNotValid" text3="Enseignant non valide"/>
               
               </>:null}
                
                
                  
                
              
         
            
            
              <li onClick={()=>setActiveEtudiant(!isActiveEtudiant)} className="unselectable ">
                <SideMenuItems source={require("../../../res/images/reading-book (1).png")} alt={""} text={"Etudiant"}/>
              </li>
              {isActiveEtudiant ? 
                <>
                <SideMenuSubItems 
                link1="/adminDashBorad/AllEtudiant" text1="tous les Etudiants"
                link2="/adminDashBorad/etudiantValid" text2="Etudiants valide"
                link3="/adminDashBorad/etudiantNotValid" text3="Etudiants non valide"/> 
                </>:null}
              
            

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
