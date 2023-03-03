import React from "react";
import "./Wallets.scss"
// import metamaskLogo from "./assets/metamask-fox.svg";
// import walletConnectLogo from "./assets/WalletConnect-icon.svg"

const Wallets = props => {
    console.log(props.open)
    return (
        <div className={`wallet__container ${props.open ? "open-wallets" : ""}` }>
            <div className="select-wallet">
                <span> Select Wallet </span>
                <span className="close-wallets" onClick={props.close} >X</span>
            </div>
            <div className="wallets">
                <div className="wallet__btn metamask__btn">
                    {/* <img
                        src={metamaskLogo}
                        alt="metamask__logo"
                        className="wallet__img"
                    /> */}
                    <span className="wallet__name">Metamask</span>
                </div>
                <div className="wallet__btn walletConnect__btn">
                    {/* <img
                        src={walletConnectLogo}
                        alt="metamask__logo"
                        className="wallet__img"
                    /> */}
                    <span className="wallet__name">WalletConnect</span>
                </div>
            </div>
        </div>
    )
}

export default Wallets;