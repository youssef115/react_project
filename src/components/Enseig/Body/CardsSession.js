import React, { Component } from 'react'
import "./Cards.css";
import{getSession} from './sessionApi'
import { Link} from "react-router-dom"
import ButtonSess from './ButtonSess';

class  CardsSession extends Component {
  state = {
    Sessions : [],
    Session: {}
  }

  componentDidMount=()=>{
    getSession().then(Response =>{
          this.setState({
            Sessions:  Response.data
          })
      })
    }
  render(){
  return( 
    <main> 
  {this.state.Sessions.map(Session=>(
    
    <div class="session">
    <div class="card-session"> 
        <div>
          <h1 className='textColor'>{Session.nomSession}</h1>
          <button  className="btn1 fontawesomeView" ><Link to="/DashboradEnseig/list_des_cours">Participer</Link></button>
          
          <ButtonSess Session={Session.nomSession}/>
          
        </div>
   </div>
   </div> 
   
  ))
}

</main> 
) 
  }}
 
export default CardsSession;
