import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'
import Information from '../Information/information'
import EditInfo from '../editInfo/editInfo'




function TableButtons(props){
    const [showInfo,setShowInfo]=useState(false)
    const [showEdit,setShowEdit]=useState(false)
    

    const handleEdit=(val)=>{
      
        setShowEdit(val)
    }
    const handleInfo=(val)=>{
        setShowInfo(val)
    }
 
    return (
        <>
       
        <button  className="btn fontawesomeView" onClick={()=>setShowInfo(!showInfo)}>
        
        <FontAwesomeIcon icon={faEye}/>
        </button>
        
        <button  className="btn fontawesomeEdit" onClick={()=>setShowEdit(!showEdit)}>
          
          <FontAwesomeIcon icon={faPen}  />
          {console.log("showEdit",showEdit)}
        </button>
        
        <button  className="btn ">
        <FontAwesomeIcon icon={faTrash}/>
        </button>
        {/*show the information*/}
        {showInfo? <Information handle={handleInfo} cin={props.cin} type={props.type}/>:null}
         {/*show the edit form*/}
        {showEdit? <EditInfo handle={handleEdit}/>:null}
        </>
    )
}
export default TableButtons;