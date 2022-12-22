import React, { Component } from 'react'
import SessForm from '../Session/SessForm'
import "./AddSession.css";

class AddSession extends Component{

   state = {

    session : {}
   }

render(){
  return (
    <div className='fonddr'>
    <div className='newsession'>
        
          <h4 className='h44'>Add new session</h4>
          <SessForm 
            onSubmit={this.addSession}/>

        </div>    
        </div> 
  
  )
}}
export default AddSession
