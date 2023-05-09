import React, {useState} from "react";
import "./Error.scss";

const Error = (props: any) => {
    const [show, setShow] = useState(true)

    const classes =["Error", "openError"]

    const closeError = () => {
        setShow(false)
    }


    return (
        <div style={{height: "100vh", width: "100vw"}} >
            <div className={`Error ${!show ? "closeError" : ""}`}>
                <div className="Error-content" >
                    <p>{props.errorMessage}</p>
                </div>
                <hr/>
                <div className="Error-btn" >
                    <button onClick={closeError} >cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Error;