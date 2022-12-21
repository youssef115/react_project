import axios from 'axios';
import React,{useState,useEffect} from 'react'

function EtudInfo (props){
  const [user,setUser]=useState([]);
  useEffect(()=>{
  axios.get(`http://localhost:5000/etudiant/getOne/${props.cin}`).then(res=>setUser(res.data))
    
  },[props.cin])

  const handleInfo=()=>{
      props.handle(false)
  }
    return (
        <>
        {console.log(user)}
        
        <div className="modall">
        <div  className="overlay">
        <div className="modal-contentt">
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
            </tbody>
          </table>
          <button className='download-file' download={user.fichier}>telecharger les documents</button>
          <button className="close-modal" onClick={handleInfo}>
            CLOSE
          </button>
        </div>
        </div>
      </div>
        </>
    )
}
export default EtudInfo