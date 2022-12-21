import React, { useState, useEffect } from 'react'
import axios from 'axios'

function InfoEtudSess (props) {
  
  const[Cour,setCour]=useState({})
  useEffect(()=>{
   axios.get(`http://localhost:5000/session/63a24bf4b6da14b42ff73437`).then(res=>setCour(res.data)).catch(e=>console.log(e))
   
   
  },[])
  const handleUpdate=()=>{
   console.log("admin data on submit ",Cour)
   axios.put(`http://localhost:5000/session/updatesession/63a24bf4b6da14b42ff73437`,Cour)
   .then(console.log("update of the Cour is done"))
  }
  const handleChangeNom=(e)=>{
    setCour({
       _id:Cour._id,
       nomSession:e.target.value,
     })
   
  }
  
  
   return(
       <>
       <div className="modal-contentt20">
       <form >
       <div className="user-details ">
       <div className="input-box">
         <span className="details">nomCour</span>
         <input type="text"  required id="nomCour"  defaultValue={Cour.nomSession} onChange={handleChangeNom}/> 
       </div>

       
         
         </div>
         <div className="button-edit">
           <input type="submit" value="mettre a jour" onClick={handleUpdate}/>
           

         </div>
         </form>
         </div>
       </>
   )
}

export default InfoEtudSess ;