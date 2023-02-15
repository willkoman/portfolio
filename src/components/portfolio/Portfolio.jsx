import React from "react";
import './portfolio.css';
import LivingRoom from '../../assets/livingroom.jpg'
import RubiksCube from '../../assets/rubiks.jpg'
import Loops from '../../assets/loops.png'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>What have I made?</h5>
            <h2>Portfolio</h2>
            <div className="portfolio__container">
                <div className="row">
                    <div className="col-lg-12 portfolio-item">
                        <h3>Anagrammy</h3>
                        <a href="https://apps.apple.com/app/id1610449517/" target="_blank" rel="noopener noreferrer">
                            <img src="https://is5-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/1d/07/da/1d07da33-b934-7a9a-433f-b01c3163a4f9/5ffb2f8c-e447-41fe-af57-a2b0e38a282f_Simulator_Screen_Shot_-_iPad_Pro__U002812.9-inch_U0029__U00285th_generation_U0029_-_2022-03-23_at_14.00.51.png/643x0w.png" alt="placeholder" />
                        </a>
                    </div>
                    <div className="col-lg-12 portfolio-item">
                        <h3>Idle Loops
                        </h3>
                        <small> COMING SOON! </small>
                        <img src={Loops} alt="placeholder" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 portfolio-item">
                        <h3>Living Room Render</h3>
                        <a href={LivingRoom} target="_blank" rel="noopener noreferrer">
                            <img src={LivingRoom} alt="placeholder" />
                        </a>
                    </div>
                    <div className="col-lg-12 portfolio-item">
                        <h3>Rubiks Cube Render</h3>
                        <a href={RubiksCube} target="_blank" rel="noopener noreferrer">
                            <img src={RubiksCube} alt="placeholder" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Portfolio;