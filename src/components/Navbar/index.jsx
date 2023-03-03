import React from "react";
import "./navbar.scss";
import NavigationItem from "../Navigation/NavigationItem";
import ConnectBtn from "../Buttons/ConnectBtn";
import Logo from "../Logo";
const navbar = props => {
    return (
        <header class="header">
            <div class="nav-bar">
                <Logo/>
                <form class="search">
                    <svg class="search__icon">
                        <use
                            href="./static/images/magnifying-glass-svgrepo-com.svg"
                        ></use>
                    </svg>
                    <img
                    src="./img/magnifying-glass-svgrepo-com.svg"
                    alt="search icon"
                    class="search__icon"
                />
                    <input
                        type="text"
                        class="search__field"
                        placeholder="Search Collections and Creators"
                    />
                </form>
                <div class="nav">
                    <NavigationItem link="/explore">Explore</NavigationItem>
                    <NavigationItem link="/create">Create</NavigationItem>
                    <NavigationItem link="/profile">Profile</NavigationItem>
                </div>
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