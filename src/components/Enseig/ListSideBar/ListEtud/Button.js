import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios'
import InfoEtud from './InfoEtud'
import EtudInfo from './EtudInfo'



function Button(props){
    const [showInfo,setShowInfo]=useState(false)
    const [showEdit,setShowEdit]=useState(false)
    

    const handleEdit=(val)=>{
      
        setShowEdit(val)
    }
    const handleInfo=(val)=>{
        setShowInfo(val)
    }
    const handleDelete=()=>{
        confirmAlert({
          title: 'Supprimer',
          message: 'tu veut supprimer ce personne ?',
          buttons: [
            {
              label: 'Oui',
              onClick: () => handleDeleteElement()
            },
            {
              label: 'Non',
              onClick: () => null
            }
          ]
        });
      }
      const handleDeleteElement=()=>{
          
            axios.delete(`http://localhost:5000/etudiant/deleteEtudiant/${props.cin}`)
            window.location.reload(false)
      }
 
    return (
        <>
       
        <button  className="btn1 fontawesomeView" onClick={()=>setShowInfo(!showInfo)}>
        
        <FontAwesomeIcon icon={faEye}/>
        </button>
        
        <button  className="btn1 fontawesomeEdit" onClick={()=>setShowEdit(!showEdit)}>
          
          <FontAwesomeIcon icon={faPen}  />
         
        </button>
        
        <button  className="btn1" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}/>
            
        </button>

        {/*show the information*/}
        {showInfo? <EtudInfo handle={handleInfo} cin={props.cin} type={props.type}/>:null}
         {/*show the edit form*/}
        {showEdit? <InfoEtud handle={handleEdit} cin={props.cin} type={props.type} />:null}
        </>
    )
}
export default Button;