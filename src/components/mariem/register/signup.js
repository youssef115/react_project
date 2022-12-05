import React, { useState, useEffect, useRef } from "react";
import axios from "axios"
//import createBrowserHistory from 'history/createBrowserHistory';
import './signup.css';
import 'font-awesome/css/font-awesome.min.css';

import FormData from "form-data";

const SignUp = () => {
//const history = createBrowserHistory({ forceRefresh: true });


  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    login: "",
    mot_de_passe: "",
    ncin: "",
    ntel: "",
    email: "",
    ville: "",
    specialite: "",
    classe: "",
    
    reEnterPassword: "",
    fichier: "",
  })
 // const [fichier,setFichier]=useState(null);


  const [type, setType] = useState("etudiant");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const userFile=useRef(null);
  const handleChange = e => {
    const { name, value } = e.target
    console.log(e.target);
    
    if (name == 'fichier'){
      userFile.current=e.target.files[0];
      setUser({
      ...user,
      
      fichier:e.target.files[0]
   
      
    })}
    else{
      setUser({
        ...user,
        [name]: value,
        
     

    })
  }
}
console.log(userFile.current);
  const handleSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(user));
    setIsSubmit(true);
    console.log(e);
  }
  const onInputChange = e =>{
    console.log(e.target.files);
    setUser({...user,fichier:e.target.files[0]});
  }
useEffect(()=>{
  console.log(user);
},[user])

useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      console.log(user);
    }
  })
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Champ obligatoire";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas email valide"
    }
  
    if (values.mot_de_passe.length < 4) {
      errors.mot_de_passe = "le mot de passe doit comporter plus de 4 caractères"
    } else if (values.mot_de_passe !== values.reEnterPassword) {
      errors.mot_de_passe = "votre mot de passe et confirmer mot de passe  ne correspondent pas "
    }
   
    if (values.mot_de_passe !== values.reEnterPassword) {
      errors.reEnterPassword = "votre mot de passe et confirmer mot de passe  ne correspondent pas "
    }
    
    return errors;


  }
  const register =()=> {
  
    
    
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      if (type == "enseignant") {
        const { nom, prenom, login, mot_de_passe, ncin, ntel, email, ville, specialite, fichier, reEnterPassword } = user
        if (nom && prenom && login && mot_de_passe && ncin && ntel && email && ville && specialite && fichier && reEnterPassword && (mot_de_passe === reEnterPassword)) {
          axios.post("http://localhost:5000/enseignant/signup", user)
            .then(res => {
              alert(res.data.message)

            })

        } else {
          alert("invalid input")
        }
      }
      else {
        const { nom, prenom, login, mot_de_passe, ncin, ntel, email, ville, classe, fichier, reEnterPassword } = user
        if (nom && prenom && login && mot_de_passe && ncin && ntel && email && ville && classe && fichier && reEnterPassword && (mot_de_passe === reEnterPassword)) {
          axios.post("http://localhost:5000/etudiant/signup", {...user,fichier:new FormData().append("file",userFile.current)})
            .then(res => {
              alert(res.data.message)
              
             // history.push('/login');
            })

        } else {
          alert("invalid input")
        }
      }
    }

  }

  return (
    <div class="container-signup" >
      <form onSubmit={handleSubmit } enctype="multipart/form-data">
        <div class="row">
          <h4>Créer compte</h4>
          <div class="onerow">
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                required
                onChange={handleChange}
                value={user.nom}
              />
              <div class="input-icon"><i class="fa fa-user"></i></div>

            </div>
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                value={user.prenom}
                onChange={handleChange}
                required
              />
            </div>
            
          </div>
          <div class="input-group input-group-icon">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              name="login"
              value={user.login}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-user"></i></div>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="email"
              placeholder="Adresse email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-envelope"></i></div>
            <p>{formErrors.email}</p>
          </div>
          <div class="onerow">
            <div class="input-group input-group-icon">
              <input
                type="number"
                placeholder="CIN "
                name="ncin"
                value={user.ncin}
                onChange={handleChange}
                required
              />
              <div class="input-icon"><i class="fa fa-id-card"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input
                type="number"
                placeholder="Téléphone "
                name="ntel"
                value={user.ntel}
                onChange={handleChange}
                required
              />
              <div class="input-icon"><i class="fa fa-phone"></i></div>
            </div>
          </div>

          <div class="input-group input-group-icon">
            <input
              type="password"
              name="mot_de_passe"
              placeholder="Mot de passe"
              value={user.mot_de_passe}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-key"></i></div>
            <p>{formErrors.mot_de_passe}</p>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="password"
              name="reEnterPassword"
              placeholder="Confirmer mot de passe"
              value={user.reEnterPassword}
              onChange={handleChange}
              required
            />
            <div class="input-icon">
              <i class="fa fa-check"></i>
            </div>
            <p>{formErrors.reEnterPassword}</p>
          </div>
          <div class="input-group">
            <input id="enseignant" type="radio" value={"enseignant"} onChange={(e) => setType(e.currentTarget.value)} checked={type === "enseignant"} />
            <label for="enseignant">Enseignant</label>
            <input id="etudiant" type="radio" value={"etudiant"} checked={type === "etudiant"} onChange={(e) => setType(e.currentTarget.value)} />
            <label for="etudiant">Etudiant</label>
          </div>
          {type === "enseignant" && (
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Spécialité"
                name="specialite"
                value={user.specialite}
                onChange={handleChange}
                required
              />
              <div class="input-icon"><i class="fa fa-book"></i>
            </div>
            </div>
          )}
          {type === "etudiant" && (
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Classe"
                name="classe"
                value={user.classe}
                onChange={handleChange}
                required
              />
              <div class="input-icon"><i class="fa fa-users"></i>
              </div>
            </div>
          )}
          <div class="input-group input-group-icon">
            <input
              type="text"
              placeholder="Ville"
              name="ville"
              value={user.ville}
              onChange={handleChange}
              required
            />
            <div class="input-icon">
              <i class="fa fa-location-arrow"></i>            
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="file"
              placeholder="Fichier de validation"
              name="fichier"
              // value={user.fichier.name}
              onChange={handleChange}
              required
              
              
            />
            <div class="input-icon"><i class="fa fa-file"></i></div>
          </div>
          <button class="button-signup" type="submit" onClick={register} >Enregistrer</button>
          <div class="footer-link ">
            <span className="span1">Vous etes dejà memebre? <a href="/login" className="a1">Connexion</a></span>
            </div>
        </div>


      </form>
    </div>
    
  );
}
export default SignUp