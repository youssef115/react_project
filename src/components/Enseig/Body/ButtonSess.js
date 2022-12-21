import React,{useState} from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios'
import InfoSess from './InfoSess';
import EditInfoSess from './EditInfoSess'



function ButtonSess(props){
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
    
            axios.delete(`http://localhost:5000/session/deleteSession/${props.id}`)
            window.location.reload(false)
      }
 
    return (
        <>
       
        <button  className="btn1 fontawesomeView" onClick={()=>setShowInfo(!showInfo)}>
        
        Info
        </button>
        
        <button  className="btn1 fontawesomeEdit" onClick={()=>setShowEdit(!showEdit)}>
          
          Modifier 
         
        </button>
        
        <button  className="btn1 " onClick={handleDelete}>
            Supprimer
            
        </button>
              {/*show the edit form*/}
        {showInfo? <InfoSess handle={handleInfo} nomSession={props.nomSession}/>:null}
        {/*showInfo? <InfoSess handle={handleInfo} nomSession={props.nomSession}/>:null */}
        {showEdit? <EditInfoSess handle={handleEdit} nomSession={props.nomSession} />:null}
   
        </>
    )
}
export default ButtonSess;