import React, {useState} from "react";
import "./Create.scss"

const CreateInput = props => {
    let content;
    let value = 0;
    switch (props.type) {
        case "textarea":
            content = <>
                <label className="createInput_label" >{props.label}</label>
                <textarea placeholder={props.placeholder} className="createInput_textarea" rows={"4"} onChange={props.textareaChanged} ></textarea>
            </>
            break;
        case "input":
            content = <>
                <label className="createInput_label" >{props.label}</label>
                <input type="text" placeholder={props.placeholder} className="createInput_field" onChange={props.inputChanged} />
            </>
            break;
        case "select":
            content = <>
                <label className="createInput_label" >{props.label}</label>
                <select name={props.name} className="createInput_field" defaultValue={props.options[0].value.toLowerCase()} onChange={props.selectChanged} >
                {props.options.map(op => (
                    <option className="createInput_option" value={op.value.toLowerCase()} key={op.value} >{ op.value}</option>
                ))}
                </select>
            </>
            break;
        case "property":
            content = (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" , marginBottom: "-1rem"}} key={value + 1} >
                        <input type="text" placeholder="Trait" className="createInput_field" style={{ width: "45%" }} />
                        <input type="text" placeholder="Value" className="createInput_field" style={{ width: "45%" }} />
                    </div>
                </>
            )
            break;
        default:
            content = <input type="text" placeholder={props.placeholder} className="createInput_field" />;
            break;
    }

    return (
        <div className="createInput" >
            {content}
        </div>
    )
}

export default CreateInput;