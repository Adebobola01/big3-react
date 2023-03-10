import React,{useState, useContext} from "react";
import "./Wallets.scss";
import Backdrop from "../Backdrop";
import metamaskLogo from "../../assets/images/MetaMask_Fox.svg";
import walletConnectLogo from "../../assets/images/walletconnect-seeklogo.com.svg";
import { AuthContext } from "../../context/auth-context";


const Wallets = props => {
    const authContext = useContext(AuthContext);
    const connectWallet = () => {
        authContext.connect();
        props.walletsHandler();
    }
    return (
        <>
            <Backdrop open={props.open} click={props.walletsHandler} />
            <div className={`wallet__container ${props.open ? "open-wallets" : ""}` }>
                <div className="select-wallet">
                    <span> Select Wallet </span>
                    <span className="close-wallets" onClick={props.walletsHandler} >X</span>
                </div>
                <div className="wallets">
                    <div className="wallet__btn" onClick={connectWallet} >
                        <img
                            src={metamaskLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">Metamask</span>
                    </div>
                    <div className="wallet__btn">
                        <img
                            src={walletConnectLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">WalletConnect</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallets;