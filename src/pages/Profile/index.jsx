import React from "react";
import "./Profile.scss";
const Profile = props => {
    return (
        <div class="profile">
            <div class="list-box">
                <div class="list__container">
                    <span class="list-close">X</span>
                    <div class="list-preview">
                        
                    </div>
                    <div class="list__price">
                        <p>Price</p>
                        <div class="list__price-container"> 
                            <input class="list__price--input" placeholder="Amount" type="number"></input>
                            <img src="${ethurl}"/>
                        </div>
                    </div>
                    <div class="list__price">
                        <p>Duration</p>
                        <div class="list__price-container"> 
                            <input class="list__duration--input" placeholder="24" type="number"></input>
                            <select name="duration" id="duration" class="list__duration--select">
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </div>
                    <button class="list-btn">List</button>
                </div>
            </div>
            <section class="profile__nft-preview">
                <div class="nft__details--preview">
                    <img src="${this._data[0].metadata.image}" alt="nft" class="explore__nft--image"/>
                    <div class="explore__nft--details">
                        <p class="explore__nft--name">${this._data[0].metadata.name}</p>
                        <div class="explore__nft--price">
                            <p>23 ETH</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="profile__user">
                <div class="profile__user--header">
                    <img src="${madaraUrl}" alt="user-avi" class="profile__user--image"/>
                    <div class="profile__user--details">
                        <p class="profile__user--title">
                            Adebobola Oyedunmade
                            </p>
                        <span class="profile__user--address">0x000...000</span>
                    </div>
                </div>
                <div class="profile__user--body">
                    ${this.content}
                </div>
            </section>
        </div>
    )
};

export default Profile;