import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import './login.css';

const Login = () => {

  const [user, setUser] = useState({ email: "", mot_de_passe: "" })
  const [role, setRole] = useState("etudiant");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    console.log(user);
  }
  const handleSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(user));
    setIsSubmit(true);
  }


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas email valide"
    }
    if (values.mot_de_passe.length < 4) {
      errors.mot_de_passe = "le mot de passe doit comporter plus de 4 caractères"
    }
    return errors;


  }

  const login = () => {
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      if (role == "enseignant") {
       
        axios.post("http://localhost:5000/enseignant/signin/", user)
          .then(res => alert(res.data.message));
          
      } else {
        axios.post("http://localhost:5000/etudiant/signin/", user)
          .then(res => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token);
            alert(res.data.message)});



      }
    }
  }



  return (
    <div class="container-login">
      <div class="thumbnail"><img src={require("../../.././res/images/logo.PNG")} /></div>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <h4>Connexion</h4>

          <div class="input-group input-group-icon">
            <input type="email"
              placeholder="Adresse email"
              name="email"
              value={user.email} onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-envelope"></i>
              <p>{formErrors.email}</p>
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input type="password" placeholder="Password"
              name="mot_de_passe"
              value={user.mot_de_passe}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-key"></i>
            </div>
            <p>{formErrors.mot_de_passe}</p>

          </div>
          <div class="input-group">
            <input id="enseignant" type="radio" value={"enseignant"} onChange={(e) => setRole(e.currentTarget.value)} checked={role === "enseignant"} />
            <label for="enseignant">Enseignant</label>
            <input id="etudiant" type="radio" value={"etudiant"} checked={role === "etudiant"} onChange={(e) => setRole(e.currentTarget.value)} />
            <label for="etudiant">Etudiant</label>
          </div>


          <button  class="button-login"type="submit" onClick={login} >Connexion</button>
          <div class="footer-link ">
            <span className="span1">Vous etes dejà memebre? <a href="/register" className="a1">Inscription</a></span>
          </div>
        </div>



      </form>
    </div>

  );
}
export default Login
