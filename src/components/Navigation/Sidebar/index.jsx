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
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                    </button>
                    <NavLink to="/explore" className="nav__link explore-link" onClick={props.sidebarHandler} > Explore </NavLink>
                    <NavLink to="/create" className="nav__link create-link" onClick={props.sidebarHandler}> Create</NavLink>
                    <NavLink to="/profile" className="nav__link profile-link" onClick={props.sidebarHandler}> Profile</NavLink>
                </div>
            </div>
        </>
    )
};
export default Sidebar;