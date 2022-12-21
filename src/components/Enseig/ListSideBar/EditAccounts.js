import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./EditAcounts.css"
 function EditAccounts(){
   const[enseig,setEnsieg]=useState({})
   useEffect(()=>{
    axios.get("http://localhost:5000/enseignant/14006852").then(res=>setEnsieg(res.data)).catch(e=>console.log(e))
    
    
   },[])
   const handleUpdate=()=>{
    console.log("admin data on submit ",enseig)
    axios.put("http://localhost:5000/enseignant/updateEnseigant/63849eae207fe38781e7c942",enseig)
    .then(console.log("update of the enseig is done"))
   }
   const handleChangeNom=(e)=>{
    if(e.target.id==="nom"){
        setEnsieg({
        _id:enseig._id,
        nom:e.target.value,
        prenom: enseig.prenom,
        login: enseig.login, 
        email:enseig.email,
        mot_de_passe:enseig.mot_de_passe,
        ville: enseig.ville,
        ncin:enseig.ncin,
        ntel: enseig.ntel,
        specialite:enseig.specialite
    
      })
     
      
    }else if(e.target.id==="prenom"){
        setEnsieg({
            _id:enseig._id,
            nom:enseig.nom,
            prenom: e.target.value,
            login: enseig.login,
            email:enseig.email,
            mot_de_passe:enseig.mot_de_passe,
            ville: enseig.ville,
            ncin:enseig.ncin,
            ntel: enseig.ntel,
            specialite:enseig.specialite
      })
    }else if(e.target.id==="login"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login:e.target.value,
            email:enseig.email,
            mot_de_passe:enseig.mot_de_passe,
            ville: enseig.ville,
            ncin:enseig.ncin,
            ntel: enseig.ntel,
            specialite:enseig.specialite
      })
    }
    else if(e.target.id==="email"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login:enseig.login,
            email:e.target.value,
            mot_de_passe:enseig.mot_de_passe,
            ville: enseig.ville,
            ncin:enseig.ncin,
            ntel: enseig.ntel,
            specialite:enseig.specialite
      })
    }
    
    else if(e.target.id==="password"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login: enseig.login,
            email:enseig.email,
            mot_de_passe:e.target.value,
            ville: enseig.ville,
            ncin:enseig.ncin,
            ntel: enseig.ntel,
            specialite:enseig.specialite
      })
    }
    else if(e.target.id==="ncin"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login: enseig.login,
            email:enseig.email,
            mot_de_passe:enseig.mot_de_passe,
            ncin: e.target.value,
            ntel: enseig.ntel,
            ville: enseig.ville,
            specialite:enseig.specialite
      })
    }
    else if(e.target.id==="ntel"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login: enseig.login,
            email:enseig.email,
            mot_de_passe:enseig.mot_de_passe,
            ncin: enseig.ncin,
            ntel:e.target.value,
            ville: enseig.ville,
            specialite:enseig.specialite
      })
    }
    else if(e.target.id==="ville"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login: enseig.login,
            email:enseig.email,
            mot_de_passe:enseig.mot_de_passe,
            ncin: enseig.ncin,
            ntel:enseig.ntel ,
            ville:e.target.value,
            specialite:enseig.specialite
      })
    }
    else if(e.target.id==="specialite"){
        setEnsieg({
            _id:enseig._id,
            nom: enseig.nom,
            prenom: enseig.prenom,
            login: enseig.login,
            email:enseig.email,
            mot_de_passe:enseig.mot_de_passe,
            ncin: enseig.ncin,
            ntel:enseig.ntel ,
            ville:enseig.ville,
            specialite:e.target.value
      })
    }
   
   }
   
   
    return(
        <>
        <div className="modal-content22">
        <form >
        <div className="user-details ">
        <div className="input-box">
          <span className="details">Nom</span>
          <input type="text"  required id="nom"  defaultValue={enseig.nom} onChange={handleChangeNom}/>
          
        </div>

        <div className="input-box">
          <span className="details">Prenom</span>
          <input type="text"  required id="prenom"  defaultValue={enseig.prenom}  onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details">login</span>
          <input type="text"  required  id="login" defaultValue={enseig.login} onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details">email</span>
          <input type="text"  required  id="email" defaultValue={enseig.email} onChange={handleChangeNom}/>
        </div>

        <div className="input-box">
          <span className="details">mot de passe</span>
          <input type="password"  required id="password" defaultValue={enseig.mot_de_passe} onChange={handleChangeNom}/>
        </div>

        <div className="input-box">
          <span className="details">ncin</span>
          <input type="text"  required id="ncin" defaultValue={enseig.ncin} onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details"> ntel</span>
          <input type="text"  required id=" ntel" defaultValue={enseig.ntel} onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details">ville</span>
          <input type="text"  required id="ville" defaultValue={enseig.ville} onChange={handleChangeNom}/>
        </div>
        <div className="input-box">
          <span className="details">specialite</span>
          <input type="text"  required id="specialite" defaultValue={enseig.specialite} onChange={handleChangeNom}/>
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
export default EditAccounts;