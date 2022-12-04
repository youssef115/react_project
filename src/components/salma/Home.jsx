import React, { Fragment } from "react";
import Header from "./composants/Header/Header";
import HeroSection from "./composants/Hero-Section/HeroSection";
import AboutUs from "./composants/About-us/AboutUs";
import ChooseUs from "./composants/Choose-us/ChooseUs";
import Features from "./composants/Feature-section/Features";
import FreeCourse from "./composants/Free-course-section/FreeCourse";
import Testimonials from "./composants/Testimonial/Testimonials";
import Newsletter from "./composants/Newsletter/Newsletter";
import Footer from "./composants/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <ChooseUs/>
      <Features/>
      <FreeCourse/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </Fragment>
  );
};

export default Home;