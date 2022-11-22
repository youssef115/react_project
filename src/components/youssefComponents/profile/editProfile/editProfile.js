import React from 'react'
import './editProfile.css'
 function EditProfile(){
    return(
        <>
        <div className="modal-content2">
        <form >
        <div className="user-details ">
        <div className="input-box">
          <span className="details">Nom</span>
          <input type="text"  required    />
          
        </div>

        <div className="input-box">
          <span className="details">Prenom</span>
          <input type="text"  required   />
        </div>
        <div className="input-box">
          <span className="details">CIN</span>
          <input type="text"  required  />
        </div>
        <div className="input-box">
          <span className="details">Numero</span>
          <input type="text"  required  />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text"  required  />
        </div>
        <div className="input-box">
          <span className="details">Login</span>
          <input type="text"  required  />
        </div>
        <div className="input-box">
          <span className="details">Ville</span>
          <input type="text"  required />
        </div>
        <div className="input-box">
          <span className="details">mot de passe</span>
          <input type="text"  required  />
        </div>
          
          </div>
          <div className="button">
            <input type="submit" value="mise a jour"/>
          </div>
          </form>
          </div>
        </>
    )
}
export default EditProfile;