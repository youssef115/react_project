import React,{useState,useEffect} from 'react'
import './editProfile.css'
import axios from 'axios'
 function EditProfile(){
   const[admin,setAdmin]=useState({})
   useEffect(()=>{
    axios.get("http://localhost:5000/admin/getOneAdmin/635402e7e4356a7c4b933f96").then(res=>setAdmin(res.data)).catch(e=>console.log(e))
    
    
   },[])
   const handleUpdate=()=>{
    console.log("admin data on submit ",admin)
    axios.put("http://localhost:5000/admin/updateAdmin/635402e7e4356a7c4b933f96",admin)
    .then(console.log("update of the admin is done"))
   }
   const handleChangeNom=(e)=>{
    if(e.target.id==="nom"){
      setAdmin({
        _id:admin._id,
        nom:e.target.value,
        prenom:admin.prenom,
        login:admin.login,
        mot_de_passe:admin.mot_de_passe
      })
      //console.log("name change ",admin)
      
    }else if(e.target.id==="prenom"){
      setAdmin({
        _id:admin._id,
        nom:admin.nom,
        prenom:e.target.value,
        login:admin.login,
        mot_de_passe:admin.mot_de_passe
      })
      //console.log("name change ",admin)
    }else if(e.target.id==="login"){
      setAdmin({
        _id:admin._id,
        nom:admin.nom,
        prenom:admin.prenom,
        login:e.target.value,
        mot_de_passe:admin.mot_de_passe
      })
      //console.log("name change ",admin)
    }
    
    else if(e.target.id==="password"){
      setAdmin({
        _id:admin._id,
        nom:admin.nom,
        prenom:admin.prenom,
        login:admin.login,
        mot_de_passe:e.target.value
      })
      //console.log("name change ",admin)
    }
   }
   
   
    return(
        <>
        {console.log("data from obj admin",admin)}
        <div className="modal-content2">
        <form >
        <div className="user-details ">
        <div className="input-box">
          <span className="details">Nom</span>
          <input type="text"  required id="nom"  defaultValue={admin.nom} onChange={handleChangeNom}/>
          
        </div>

        <div className="input-box">
          <span className="details">Prenom</span>
          <input type="text"  required id="prenom"  defaultValue={admin.prenom}  onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details">login</span>
          <input type="text"  required  id="login" defaultValue={admin.login} onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details">mot de passe</span>
          <input type="password"  required id="password" defaultValue={admin.mot_de_passe} onChange={handleChangeNom}/>
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
export default EditProfile;