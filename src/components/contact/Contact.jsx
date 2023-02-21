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
                        <button className="btn" onClick={() => window.open("mailto:willko@willko.dev")}><p>Email</p><AiFillMail/></button>
                    </div>
                    <div className="contact-item">
                        <h3>Add me on LinkedIn</h3>
                        <button className="btn" onClick={() => window.open("https://www.linkedin.com/in/william-krasnov/")}><p>LinkedIn</p><SiLinkedin/></button>
                    </div>
                    <div className="contact-item">
                        <h3>Join my Discord</h3>
                        <button className="btn discord" onClick={() => window.open("https://discord.gg/jjSJZJmKaB")}><p>Discord</p><SiDiscord/></button>
                    </div>
                    <div className="contact-item">
                        <h3>Text me on WhatsApp</h3>
                        <button className="btn" onClick={() => window.open("https://wa.me/2672278466")}><p>Whatapp</p><SiWhatsapp/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;