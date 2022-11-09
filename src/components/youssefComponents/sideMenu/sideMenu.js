import React from "react";
import {Link}from 'react-router-dom'
import SideMenuItems from "../sideMenuItems/SideMenuItems";
import {faUserCheck,faUserXmark,faUsers, faShuttleSpace} from '@fortawesome/free-solid-svg-icons'
import '../../../App.css'
import { motion } from "framer-motion";
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

          
           
              <li onClick={()=>setActiveEnseignant(!isActiveEnseignant)} className="unselectable ">
                  <SideMenuItems source={require("../../../res/images/teacher2.png")} alt={""} text={"Enseignant"}/>
              </li>
              {/*make an animation to the list items :D */}
              {isActiveEnseignant ? 
                <>
                <ul className="sub-text">
                <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 1 }}
              >
              
              <Link to="/adminDashBorad/AllEnseignant"><li><FontAwesomeIcon icon={faUsers} className="font-space"/>tous les Enseignant</li></Link>
              </motion.div>
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 2 }}
              >
              <Link to="/adminDashBorad/enseignantValid"><li><FontAwesomeIcon icon={faUserCheck} className="font-space"/> Enseignant valide</li></Link>
              </motion.div>
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 3 }}
              >
              <Link to="/adminDashBorad/enseignantNotValid"> <li><FontAwesomeIcon icon={faUserXmark} className="font-space"/>Enseignant non valide</li></Link>
              </motion.div>
              
              </ul>
               
               </>:null}
                
                
                  
                
              
         
            
            
              <li onClick={()=>setActiveEtudiant(!isActiveEtudiant)} className="unselectable ">
                <SideMenuItems source={require("../../../res/images/reading-book (1).png")} alt={""} text={"Etudiant"}/>
              </li>
              {isActiveEtudiant ? 
                <>
                <ul className="sub-text">
                
                
                <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 1 }}
                >
                <Link to="/adminDashBorad/AllEtudiant"><li><FontAwesomeIcon icon={faUsers} className="font-space"/>tous les Etudiants</li></Link>
              </motion.div>
              <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ duration: 2 }}
              >
              <Link to="/adminDashBorad/etudiantValid"><li><FontAwesomeIcon icon={faUserCheck} className="font-space"/> Etudiants valide</li></Link>
              </motion.div>
              <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ duration: 3 }}
              >
              <Link to="/adminDashBorad/etudiantNotValid"><li><FontAwesomeIcon icon={faUserXmark} className="font-space"/>Etudiants non valide</li></Link>
              </motion.div>
              </ul>
                  
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
