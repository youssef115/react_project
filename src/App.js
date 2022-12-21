import React  from "react";
//import BodyHeader from './components/youssefComponents/bodyHeader/bodyHeader';
//import Cards from './components/youssefComponents/cards/Cards';
//import Enseigant from './components/youssefComponents/Enseigant/enseignant';
//import Etudiant from './components/youssefComponents/etudiant/etudiant'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
//import Body from "./components/youssefComponents/body/body";
//import SideMenu from "./components/youssefComponents/sideMenu/sideMenu";
import Youssef from "./components/youssefComponents/youssefAll/youssef";
import "./App.css";
import Homepage from "./components/mariem/homepage/homepage";
import Rania from "./components/Enseig/Rania/Rania";

function App() {
  return (
    <>
      <Router>
        <Youssef/>
        <Homepage/>
        <Rania/>
      </Router>
    </>
  );
}

export default App;
