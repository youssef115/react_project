import user from '../../../res/images/user1.png';
import edit from '../../../res/images/edit.png';
import inbox from '../../../res/images/envelope.png';
import settings from '../../../res/images/settings1.png';
import help from '../../../res/images/question.png';
import logout from '../../../res/images/log-out.png';
import userIcon from '../../../res/images/user.png';
import '../../../App.css';
import jwt_decode from "jwt-decode";

import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

function Dropmenu() {
  
  try{
    let token = localStorage.getItem('token')
  console.log("the token is ",token)
  
  var decoded = jwt_decode(token);
}catch(e){
  decoded=null
  console.error(e)
}


  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <div className='user'>
            <img src={userIcon}/>
        </div>
          
        </div>

        <div className={`dropdown-menu1 ${open? 'active' : 'inactive'}`} >
          <h3>Admin<br/><span>{decoded==null?"null":decoded.nom}</span></h3>
          <ul>
            <Link to="/adminDashBorad/myProfil" onClick={()=>setOpen(!open)}><DropdownItem img={user} text = {"My Profile"} /></Link>
            <Link to="/adminDashBorad/editProfil" onClick={()=>setOpen(!open)}><DropdownItem img={edit} text = {"Edit Profile"}/></Link>
            <Link to="/" onClick={()=>{alert("you just logout now");localStorage.removeItem("token")}}><DropdownItem img={logout} text = {"Logout"}/></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}/>
      <p> {props.text} </p>
    </li>
  );
}

export default Dropmenu;