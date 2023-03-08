import React, {useEffect, useState} from "react";
import "./Profile.scss";
import madaraImg from "../../assets/images/madara.png";
// import ethImg from "../../assets/images/ethereum-eth-logo.svg";
import {getImage} from "../../utils/helpers";
import NftContainer from "../../components/NftContainer";
const Profile = props => {

    const [userNfts, setUserNfts] = useState();
    const [address, setAddress] = useState("0xdkjfkajkdjfakjffdajkfa");
    const [token, setToken] = useState("lkfdalfjlka");

    const getUserData = async() => {        
        console.log("here")
        try {
            const result = await fetch("https://big3-backend.onrender.com/profile", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userAddress: address,
                }),
            });
            const { data } = await result.json();
            data.forEach((n) => {
                if (!n.metadata) {
                    return;
                }
                n.metadata.image = getImage(n.metadata.image);
            });
            setUserNfts(data);
            
        } catch (error) {
            console.log("failed!");
        }
    }

    useEffect(() => {
        getUserData();          
    });

    const contentBody = userNfts ? (
        userNfts.forEach((n) => (
            <div class="profile__nft-container" data-name={n.metadata.name} data-image={n.metadata.image} data-contractAddress={n.tokenAddress} data-collection={n.name}>
                <p class="list-icon">+</p>
                <div class="profile__nft-image">
                    <img
                        src={n.metadata.image}
                        alt="profile-img"
                    />
                </div>
                <div class="profile__nft-details">
                    <div class="profile__nft-description">
                        <span>{n.name} collection</span>
                        <h3>{n.metadata.name}</h3>
                    </div>
                    <button class="list-cta">List</button>
                </div>
            </div>
        ))) :
        <div class="profile-content">
            <span> No Content Available </span>
        </div>
        ;
    
    return (
        <div className="profile">
            <div className="list-box">
                <div className="list__container">
                    <span className="list-close">X</span>
                    <div className="list-preview">
                        
                    </div>
                    <div className="list__price">
                        <p>Price</p>
                        <div className="list__price-container"> 
                            <input className="list__price--input" placeholder="Amount" type="number"></input>
                            <img src={"ethImg"} alt="eth-img" />
                        </div>
                    </div>
                    <div className="list__price">
                        <p>Duration</p>
                        <div className="list__price-container"> 
                            <input className="list__duration--input" placeholder="24" type="number"></input>
                            <select name="duration" id="duration" className="list__duration--select">
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </div>
                    <button className="list-btn">List</button>
                </div>
            </div>
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
                        <span className="profile__user--address">0x000...000</span>
                    </div>
                </div>
                <div className="profile__user--body">
                    {contentBody}
                </div>
            </section>
        </div>
    )
};

export default Profile;