import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'
import Information from '../Information/information'



function TableButtons(props){
    const [show,setShow]=React.useState(false)
    return (
        <>
       
        <button  className="btn fontawesomeView" onClick={()=>setShow(!show)}>
        {show? <Information cin={props.cin}/>:null}
        <FontAwesomeIcon icon={faEye}/>
        </button>
        
        <button  className="btn fontawesomeEdit" >
          
          <FontAwesomeIcon icon={faPen}  />
        </button>
        <button  className="btn ">
        <FontAwesomeIcon icon={faTrash}/>
        </button>
        
        </>
    )
}
export default TableButtons;