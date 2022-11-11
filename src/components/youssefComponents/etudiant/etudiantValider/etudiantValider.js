import React,{useEffect} from "react";
import "../../../../App.css";

import {useLocation} from 'react-router-dom'
import axios from 'axios';
import TableButtons from "../../tablesButtons/tablesButtons";

function EtudiantValider(props) {
  const location=useLocation()
    const [etudiant,setEtudiant]=React.useState([])
    
    useEffect(()=>{
        //console.log(location)
        if(location.pathname==='/adminDashBorad/AllEtudiant'){
            axios.get("http://localhost:5000/etudiant/").then(res=>{
                //console.log(res.data)
                setEtudiant(res.data)

            }
            )
        }else if(location.pathname==="/adminDashBorad/etudiantValid"){
            axios.get("http://localhost:5000/etudiant/valid").then(res=>{
                //console.log(res.data)
                setEtudiant(res.data)
            })
        }else if(location.pathname==="/adminDashBorad/etudiantNotValid"){
            axios.get("http://localhost:5000/etudiant/notValid").then(res=>{
                //console.log(res.data)
                setEtudiant(res.data)
            })
        }
    },[location])
  return (
    <>
      {etudiant===[]?<>loading...</>:etudiant.map(item=>(
      <tr className="hover-table">
        <td>{item.ncin}</td>
        <td>{item.nom}</td>
        <td>{item.prenom}</td>
        <td>{item.email}</td>
        <td>{item.ntel}</td>
        <td>{item.classe}</td>
        
        <td>
         <TableButtons cin={item.ncin}/>
         
        </td>
      </tr>
      ))}
    </>
  );
}
export default EtudiantValider;
