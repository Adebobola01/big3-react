import React from "react";
import "./Create.scss"

const CreateInput = props => {
    return (
        <div className="createInput" >
            <label className="createInput_label" >{ props.label}</label>
            <input type="text" placeholder={props.placeholder}  className="createInput_field" />
        </div>
    )
}

export default CreateInput;