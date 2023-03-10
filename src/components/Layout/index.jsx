import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Wallets from "../Wallets";
import Backdrop from "../Backdrop";
import Footer from "../Footer";
import Sidebar from "../Navigation/Sidebar";
import "./Layout.scss";

const Layout = props => {

    const [openWallets, setOpenWallets] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    
    const connectWalletHandler = () => {
        setOpenWallets(!openWallets);
    }

    const sidebarHandler = () => {
        setOpenSidebar(!openSidebar);
    }


    return (
        <>
            <Wallets open={openWallets} walletsHandler={connectWalletHandler} />
            <Navbar click={connectWalletHandler} openSidebar={sidebarHandler} />
            <Sidebar open={openSidebar} sidebarHandler={sidebarHandler} />
            <main className="main">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout;