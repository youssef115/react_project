import React from 'react'
import './information.css'

function Information (props){

    return (
        <>
        <div className="modal">
        <div  className="overlay">
        <div className="modal-content">
          <h2>les information de {props.cin}</h2>
          <table>
            <tr>
             <td>nom:</td>
             <td>youssef</td>
            </tr>
            <tr>
             <td>prenom</td>
             <td>najjar</td>
            </tr>
          </table>
          <button className="close-modal" >
            CLOSE
          </button>
          <button className='valid-modal'> valider</button>
          <button className='reject-modal'> rejeter</button>
        </div>
        </div>
      </div>
        </>
    )
}
export default Information