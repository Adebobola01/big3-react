import React from "react";
import "./navbar.scss";
import NavigationItem from "../Navigation/NavigationItem";
import ConnectBtn from "../Buttons/ConnectBtn";
import Logo from "../Logo";
import Search from "../Input/Search";
const navbar = props => {
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
                    <ConnectBtn/>
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

export default navbar;