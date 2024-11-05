import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What are my skills?</h5>
      <h2>Experience</h2>
      <div className="experience">
        <div className="container experience__container">
          <div className="experience__coding">
            <h3>Programming</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Python</h4>
                <small className="text-light">Skilled</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>C#</h4>
                <small className="text-light">Skilled</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>JS</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </article>
            </div>
          </div>
        </div>
        <div className="container experience__container">
          <div className="experience__design">
            <h3>Design</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Photoshop</h4>
                <small className="text-light">Skilled</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>After Effects</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>3DS MAX</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Illustrator</h4>
                <small className="text-light">Intermediate</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
