import React,{useContext} from "react";
import "./navbar.scss";
import NavigationItem from "../Navigation/NavigationItem";
import ConnectBtn from "../Buttons/ConnectBtn";
import Logo from "../Logo";
import Search from "../Input/Search";
import ToggleBtn from "../Buttons/ToggletBtn";
import { AuthContext } from "../../context/auth-context";
import LogoutBtn from "../Buttons/LogoutBtn";
const Navbar = props => {  
    const authContext = useContext(AuthContext);
    
    return (
        <header class="header">
            <div class="nav-bar">
                <Logo />
                <Search/>
                <ul class="nav">
                    <NavigationItem link="/explore">Explore</NavigationItem>
                    <NavigationItem link="/create">Create</NavigationItem>
                    <NavigationItem link="/profile">Profile</NavigationItem>
                </ul>
                <div class="btns-container">
                    {
                        authContext.auth ?
                            <>            
                                <span class="addr-container">{`${authContext.address.slice(0,3)}...${authContext.address.slice(-4)}`}</span>    
                                <LogoutBtn/>
                            </>
                            :
                            <ConnectBtn click={props.click} />
                    }
                    <ToggleBtn openSidebar={props.openSidebar} />
                </div>
                {/* <button class="toggle-button">
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                </button>
                <button class="logout-btn hidden">logout</button> */}
            </div>
        </header>
                    

    )
}

export default Navbar;