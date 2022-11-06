import React from "react";
import "../../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'

function EnseigantValider(props) {
  return (
    <>
      
      <tr>
        <td>{props.cin}</td>
        <td>{props.nom}</td>
        <td>{props.prenom}</td>
        <td>{props.email}</td>
        <td>{props.telephone}</td>
        <td>{props.secialite}</td>
        
        <td>
          <button href="#" className="btn fontawesomeView">
          <FontAwesomeIcon icon={faEye}/>
          </button>
          
          <button href="#" className="btn fontawesomeEdit" >
            
            <FontAwesomeIcon icon={faPen}  />
          </button>
          <button href="#" className="btn ">
          <FontAwesomeIcon icon={faTrash}/>
          </button>
         
        </td>
      </tr>
    </>
  );
}
export default EnseigantValider;
