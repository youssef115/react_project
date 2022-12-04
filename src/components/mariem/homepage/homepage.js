import React from "react";
import "./homepage.css";
import {Route,Routes} from "react-router-dom";
import Login from "../login/login";
import SignUp from "../register/signup";
import Home  from "../../salma/Home.jsx";


const Homepage = () => {
    // const history = createBrowserHistory({ forceRefresh: true });
    // const login = () => {
    //     // 👇️ navigate programmatically
    //     history.push('/login');
    // };
    // const register = () => {
    //     // 👇️ navigate programmatically
    //     history.push('/register');
    // };
   
    return (
        <Routes>
        <Route exact path="/login" element={
              
             
               <Login title="Connexion"/>
              
            }/>

        <Route exact path="/" element={
              
             
              <Home title="Home"/>
             
           }/>
             <Route exact path="/register" element={
              
              
               <SignUp title="Inscription"/>
               
            }/>
        </Routes>
        
    )
}
export default Homepage


