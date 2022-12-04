import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import photo2 from '../../assests/images/photo2.jpg';

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={photo2} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Notre voix etudiant</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Excellent support du cours
                      </h6>
                      <p className="counter__title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Salma Damoussi</h6>
                        <p>Tunisie, Sousse</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Excellent support du cours
                      </h6>
                      <p className="counter__title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Mariem Ben Cheikh</h6>
                        <p>Tunisie, Sousse</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent support du cours
                      </h6>
                      <p className="counter__title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Youssef Najjar</h6>
                        <p>Tunisie, Sousse</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
