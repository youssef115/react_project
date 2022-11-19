import React from 'react'
import "../editInfo.css"
function Items(props){
    const [state,setState]=React.useState('')
    React.useEffect(()=>{
        setState(props.data)
    },[props?.data])
    
    return(
        
        <>
          <div className="input-box">
            <span className="details">{props.inputName}</span>
            <input type="text"  required  defaultValue={state} />
           
          </div>
        </>
    )
}

export default Items