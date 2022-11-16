import React from 'react'
import "./editInfo.css"
import Items from './items/items'
//import "../Information/information.css"
function EditInfo(props){
   // const [modal,setModal]=React.useState(true)
    
    const handleEdit=()=>{
      
      //setModal(!modal)
      //console.log("modal val ",modal)
      props.handle(false)
    }
    return(
    <>
    
       
            <div className="modal">
            <div  className="overlay">
            <div className="modal-content">
                <form>
            <div className="user-details ">
                <Items inputName="Nom"/>
                <Items inputName="Prenom"/>
                <Items inputName="CIN"/>
                <Items inputName="Numero de telephone"/>
                <Items inputName="Email"/>
                <Items inputName="Mot de passe"/>
                <Items inputName="Ville"/>
                <Items inputName="Secialite"/>
                
              </div>
              <div className="button">
                <input type="submit" value="Register"/>
              </div>
              </form>
                <button className='close-modal-edit' onClick={handleEdit}>close </button>
             </div>
             </div>
             </div>
       
    </>
    )
}

export default EditInfo