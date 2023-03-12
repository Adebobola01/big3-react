import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/big3-logo.png"
import "./Logo.scss"
const logo = props => {
    return (
        <div className="logo">
            <Link to="/" >
                <img
                    src={logoImg}
                    alt="logo"
                    className="logo__icon"
                />
                <span className="logo__title">Big3</span>
            </Link>
        </div>
    )
}

export default logo;