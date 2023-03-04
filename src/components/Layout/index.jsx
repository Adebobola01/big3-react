import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Wallets from "../Wallets";
import Backdrop from "../Backdrop";

const Layout = props => {

    const [openWallets, setOpenWallets] = useState(false);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    
    const connectWalletHandler = () => {
        setOpenWallets(!openWallets);
        setOpenBackdrop(!openBackdrop)
    }
    return (
        <>
            <Backdrop open={openBackdrop} click={connectWalletHandler} />
            <Wallets open={openWallets} close={connectWalletHandler} />
            <Navbar click={connectWalletHandler} />
            <Outlet/>
        </>
    )
}

export default Layout;