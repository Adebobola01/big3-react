import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import Backdrop from "../../Backdrop";


const Sidebar = props => {
    // console.log(props.openSidebar);

    return (
        <>
            <Backdrop open={props.open} click={props.sidebarHandler} />
            <div className={`sidebar-container ${props.open ? "open-sidebar": ""}`}>
                <div className="sidebar">
                    <button className="close-sidebar">
                        <span class="toggle-button__bar"></span>
                        <span class="toggle-button__bar"></span>
                    </button>
                    <NavLink to="/explore" className="nav__link explore-link"> Explore </NavLink>
                    <NavLink to="/create" className="nav__link create-link"> Create</NavLink>
                    <NavLink to="/profile" className="nav__link profile-link"> Profile</NavLink>
                </div>
            </div>
        </>
    )
};
export default Sidebar;