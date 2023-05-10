import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/big3-logo.png"
import "./Logo.scss"
const logo = (props: any) => {
    return (
        <Link to="/" >
            <div className="logo">
                <img
                    src={logoImg}
                    alt="logo"
                    className="logo__icon"
                />
                <span className="logo__title">Big3</span>
            </div>
        </Link>
    )
}

export default logo;