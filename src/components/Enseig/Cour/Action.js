import React,{useState} from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'
import Info from './Info';
import Editcour from './Editcour';





function Action(props){
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
          message: 'tu veut supprimer ce cour ?',
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
            axios.delete(`http://localhost:5000/cour/deletecour/${props.nomCour}`)
            window.location.reload(false)
      }
    return (
     
        <div>
        <button  className="btn1 fontawesomeView" onClick={()=>setShowInfo(!showInfo)}>
        
        <FontAwesomeIcon icon={faEye}/>
        </button>
        
        <button  className="btn1 fontawesomeEdit" onClick={()=>setShowEdit(!showEdit)}>
          
          <FontAwesomeIcon icon={faPen}  />
         
        </button>
        
        <button  className="btn1 " onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}/>
            
        </button>
       
       
          {/*show the information*/}
           {showInfo? <Info handle={handleInfo} nomCour={props.nomCour}/>:null }
          {/*show the edit form*/}
          {showEdit? <Editcour handle={handleEdit} nomCour={props.nomCour} />:null}
          
         

        </div>
        
       
    )
    }


export default Action;