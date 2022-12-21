import React,{useState} from 'react'
import axios from 'axios'
import "./Cour.css"
 function AddCour(){
   const[cour,setCour]=useState({})

   const handleAdd=()=>{
    axios.post(`http://localhost:5000/cour/addcour`,cour)
    .then(console.log("update of the cour is done"))
   }
   const handleChangeNom=(e)=>{
    setCour({
        _id:cour._id,
        nomCour:e.target.value
      })
   }

   
   
    return(
        <>
        <div className="modal-contentt20">
        <form >
        <div className="user-details ">
        <div className="input-box">
          <span className="details"> nomCour</span>
          <input type="text"  required id="nom"  defaultValue={cour.nomCour} onChange={handleChangeNom}/>
          
        </div>

          </div>
          <div className="button-edit">
            <input type="submit" value="ajouter" onClick={handleAdd}/>
            

          </div>
          </form>
          </div>
        </>
    )
}
export default AddCour