import React from 'react'
import Home from './Home'
import "./SidBar.css"
import {Link} from 'react-router-dom'
export default function SideBar() {
  return (
    <>
    <div className="sidebarrr">
      <Home/>
     <div className="sidebar-menuu">
        <ul>
         <li>
           <Link to="/DashBoradEnseig" className="active"><span class="las la-igloo"></span> 
           <span className='spannn'>Dashboard</span></Link>
         </li>
         <li>
           <Link to="/DashBoradEnseig/student_list"><span className="las la-users"></span> 
           <span className='spannn'>student list</span></Link>
         </li>
       
         <li>
           <Link to="/DashBoradEnseig/Notification"><span className="las la-bell"></span> 
           <span className='spannn'>Notification</span></Link>
         </li>
         <li>
           <Link to="/DashBoradEnseig/Accounts"><span className="las la-user-circle"></span> 
           <span className='spannn'>Accounts</span></Link>
         </li>
         
        </ul>
     </div>
     </div>
     </>
     
  )
}
