import React from "react";

const CreateInput = props => {
    return (
        <>
            <label>{ props.label}</label>
            <input type="text" placeholder={props.placeholder}  />
        </>
    )
}