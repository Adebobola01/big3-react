import React from "react";
import "./ConnectBtn.scss"
const connectBtn = props => {
    return (
        <div className="connect__wallet-container" >
            <button className="connect__wallet-btn">
                Connect Wallet
            </button>
        </div>
    )
}

export default connectBtn;