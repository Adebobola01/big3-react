import React, { createContext, useState } from "react";
const { ethereum } = window;
export const AuthContext = createContext({
    auth: false,
    address: "",
    connect: () => { },
    disconnect: ()=>{}
});

const AuthContextProvider = props => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("")
    const connectWallet = async() => {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        console.log(accounts);
        setConnected(true);
        setAddress(accounts[0]);
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

