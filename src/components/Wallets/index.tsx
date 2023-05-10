import React,{useState, useContext} from "react";
import "./Wallets.scss";
import Backdrop from "../Backdrop";
import metamaskLogo from "../../assets/images/MetaMask_Fox.svg";
import walletConnectLogo from "../../assets/images/walletconnect-seeklogo.com.svg";
import { AuthContext } from "../../context/auth-context";
import Loader from "../Loader";


const Wallets = (props: any) => {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const connectWallet = async() => {
        setLoading(true);
        await authContext.connect();
        setLoading(false); 
        props.walletsHandler();
    }
    return (
        <>
            <Backdrop open={props.open} click={props.walletsHandler} />
            <div className={`wallet__container ${props.open ? "open-wallets" : ""}` }>
                    <span className="close-wallets" onClick={props.walletsHandler} >X</span>
                <div className="select-wallet">
                    <span> Select Wallet </span>
                </div>
                <div className="wallets">
                    <div className="wallet__btn" onClick={connectWallet} >
                        <img
                            src={metamaskLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">Metamask</span>
                        {loading ? <Loader width="4rem" height="4rem"/> : ""} 
                    </div>
                    <div className="wallet__btn">
                        <img
                            src={walletConnectLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">WalletConnect</span>
                        {/* {loading ? <Loader width="4rem" height="4rem" /> : ""} */}
                        
                    </div>
                    <div className="wallet__btn">
                        <img
                            src={walletConnectLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">WalletConnect</span>
                        {/* {loading ? <Loader width="4rem" height="4rem" /> : ""} */}
                        
                    </div>
                    <div className="wallet__btn">
                        <img
                            src={walletConnectLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">WalletConnect</span>
                        {/* {loading ? <Loader width="4rem" height="4rem" /> : ""} */}
                        
                    </div>
                    <div className="wallet__btn">
                        <img
                            src={walletConnectLogo}
                            alt="metamask__logo"
                            className="wallet__img"
                        />
                        <span className="wallet__name">WalletConnect</span>
                        {/* {loading ? <Loader width="4rem" height="4rem" /> : ""} */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallets;