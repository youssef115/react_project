import React from "react";
import "../../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPen,faTrash} from '@fortawesome/free-solid-svg-icons'

function EtudiantValider(props) {
  return (
    <>
      
      <tr className="hover-table">
        <td>{props.cin}</td>
        <td>{props.nom}</td>
        <td>{props.prenom}</td>
        <td>{props.email}</td>
        <td>{props.telephone}</td>
        <td>{props.secialite}</td>
        
        <td>
          <button  className="btn fontawesomeView">
          <FontAwesomeIcon icon={faEye}/>
          </button>
          
          <button  className="btn fontawesomeEdit" >
            
            <FontAwesomeIcon icon={faPen}  />
          </button>
          <button  className="btn ">
          <FontAwesomeIcon icon={faTrash}/>
          </button>
         
        </td>
      </tr>
    </>
  );
}
export default EtudiantValider;
