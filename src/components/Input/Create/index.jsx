import React, {useState} from "react";
import "./Create.scss"

const CreateInput = props => {
    let content;
    let value = 2
    
    const [properties, setProperties] = useState([
        <div style={{ display: "flex", justifyContent: "space-between" , marginBottom: "2rem"}} key="0" >
            <input type="text" placeholder="Trait" className="createInput_field" style={{ width: "45%" }} />
            <input type="text" placeholder="Value" className="createInput_field" style={{ width: "45%" }} />
        </div>, 
        <div style={{ display: "flex", justifyContent: "space-between" , marginBottom: "2rem"}} key="1" >
            <input type="text" placeholder="Trait" className="createInput_field" style={{ width: "45%" }} />
            <input type="text" placeholder="Value" className="createInput_field" style={{ width: "45%" }} />
        </div>
    ])

    const addProp = () => {
        setProperties(prev => (
            [...prev, <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }} key={value} >
            <input type="text" placeholder="Trait" className="createInput_field" style={{ width: "45%" }} />
            <input type="text" placeholder="Value" className="createInput_field" style={{ width: "45%" }} />
            </div>]
        )) 
        value++
    }
    switch (props.type) {
        case "textarea":
            content = <textarea placeholder={props.placeholder} className="createInput_textarea" rows={"4"} ></textarea>;
            break;
        case "input":
            content = <input type="text" placeholder={props.placeholder} className="createInput_field" />;
            break;
        case "select":
            content = <select name="collection" className="createInput_field" defaultValue="new" >
                <option className="createInput_option" value="naruto">Naruto</option>
                <option className="createInput_option" value="azuki">Azuki</option>
                <option className="createInput_option" value="one piece">One Piece</option>
                <option className="createInput_option" value="bleach">Bleach</option>
                <option className="createInput_option" value="new">New Collection</option>
            </select>
            break;
        case "property":
            content = (
                <>
                    { properties }
                    <button onClick={addProp} style={{padding: "1.6rem", width: "8rem", backgroundColor: "grey", border: "none", color: "white", borderRadius: "1rem", fontSize: "2rem", cursor: "pointer", }} > add</button>
                </>
            )
            break;
        default:
            content = <input type="text" placeholder={props.placeholder} className="createInput_field" />;
            break;
    }

    return (
        <div className="createInput" >
            <label className="createInput_label" >{props.label}</label>
            {content}
        </div>
    )
}

export default CreateInput;