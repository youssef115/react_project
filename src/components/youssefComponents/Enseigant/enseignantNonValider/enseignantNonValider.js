import React from "react";
import "../../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo,faCheck} from '@fortawesome/free-solid-svg-icons'

function EnseigantNonValider(props) {
  return (
    <>
      <tr>
        {/* <td>
          <img src={props.source} alt="" />
        </td> */}
        <td>{props.nom}</td>
        <td>{props.prenom}</td>
        <td>
         
          <button className="btn fontawesomeEdit">
            <FontAwesomeIcon icon={faCircleInfo}/>
          </button>
          <button className="btn fontawesomeView">
            <FontAwesomeIcon icon={faCheck}/>
          </button>
         
          
        </td>
      </tr>
    </>
  );
}

export default EnseigantNonValider;
