import React from 'react'
import {Link} from "react-router-dom"
import './Header.css'

export default function HeaderBar() {
  return (


<header className='head1'>
<link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" ></link>
        <h2 className='hhh2'>
           <label for="nav-toggle">
            <span className="las la-bars"></span>
          </label>
          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="search here"/>
        </div>
        <div className="header-menu">
          <div className="notify-icon">
          <Link to=""><span className="las la-envelope"></span>
         <span className="notify">4</span></Link>
        </div>
        <div className="notify-icon">
          <Link to =""><span className="las la-bell"></span>
          <span className="notify">3</span></Link>
         </div>
         <div className="notify-icon">
          <Link to="/"><span className="las la-power-off"></span>
          <h4 className='hhh4'>Sing out</h4></Link>
         </div>
      </div>
      </header>
      
  )
}
