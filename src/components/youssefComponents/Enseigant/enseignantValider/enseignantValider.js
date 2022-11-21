import React,{useEffect}from "react";
import "../../../../App.css";
import TableButtons from "../../tablesButtons/tablesButtons";
import {useLocation} from 'react-router-dom'
import axios from 'axios';

function EnseigantValider() {
  const location=useLocation()
    const [enseignant,setEnseignant]=React.useState([])
  

    
    useEffect(()=>{
        //console.log(location)
        if(location.pathname==='/adminDashBorad/AllEnseignant'){
            axios.get("http://localhost:5000/enseignant/").then(res=>{
                //console.log(res.data)
                setEnseignant(res.data)

            }
            )
        }else if(location.pathname==="/adminDashBorad/enseignantValid"){
            axios.get("http://localhost:5000/enseignant/valid").then(res=>{
                //console.log(res.data)
                setEnseignant(res.data)
            })
        }else if(location.pathname==="/adminDashBorad/enseignantNotValid"){
            axios.get("http://localhost:5000/enseignant/notValid").then(res=>{
                //console.log(res.data)
                setEnseignant(res.data)
            })
        }
    },[location])
   
    
    
  
  return (
    <>
    
      {/* {console.log("enseigant ",enseignant)} */}
    {enseignant===[]?<>loading..</>:enseignant?.map(item=>(
      <tr className="hover-table" key={item?.ncin}>
        {console.log("item ",item.nom)}
        <td>{item?.ncin}</td>
        <td>{item?.nom}</td>
        <td>{item?.prenom}</td>
        <td>{item?.email}</td>
        <td>{item?.ntel}</td>
        <td>{item?.specialite}</td>        
        <td>
         <TableButtons cin={item?.ncin} type="isEnseignant"  />
        </td>
        
      </tr>
      ))}
      
    </>
  );
}

export default EnseigantValider;
