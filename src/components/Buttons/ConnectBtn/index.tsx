import React from "react";
import "./ConnectBtn.scss"
const connectBtn = (props: any) => {
    return (
        <div className="connect__wallet-container" >
            <button className="connect__wallet-btn" onClick={props.click} >
                Connect Wallet
            </button>
        </div>
    )
}

export default connectBtn;