


import axios from 'axios';
import React,{useState,useEffect} from 'react'

function Info (props){
  const [cour,setCour]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/cour/${props.nomCour}`).then(result=>setCour(result.data))
  },[props.nomCour])

  const handleInfo=()=>{
      props.handle(false)
  }

    return (
        <>
        {console.log(cour)}
        
        <div className="modall">
        <div  className="overlay">
        <div className="modal-contentt">
          <h2 className='center-title'>les information de {props.nomCour}</h2>
          <table>
            <tbody>
      
             
            <tr>
             <td>nom :</td>
             <td>{cour.nomCour}</td>
            </tr>

            <tr>
             <td> {}</td>
             <td>{}</td>
            </tr>
            </tbody>
          </table>
          <button className="close-modal" onClick={handleInfo}>
            CLOSE
          </button>
        </div>
        </div>
      </div>
        </>
    )
}
export default Info