import React from "react";
import './about.css';
import Will3 from '../../assets/will3.png';
import { RiAwardLine } from "react-icons/ri";
import {GiJesterHat} from "react-icons/gi";
import {RiGameLine} from "react-icons/ri";

const About = () => {
    return (
        <section id="about">
            <h5>Get to know me</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Will3} alt="Will again"></img>
                    </div>
                </div>
                    <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <RiAwardLine className="about__icon"/>
                            <h5>Experience</h5>
                            <small>7+ years of experience</small>
                        </article>
                        <article className="about__card">
                            <GiJesterHat className="about__icon"/>
                            <h5>Jack of all Trades</h5>
                            <small>Dabbles in all aspects of digital creation</small>
                        </article>
                        <article className="about__card">
                            <RiGameLine className="about__icon"/>
                            <h5>Game Developer</h5>
                            <small><b>2</b> Games released on public stores.</small>
                        </article>
                    </div>
                    <p>
                        I am a full stack developer with a passion for creating digital experiences. I have experience in a wide range of technologies and have worked on projects ranging from small websites to large scale enterprise applications. I am a jack of all trades and have experience in all aspects of digital creation. I have a passion for creating games and have released two games on public stores. I am always looking for new opportunities to learn and grow as a developer.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About;