import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.scss"
const Hero = props => {
    return (
        <section class="section-hero">
            <div class="row">
                <div class="col-1-of-2">
                    <div class="hero__nft-container">
                    </div>
                </div>
                <div class="col-1-of-2">
                    <div class="row__content">
                        <h2>Collect, sell NFTs</h2>
                        <p>
                            Explore, collect, buy and sell anime based
                            NFTs
                        </p>
                    </div>
                    <div class="btn__container">
                        <NavLink to="/explore" className="explore-cta">EXPLORE</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;