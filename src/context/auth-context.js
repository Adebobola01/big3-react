import React, { createContext, useState } from "react";
import { getUserAccount, verifyMessage, logoutHandler } from "../utils/helpers";
import Web3 from "web3";
const { ethereum } = window;
const web3 = new Web3(Web3.givenProvider);

export const AuthContext = createContext({
    auth: false,
    address: "",
    connect: () => { },
    disconnect: () => { },
    autoConnect: ()=>{}
});

const AuthContextProvider = props => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");
    // const [authSignature, setAuthSignature] = useState("");
    const connectWallet = async () => {
        try {
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const account = accounts[0];
            const message = await getUserAccount(account);
            const signature = await web3.eth.personal.sign(message, account);
            const res = await verifyMessage(signature, message);
            console.log(res);
            setConnected(true);
            setAddress(res);         
        } catch (error) {
            console.log(error);
        }
    }
    const disconnectWallet = () => {
        logoutHandler()
        setConnected(false);
        setAddress("");
    }
    const autoConnect = (_address) => {
        setConnected(true);
        setAddress(_address)
    }
    return (
        <AuthContext.Provider value={{auth: connected, address: address, connect: connectWallet, disconnect: disconnectWallet, autoConnect: autoConnect }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

