import React, { useRef } from "react";
import { Container } from "reactstrap";
import {Button} from '@mui/material';
import "./header.css";
import {useNavigate} from "react-router-dom";




const navLinks = [
  {
    display: "Acceuil",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
 
];

const Header = () => {
  const menuRef = useRef();
 

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

 
    const navigate = useNavigate();

  return (
    <header className="headerr">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> 3ALLEMNI.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                    
                  </li>
                ))}
                
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +216 0123456789
              </p>
            </div>
            <Button onClick={()=>navigate('login')} className="btnn">Se Connecter</Button>
            <Button onClick={()=>navigate('register')} className="btnn" variant="outlined" size="medium">Créer un compte</Button>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;