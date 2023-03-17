import React,{useContext} from "react";
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
    const showError = () => (
        authContext.auth ? null : <Error errorMessage="You need to connect your wallet first!" />
    )
    
    return (
        <header className="header">
            <div className="nav-bar">
                <Logo />
                <Search/>
                <ul className="nav">
                    <NavigationItem link="/explore">Explore</NavigationItem>
                    <NavigationItem link="/create">Create</NavigationItem>
                    <NavigationItem link="/profile">Profile</NavigationItem>
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