import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'
import Information from '../Information/information'
import EditInfo from '../editInfo/editInfo'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios'



function TableButtons(props){
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
            props.type==="isEnseignant"? 
            axios.delete(`http://localhost:5000/enseignant/deleteEnseigant/${props.cin}`):
            axios.delete(`http://localhost:5000/etudiant/deleteEtudiant/${props.cin}`)
            window.location.reload(false)
      }
 
    return (
        <>
       
        <button  className="btn11 fontawesomeView" onClick={()=>setShowInfo(!showInfo)}>
        
        <FontAwesomeIcon icon={faEye}/>
        </button>
        
        <button  className="btn11 fontawesomeEdit" onClick={()=>setShowEdit(!showEdit)}>
          
          <FontAwesomeIcon icon={faPen}  />
         
        </button>
        
        <button  className="btn11 " onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}/>
            
        </button>

        {/*show the information*/}
        {showInfo? <Information handle={handleInfo} cin={props.cin} type={props.type}/>:null}
         {/*show the edit form*/}
        {showEdit? <EditInfo handle={handleEdit} cin={props.cin} type={props.type} />:null}
        </>
    )
}
export default TableButtons;