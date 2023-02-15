import React from "react";
import './nav.css';
import { RiHome2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiBarChart2Line} from "react-icons/ri";
import {RiArtboardLine} from "react-icons/ri";
import {RiContactsBookLine} from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><RiHome2Line/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><RiUserLine/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><RiBarChart2Line/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''} ><RiArtboardLine/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><RiContactsBookLine/></a>
        </nav>
    )
}

export default Nav;