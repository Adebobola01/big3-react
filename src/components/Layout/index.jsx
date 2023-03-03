import React, {useState} from "react";
import Navbar from "../Navbar";
import Wallets from "../Wallets";

const Layout = props => {

    const [openWallets, setOpenWallets] = useState(false);
    
    const connectWalletHandler = () => {
        console.log(openWallets)
        setOpenWallets(true);
        console.log("pressed", openWallets)
    }
    return (
        <>
            <Wallets open={openWallets} />
            <Navbar click={connectWalletHandler} />
            {props.children}
        </>
    )
}

export default Layout;