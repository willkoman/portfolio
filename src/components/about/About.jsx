import React from "react";
import "./about.css";
import Will3 from "../../assets/will3.png";
import { RiAwardLine } from "react-icons/ri";
import { GiJesterHat } from "react-icons/gi";
import { RiGameLine } from "react-icons/ri";


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
                <RiAwardLine className="about__icon" />
                <h5>Experience</h5>
                <small>7+ years of experience</small>
              </article>
              <article className="about__card">
                <GiJesterHat className="about__icon" />
                <h5>Jack of all Trades</h5>
                <small>Dabbles in all aspects of digital creation</small>
              </article>
              <article className="about__card">
                <RiGameLine className="about__icon" />
                <h5>Game Developer</h5>
                <small>
                  <b>2</b> Games released on public stores.
                </small>
              </article>
            </div>
            <p>
            I'm a full stack developer with experience building everything from small websites
            to large-scale enterprise applications. Over the years, I've worked with a wide
            range of technologies and enjoy tackling all aspects of digital development.
            I also have a passion for game creation and have released two games on public
            stores. I'm always looking for new challenges and opportunities to learn, grow,
            and improve as a developer.
            </p>
          </div>
        </div>
      </section>
  );
};

export default About;
