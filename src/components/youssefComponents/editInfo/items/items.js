import React from 'react'
import "../editInfo.css"
function Items(props){
    return(
        <>
            <div className="input-box">
            <span className="details">{props.inputName}</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
        </>
    )
}

export default Items