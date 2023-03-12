import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.scss"
const Hero = props => {
    return (
        <section className="section-hero">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="hero__nft-container">
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="row__content">
                        <h2>Collect, sell NFTs</h2>
                        <p>
                            Explore, collect, buy and sell anime based
                            NFTs
                        </p>
                    </div>
                    <div className="btn__container">
                        <NavLink to="/explore" className="explore-cta">EXPLORE</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;