import React, { createContext, useState } from "react";
import { getUserAccount, verifyMessage } from "../utils/helpers";
import Web3 from "web3";
const { ethereum } = window;
const web3 = new Web3(Web3.givenProvider);

export const AuthContext = createContext({
    auth: false,
    address: "",
    connect: () => { },
    disconnect: () => { },
    
});

const AuthContextProvider = props => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");
    const [authSignature, setAuthSignature] = useState("");
    const connectWallet = async () => {
        try {
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const account = accounts[0];
            const message = await getUserAccount(account);
            authSignature = await web3.eth.personal.sign(message, account);
            const res = verifyMessage(authSignature, message);
            setConnected(true);
            setAddress(res);            
        } catch (error) {
            console.log(error);
        }
    }
    const disconnectWallet = () => {
        setConnected(false);
        setAddress("");
    }
    return (
        <AuthContext.Provider value={{auth: connected, address: address, connect: connectWallet, disconnect: disconnectWallet}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

