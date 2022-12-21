import axios from 'axios';
import React,{useState,useEffect} from 'react'
export default function InfoSess(props) {
  const [session,setSession]=useState([]);
  useEffect(()=>{
  axios.get(`http://localhost:5000/session/63a24bf4b6da14b42ff73437`).then(res=>setSession(res.data))
    
  },[props.nomSession])

  const handleInfo=()=>{
      props.handle(false)
  }
    return (
        <>  
        <div className="modall">
        <div  className="overlay">
        <div className="modal-contentt">
          <h2 className='center-title'>les information de {session.nomSession}</h2>
          <table>
            <tbody>
            <tr>
             <td>nom :</td>
             <td>{session.nomSession}</td>
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

 

