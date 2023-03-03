import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "./assets/big3-logo.png"
const logo = props => {
    return (
        <div class="logo">
            <NavLink link="/" >
                <img
                    src={logoImg}
                    alt="logo"
                    class="logo__icon"
                />
                <span class="logo__title">Big3</span>
            </NavLink>
        </div>
    )
}

export default logo;