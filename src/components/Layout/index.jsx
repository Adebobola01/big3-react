import React, {useState} from "react";
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
            <Wallets open={openWallets} />
            <Navbar click={connectWalletHandler} />
            {props.children}
        </>
    )
}

export default Layout;