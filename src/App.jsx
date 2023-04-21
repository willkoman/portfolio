import React from "react";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Portfolio from "./components/portfolio/Portfolio";


const App = () => {
    return (
      <>
        <Header/>
        {/* <Nav/> Temporarily disabled*/}
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </>
    )
}

export default App;