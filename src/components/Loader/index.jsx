import React from "react";
import "./Loader.scss";

const Loader = props => {
    return (
        <div style={{width: props.width || "100vw" , height: props.height || "100vh" , position: "relative", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "inherit"}}  >
            <span className="loader"></span>
        </div>
    )
}

export default Loader;