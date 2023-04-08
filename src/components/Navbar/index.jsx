import React, { useContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
import "./navbar.scss";
import NavigationItem from "../Navigation/NavigationItem";
import ConnectBtn from "../Buttons/ConnectBtn";
import Logo from "../Logo";
import Search from "../Input/Search";
import ToggleBtn from "../Buttons/ToggletBtn";
import { AuthContext } from "../../context/auth-context";
import LogoutBtn from "../Buttons/LogoutBtn";
import Error from "../Error";
const Navbar = props => {  
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    

    const redirectToProfile = () => {
        console.log("redirect")
    }
    
    return (
        <header className="header">
            <div className="nav-bar">
                <Logo />
                <Search/>
                <ul className="nav">
                    <NavigationItem link="/explore">Explore</NavigationItem>
                    <NavigationItem link="/create">Create</NavigationItem>
                    <NavigationItem click={redirectToProfile} >Profile</NavigationItem>
                </ul>
                <div className="btns-container">
                    {
                        authContext.auth ?
                            <>            
                                <span className="addr-container">{`${authContext.address.slice(0,3)}...${authContext.address.slice(-4)}`}</span>    
                                <LogoutBtn/>
                            </>
                            :
                            <ConnectBtn click={props.click} />
                    }
                    <ToggleBtn openSidebar={props.openSidebar} />
                </div>
                {/* <button className="toggle-button">
                    <span className="toggle-button__bar"></span>
                    <span className="toggle-button__bar"></span>
                    <span className="toggle-button__bar"></span>
                </button>
                <button className="logout-btn hidden">logout</button> */}
            </div>
        </header>
                    

    )
}

export default Navbar;