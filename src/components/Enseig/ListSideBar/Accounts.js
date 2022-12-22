import React,{useState,useEffect} from 'react'
import axios from 'axios'
import EditAccounts from './EditAccounts'
function Accounts  (props){
  const [enseig,setEnsieg]=useState({})
  const [showEdit,setShowEdit]=useState(false)
    

  const handleEdit=(val)=>{
      setShowEdit(val)
  }
  useEffect(()=>{
    axios.get("http://localhost:5000/enseignant/14006852")
    .then(res=>{
      setEnsieg(res.data)
    })
    .catch(e=>console.log(e))
  },[])
  
    return(
      <div className='fonddr'>
          
        <div className="modal-content1">
        <h2 className='center-title1'>votre informations</h2>
        <table>
          <tbody>
          <tr>
           <td>nom :</td>
           <td>{enseig?.nom}</td>
          </tr>
          <tr>
           <td>prenom :</td>
           <td>{enseig?.prenom}</td>
          </tr>
          <tr>
            <td>login :</td>
            <td>{enseig?.login}</td>
          </tr>
          <tr>
            <td>mot de passe :</td>
            <td style={{fontSize:"12px"}}>{enseig?.mot_de_passe}</td>
          </tr>
          <tr>
            <td>specialite :</td>
            <td>{enseig?.specialite}</td>
          </tr>
          <tr>
            <td>ville :</td>
            <td>{enseig?.ville}</td>
          </tr>
          <tr>
            <td>ncin :</td>
            <td>{enseig?.ncin}</td>
          </tr>
          <tr>
            <td>ntel :</td>
            <td>{enseig?.ntel}</td>
          </tr>
          <tr>
            <td>email :</td>
            <td>{enseig?.email}</td>
          </tr>

          <button  className="btn fontawesomeEdit" onClick={()=>setShowEdit(!showEdit)}>Modifier  </button>
          </tbody>
        </table>
        
      </div>
      {showEdit? <EditAccounts handle={handleEdit} cin={props.cin} type={props.type} />:null}
        </div>
    )
}
export default Accounts 