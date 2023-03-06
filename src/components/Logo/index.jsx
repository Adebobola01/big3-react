import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/big3-logo.png"
import "./Logo.scss"
const logo = props => {
    return (
        <div className="logo">
            <NavLink to="/" >
                <img
                    src={logoImg}
                    alt="logo"
                    className="logo__icon"
                />
                <span class="logo__title">Big3</span>
            </NavLink>
        </div>
    )
}

export default logo;