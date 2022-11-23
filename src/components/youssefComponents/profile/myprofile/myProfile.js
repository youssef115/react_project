import React,{useState,useEffect} from 'react'
import './myprofile.css'
import axios from 'axios'
function MyProfile (){
  const [admin,setAdmin]=useState({})
  useEffect(()=>{
    axios.get("http://localhost:5000/admin/getOneAdmin/635402e7e4356a7c4b933f96")
    .then(res=>{
      setAdmin(res.data)
    })
    .catch(e=>console.log(e))
  },[])
  
    return(
        <>
          {console.log(admin.user)}
        <div className="modal-content1">
        <h2 className='center-title1'>les informations de l'admin</h2>
        <table>
          <tbody>
          <tr>
           <td>nom :</td>
           <td>{admin?.nom}</td>
          </tr>
          <tr>
           <td>prenom :</td>
           <td>{admin?.prenom}</td>
          </tr>
          <tr>
            <td>login :</td>
            <td>{admin?.login}</td>
          </tr>
          <tr>
            <td>mot de passe :</td>
            
            <td style={{fontSize:"12px"}}>{admin?.mot_de_passe}</td>
          </tr>
          
          </tbody>
        </table>
        
      </div>
      
        </>
    )
}
export default MyProfile