import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import photo1 from '../../assests/images/photo1.jpg';


const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              N’importe quand, n’importe où <br /> Apprendre selon votre <br /> Convenable emploi
              </h2>
              <p className="counter__title">
              Le matériel de cours en ligne est accessible 24 heures sur 24,<br /> 
              tous les jours. Vous pouvez télécharger les leçons et y accéder <br /> pour les relire quand vous
               le souhaitez Lire ici Commencez facilement.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btnn">Rechercher</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={photo1} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
