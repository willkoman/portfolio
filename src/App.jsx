import React from "react";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import About from './components/about/About';


const App = () => {
    return (
      <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </>
    )
}

export default App;