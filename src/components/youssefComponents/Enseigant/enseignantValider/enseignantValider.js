import React from "react";
import "../../../../App.css";
import TableButtons from "../../tablesButtons/tablesButtons";


function EnseigantValider(props) {
  
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
          
         <TableButtons cin={props.cin}/>
        </td>
      </tr>
      
    </>
  );
}
export default EnseigantValider;
