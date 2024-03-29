import React, { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Wallets from "../Wallets";
import Footer from "../Footer";
import Sidebar from "../Navigation/Sidebar";
import { setAutoLogout } from "../../utils/helpers";
import "./Layout.scss";
import Error from "../Error";
import { AuthContext } from "../../context/auth-context";

const token = localStorage.getItem("token");
const expiryDate: any = localStorage.getItem("expiryDate");
const address: string | null = localStorage.getItem("address");

const Layout = (props: any) => {
    let exp: any = localStorage.getItem("expiryDate");

    const authContext = useContext(AuthContext);
    const [openWallets, setOpenWallets] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const expTime = new Date(exp).getTime();
    const currTime = new Date().getTime()
    const timeRemaining = expTime - currTime;

    setAutoLogout(timeRemaining, authContext.disconnect);
    
    const init = async () => {
        const stillValid = () => {
            if (new Date(expiryDate) > new Date()) {
                return true;
            } else {
                return false;
            }
        };
        
        if (token && stillValid()) {
            authContext.autoConnect(address);
        }
        // model.setAutoLogout(new Date(expiryDate) - new Date());   
    }



    useEffect(() => {
        init();
    }, [])
    
    const connectWalletHandler = () => {
        setOpenWallets(!openWallets);
    }

    const sidebarHandler = () => {
        setOpenSidebar(!openSidebar);
    }

    const contentError = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
        quas vel sint commodi repudiandae
        consequuntur voluptatum laborum numquam
        blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque
        rerum! Provident similique accusantium nemo
    autem. Veritatis obcaecati tenetur iure eius`

    return (
        <>
            <Wallets open={openWallets} walletsHandler={connectWalletHandler} />
            <Navbar click={ connectWalletHandler} openSidebar={sidebarHandler} />
            <Sidebar open={openSidebar} click={connectWalletHandler} sidebarHandler={sidebarHandler}  />
            <main className="main">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout;