import React from "react";
import "./Backdrop.scss";
const Backdrop = props => {



    return (
        <div className={`backdrop ${props.open ? "open" : ""}`} onClick={props.click} ></div>
    )
}

export default Backdrop;