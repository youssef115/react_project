import React, { useState, useEffect } from 'react'
import axios from 'axios'

function InfoEtud (props) {

  const handleEdit = () => {
    props.handle(false)
  }

  const [user, setUser] = useState([]);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("")
  const [cin, setCin] = useState("")
  const [email, setEmail] = useState("")
  const [classe, setClasse] = useState("")



  //this function is used to put the data of the student that i use it to put the data in the form
  const handledataEtudiant = (data) => {
    setUser(data)
    //console.log(data)
    setNom(data.nom)
    setPrenom(data.prenom)
    setCin(data.ncin)
    setEmail(data.email)
    setClasse(data.classe)


  }
  //this function is used to submit form and do the update 
  const handleSubmit = (e) => {
    e.preventDefault()
     {
      const etudiantObj = {
        nom: nom,
        prenom: prenom,
        ncin: cin,
        email: email,
        classe:classe,
      }
      axios.put(`http://localhost:5000/etudiant/updateEtudiant/${user._id}`, etudiantObj)
        .then(console.log(etudiantObj, "has been added to the database"))
      }
    window.location.reload(false)


  }

  useEffect(() => {
    axios.get(`http://localhost:5000/etudiant/getOne/${props.cin}`)
      .then(res => handledataEtudiant(res.data))
  }, [props.cin])



  return (
    <>

      {/* {console.log("data from edit user",user)} */}
      <div className="modall">
        <div className="overlay">
          <div className="modal-contentt">
            <form onSubmit={e => handleSubmit(e)}>
              <div className="user-details ">

                <div className="input-box">
                  <span className="details">Nom</span>
                  <input type="text" required defaultValue={nom} onChange={(e) => setNom(e.target.value)} />

                </div>

                <div className="input-box">
                  <span className="details">Prenom</span>
                  <input type="text" required defaultValue={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">CIN</span>
                  <input type="text" required defaultValue={cin} onChange={(e) => setCin(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" required defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details"> classe</span>
                  <input type="text" required defaultValue={classe} onChange={(e) =>  setClasse(e.target.value) }/>
                </div>


              </div>
              <div className="button">
                <input type="submit" value="mettre a jour" />
              </div>
            </form>
            <button className='close-modal-edit' onClick={handleEdit}>close </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default InfoEtud ;