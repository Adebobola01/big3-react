import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import "./Hero.scss";
import { fetchData } from "../../utils/helpers";



const Hero = props => {

    const baseUrl = process.env.REACT_APP_BASEURL;

    const [hero, setHero] = useState()

    const getHeroNft = async() => {
        const data = await fetchData("GET", "heroNft");
    }
    useEffect(() => {
        getHeroNft()
    }, [])
    

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