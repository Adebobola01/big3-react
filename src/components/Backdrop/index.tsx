import React from "react";
import styles from "./backdrop.module.scss";
const Backdrop = (props: any) => {



    return (
        <div className={`${styles.backdrop} ${props.open ? styles.open : ""}`} onClick={props.click} ></div>
    )
}

export default Backdrop;