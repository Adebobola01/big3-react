import React from "react";
import "./ToggleBtn.scss";

const ToggleBtn = props => {
    return (
        <button class="toggle-button" onClick={props.openSidebar} >
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
        </button>
    )
}

export default ToggleBtn;