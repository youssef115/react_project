import React,{useState} from 'react'
import "./Cards.css";
import {Link} from "react-router-dom"
import axios from 'axios';

function Cards(){
  const [etudiant,setEtudiant]=React.useState("")
  const [Session, setSession] = React.useState("");
  const [Cour, setCour] = React.useState("");

  React.useEffect(() => {
    
      axios.get(" http://localhost:5000/cour/numberOf").then(res=>{
         console.log(res.data)
         setCour(res.data)
         axios.get("http://localhost:5000/session/numberOf").then(res=>{
          console.log(res.data)
          setSession(res.data)
      axios.get("http://localhost:5000/etudiant/numberOf").then(res=>{
          console.log("the number of studients",res.data)
          setEtudiant(res.data)
      })

  })}
      ).catch(err=>console.log(err))
    }, []);

   
  return (
    <>

    <div classclassName="addsession">
          <button className='bbu'><Link to="/DashBoradEnseig/add_session" class="btn">Add New Session</Link></button>
        </div>
        <div className="cardss">
          <div className="card-single">
            <div>
              <h1 className='.h11'>{etudiant.number}</h1>
              <span>Student</span>
            </div>
            <div>
              <span className="las la-users"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <h1 className='.h11'>{Session.number}</h1>
              <span>Session</span>
            </div>
            <div>
              <span className="las la-clipboard"></span>
            </div>
          </div>


          <div className="card-single">
            <div>
              <h1 className='.h11'>{Cour.number}</h1>
              <span >Lecon</span>
            </div>
            <div>
              <span className="las la-clipboard-list"></span>
            </div>
          </div>
        </div>
      
        </>
  )
}
export default Cards
