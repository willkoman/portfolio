import React from "react";
import "./nav.css";
import { RiHome2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiBarChart2Line } from "react-icons/ri";
import { RiArtboardLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#header"
        to="header"
        spy={true}
        smooth={true}
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHome2Line />
      </a>
      <a
        href="#about"
        to="about"
        spy={true}
        smooth={true}
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <RiUserLine />
      </a>
      <a
        href="#experience"
        to="experience"
        spy={true}
        smooth={true}
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiBarChart2Line />
      </a>
      <a
        href="#portfolio"
        to="portfolio"
        spy={true}
        smooth={true}
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiArtboardLine />
      </a>
      <a
        href="#contact"
        to="contact"
        spy={true}
        smooth={true}
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsBookLine />
      </a>
    </nav>
  );
};

export default Nav;
