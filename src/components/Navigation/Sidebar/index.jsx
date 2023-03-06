import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";


const Sidebar = props => {
    return (
        <div class="sidebar-container">
            <div class="sidebar">
                <button class="close-sidebar">
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                </button>
                <NavLink to="/explore" className="nav__link explore-link"> Explore </NavLink>
                <NavLink to="/create" className="nav__link create-link"> Create</NavLink>
                <NavLink to="/profile" className="nav__link profile-link"> Profile</NavLink>
            </div>
        </div>
    )
};
export default Sidebar;