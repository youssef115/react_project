import React,{useState} from 'react'
import AddCour from './AddCour'

 function ButtonCour(props) {
    const [showAdd,setAdd]=useState(false)
    const handleAdd=(val)=>{
      
        setAdd(val)
    }

  return (
    <div>
       
    <button className='adds'  onClick={()=>setAdd(!showAdd)}>
          
         Add Cour
         
        </button>

           {showAdd? <AddCour handle={handleAdd} nomCour={props.nomCour}/>:null }   
    </div>
  )
}

export default ButtonCour 