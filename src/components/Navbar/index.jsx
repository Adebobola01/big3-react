import React from "react";


const navbar = props => {
    return (
        <header class="header">
            <div class="nav-bar">
                <div class="logo">
                    <a href="./index.html">
                        <img
                            src="./static/images/big3-logo.png"
                            alt="logo"
                            class="logo__icon"
                        />
                        <span class="logo__title">Big3</span>
                    </a>
                </div>
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
                    <a href="#" class="nav__link explore-link"> Explore </a>
                    <a href="#" class="nav__link create-link"> Create</a>
                    <a href="#" class="nav__link profile-link"> Profile</a>
                </div>
                <div class="btn__container">
                    <span class="addr-container"></span>
                    <button class="connect__wallet--btn pc__connect">
                        Connect Wallet
                    </button>
                    <button class="connect__wallet--btn mobile__connect">
                        svg
                    </button>
                </div>
                <button class="toggle-button">
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                </button>
                <button class="logout-btn hidden">logout</button>
            </div>
        </header>
                    

    )
}

export default navbar;