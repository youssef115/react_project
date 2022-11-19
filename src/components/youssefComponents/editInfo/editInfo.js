import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./editInfo.css"
//import Items from './items/items'
//import "../Information/information.css"

function EditInfo(props){
   // const [modal,setModal]=React.useState(true)
    
    const handleEdit=()=>{
      
      //setModal(!modal)
      //console.log("modal val ",modal)
      props.handle(false)
    }

    const [user,setUser]=useState([]);
    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("")
    const [cin,setCin]=useState("")
    const [numeroTelephone,setNumeroTelephone]=useState("")
    const [email,setEmail]=useState("")
    const [login,setLogin]=useState("")
    const [ville,setVille]=useState("")
    const [specialite,setSpecialite]=useState("")
    const [classe,setClasse]=useState("")    
    //this function used to add the data of the teacher so we can add it then in the form
    const handledataEnseignant=(data)=>{
        setUser(data)
        //console.log(data)
        setNom(data.nom)
        setPrenom(data.prenom)   
        setCin(data.ncin)
        setNumeroTelephone(data.ntel)
        setEmail(data.email)
        setLogin(data.login)
        setVille(data.ville)
        setSpecialite(data.specialite)
        console.log(specialite)
         
    }
    //this function is used to put the data of the student that i use it to put the data in the form
    const handledataEtudiant=(data)=>{
      setUser(data)
      //console.log(data)
      setNom(data.nom)
      setPrenom(data.prenom)   
      setCin(data.ncin)
      setNumeroTelephone(data.ntel)
      setEmail(data.email)
      setLogin(data.login)
      setVille(data.ville) 
      setClasse(data.classe)
      
  }
  //this function is used to submit form and do the update 
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("you want to submit ?"); e.preventDefault(); 
     if(props.type==="isEnseignant"){
      const enseignantObj={
        nom:nom,
        prenom:prenom , 
        ncin:cin,
        ntel:numeroTelephone,
        email:email,
        login:login,
        ville:ville,
        specialite:specialite
       }
       axios.put(`http://localhost:5000/enseignant/updateEnseigant/${user._id}`,enseignantObj
   )
    .then(console.log(enseignantObj," has been added to the database "))
     }else{
      const etudiantObj={
        nom:nom,
        prenom:prenom,
        ncin:cin,
        ntel:numeroTelephone,
        email:email,
        login:login,
        ville:ville,
        classe:classe
      }
      axios.put(`http://localhost:5000/etudiant/updateEtudiant/${user._id}`,etudiantObj)
      .then(console.log(etudiantObj,"has been added to the database"))
     }
    
  }
    
    useEffect(()=>{
      if(props.type==="isEnseignant") axios.get(`http://localhost:5000/enseignant/getOne/${props.cin}`)
      .then(result=>handledataEnseignant(result.data))
      if(props.type==="isEtudiant") axios.get(`http://localhost:5000/etudiant/getOne/${props.cin}`)
      .then(res=>handledataEtudiant(res.data))
    },[props.cin,props.type])
    
   
    
    return(
    <>
    
          {/* {console.log("data from edit user",user)} */}
            <div className="modal">
            <div  className="overlay">
            <div className="modal-content">
                <form onSubmit={e=>handleSubmit(e)}>
            <div className="user-details ">

            <div className="input-box">
              <span className="details">Nom</span>
              <input type="text"  required  defaultValue={nom}  onChange={(e)=>setNom(e.target.value)}/>
            </div>

            <div className="input-box">
              <span className="details">Prenom</span>
              <input type="text"  required  defaultValue={prenom}  onChange={(e)=>setPrenom(e.target.value)} />
            </div>
            <div className="input-box">
              <span className="details">CIN</span>
              <input type="text"  required  defaultValue={cin}  onChange={(e)=>setCin(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Numero</span>
              <input type="text"  required  defaultValue={numeroTelephone} onChange={(e)=>setNumeroTelephone(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text"  required  defaultValue={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Login</span>
              <input type="text"  required  defaultValue={login} onChange={(e)=>setLogin(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Ville</span>
              <input type="text"  required  defaultValue={ville} onChange={(e)=>setVille(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">{props.type==="isEnseignant"?"Secialite":"classe"}</span>
              <input type="text"  required  defaultValue={props.type==="isEnseignant"?specialite:classe} onChange={(e)=>{props.type==="isEnseignant"?setSpecialite(e.target.value):setClasse(e.target.value)}}/>
            </div>
              {/*make it one components*/}
                {/* <Items inputName="Nom" data={user.nom} />
                <Items inputName="Prenom" data={user.prenom}/>
                <Items inputName="CIN" data={user.ncin}/>
                <Items inputName="Numero de telephone" data={user.ntel}/>
                <Items inputName="Email" data={user.email}/>
                <Items inputName="Mot de passe" data ={user.login}/>
                <Items inputName="Ville" data ={user.ville}/>
                <Items inputName={props.type==="isEnseignant"?"Secialite":"classe"} data={props.type==="isEnseignant"?user.specialite:user.classe} /> */}
                
              </div>
              <div className="button">
                <input type="submit" value="mise a jour"/>
              </div>
              </form>
                <button className='close-modal-edit' onClick={handleEdit}>close </button>
             </div>
             </div>
             </div>
       
    </>
    )
}

export default EditInfo