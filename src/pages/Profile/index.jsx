import React, {useEffect, useState, useContext} from "react";
import "./Profile.scss";
import madaraImg from "../../assets/images/madara.png";
// import ethImg from "../../assets/images/ethereum-eth-logo.svg";
// import {getImage} from "../../utils/helpers";
import NftContainer from "../../components/NftContainer";
import { Link, Outlet } from "react-router-dom";
import NavigationItem from "../../components/Navigation/NavigationItem";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context"
import Error from "../../components/Error";
import List from "../../components/List";
const Profile = props => {

    const authContext = useContext(AuthContext);
    const style = ({ isActive, isPending }) => {
        return {
            backgroundColor: isActive ? "rgba(91, 90, 97, 0.568)" : "",
            borderBottom: isActive ? "2px solid white" : "",
            opacity: isActive ? "1" : ""
        }
    }

    return (
        // !authContext.auth ? <Error errorMessage="you need connect your wallet first!" /> :
        <div className="profile">
            <section className="profile__nft-preview">
                <NftContainer/>
            </section>
            <section className="profile__user">
                <div className="profile__user--header">
                    <img src={madaraImg} alt="user-avi" className="profile__user--image"/>
                    <div className="profile__user--details">
                        <p className="profile__user--title">
                            Adebobola Oyedunmade
                        </p>
                        {authContext.address ? 
                            <span>{`${authContext.address.slice(0,3)}...${authContext.address.slice(-6)}`}</span>
                            :
                            <span className="profile__user--address">0x000...000</span>
                        }
                    </div>
                </div>
                <ul className="profile__navigation">
                        <NavLink to='' style={style} end > <li>Collected</li></NavLink> 
                        <NavLink to='created' style={style}> <li>Created</li></NavLink> 
                        <NavLink to='listed' style={style}><li>Listed</li></NavLink> 
                </ul>
                <div className="profile__user--body">
                    <Outlet/>
                    {/* {contentBody} */}
                </div>
            </section>
        </div>
    )
};

export default Profile;