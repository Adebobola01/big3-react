import React, { createContext, useState } from "react";
import { getUserAccount, verifyMessage, logoutHandler } from "../utils/helpers";
import { useNavigate, redirect } from "react-router-dom";
import Web3 from "web3";

const {ethereum}: any = window;
// const web3 = new Web3(Web3.givenProvider);
const web3 = new Web3( Web3.givenProvider || "http://localhost:8545");


export const AuthContext = createContext({
    auth: false,
    address: "",
    connect: () => { },
    disconnect: () => { },
    autoConnect: (param: any)=>{}
});

const AuthContextProvider = (props: any) => {
    const navigate = useNavigate();
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");
    // const [authSignature, setAuthSignature] = useState("");
    const connectWallet = async () => {
        try {
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const account = accounts[0];
            const res = await verifyMessage(account);
            console.log(res)
            if (!res) {
                return;
            }
            setConnected(true);
            setAddress(res);         
        } catch (error) {
           return console.log(error);
        }
    }
    const disconnectWallet = () => {
        logoutHandler()
        setConnected(false);
        setAddress("");

    }
    const autoConnectWallet = (_address: any) => {
        setConnected(true);
        setAddress(_address)
    }
    return (
        <AuthContext.Provider value={{auth: connected, address: address, connect: connectWallet, disconnect: disconnectWallet, autoConnect: autoConnectWallet }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

