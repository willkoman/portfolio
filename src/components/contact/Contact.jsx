import React from "react";
import './contact.css';
import {SiDiscord} from 'react-icons/si';
import { SiLinkedin } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Want to get in touch?</h5>
            <h2>Contact</h2>
            <div className="contact__container">
                <div className="row">
                    <div className="contact-item">
                        <h3>Send me an email</h3>
                        <button className="btn" onClick={() => window.open("mailto:willko@willko.dev")}><AiFillMail/></button>
                    </div>
                    <div className="contact-item">
                        <h3>Add me on LinkedIn</h3>
                        <button className="btn" onClick={() => window.open("https://www.linkedin.com/in/william-krasnov/")}><SiLinkedin/></button>
                    </div>
                    <div className="contact-item">
                        <h3>Join my Discord</h3>
                        <button className="btn discord" onClick={() => window.open("https://discord.gg/jjSJZJmKaB")}><SiDiscord/></button>
                    </div>
                    <div className="contact-item">
                        <h3>HMU on WhatsApp</h3>
                        <button className="btn" onClick={() => window.open("https://wa.me/2672278466")}><SiWhatsapp/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;