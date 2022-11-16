import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './information.css'

function Information (props){
  const [user,setUser]=useState([]);
  useEffect(()=>{
    if(props.type==="isEnseignant") axios.get(`http://localhost:5000/enseignant/getOne/${props.cin}`).then(result=>setUser(result.data))
    if(props.type==="isEtudiant") axios.get(`http://localhost:5000/etudiant/getOne/${props.cin}`).then(res=>setUser(res.data))
    
  },[props.cin,props.type])

  const handleInfo=()=>{
      props.handle(false)
  }

  

    return (
        <>
        {console.log(user)}
        <div className="modal">
        <div  className="overlay">
        <div className="modal-content">
          <h2 className='center-title'>les information de {props.cin}</h2>
          <table>
            <tbody>
            <tr>
             <td>nom :</td>
             <td>{user.nom}</td>
            </tr>
            <tr>
             <td>prenom :</td>
             <td>{user.prenom}</td>
            </tr>
            <tr>
              <td>login :</td>
              <td>{user.login}</td>
            </tr>
            <tr>
              <td>CIN :</td>
              <td>{user.ncin}</td>
            </tr>
            <tr>
              <td>numero de telephone :</td>
              <td>{user.ntel}</td>
            </tr>
            <tr>
              <td>email :</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Ville :</td>
              <td>{user.ville}</td>
            </tr>
            <tr>
              {props.type==="isEnseignant"? <><td>Specialite :</td><td>{user.specialite}</td></>:<><td>classe :</td><td>{user.classe}</td></>}
            </tr>
            <tr>
              <td>etat actuelle</td>
              <td style={user.etat?{color:"green"}:{color:"red"}}>{user.etat? "compte validé ":"compte non validé"}</td>
            </tr>
            </tbody>
          </table>
          <button className='download-file' download={user.fichier}>telecharger les documents</button>
          <button className="close-modal" onClick={handleInfo}>
            CLOSE
          </button>
          <button className='valid-modal'> valider</button>
          <button className='reject-modal'> rejeter</button>
        </div>
        </div>
      </div>
        </>
    )
}
export default Information