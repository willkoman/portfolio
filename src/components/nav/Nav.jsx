import React, { useState, useEffect } from "react";
import "./nav.css";
import { RiHome2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiBarChart2Line } from "react-icons/ri";
import { RiArtboardLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveNav(sectionId);
  };

  // Scroll detection to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#header', '#about', '#experience', '#portfolio', '#contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#header"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#header');
        }}
        className={activeNav === "#header" ? "active" : ""}
        title="Home"
      >
        <RiHome2Line />
      </a>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#about');
        }}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
      >
        <RiUserLine />
      </a>
      <a
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#experience');
        }}
        className={activeNav === "#experience" ? "active" : ""}
        title="Experience"
      >
        <RiBarChart2Line />
      </a>
      <a
        href="#portfolio"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#portfolio');
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
        title="Portfolio"
      >
        <RiArtboardLine />
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#contact');
        }}
        className={activeNav === "#contact" ? "active" : ""}
        title="Contact"
      >
        <RiContactsBookLine />
      </a>
    </nav>
  );
};

export default Nav;
