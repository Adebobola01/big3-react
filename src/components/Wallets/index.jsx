import React,{useState} from "react";
import "./Wallets.scss";
import Backdrop from "../Backdrop";
import metamaskLogo from "../../assets/images/MetaMask_Fox.svg";
import walletConnectLogo from "../../assets/images/walletconnect-seeklogo.com.svg";
import { getUserAccount } from "../../utils/helpers";
import Web3 from "web3";

const { ethereum } = window;

const web3 = new Web3(Web3.givenProvider);

const Wallets = props => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("")
    const connectWallet = async() => {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        props.walletsHandler()
        console.log(accounts);
        setConnected(true);
        setAddress(accounts[0]);
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