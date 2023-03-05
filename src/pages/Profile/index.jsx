import React from "react";
import "./Profile.scss";
import madaraImg from "../../assets/images/madara.png";
import uzuFamImg from "../../assets/images/uzumakiFamily.png";
const Profile = props => {
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
                            <img src="${ethurl}"/>
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
                <div className="nft__details--preview">
                    <img src={uzuFamImg} alt="nft" className="explore__nft--image"/>
                    <div className="explore__nft--details">
                        <p className="explore__nft--name"></p>
                        <div className="explore__nft--price">
                            <p>23 ETH</p>
                        </div>
                    </div>
                </div>
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
                    {/* ${this.content} */}
                </div>
            </section>
        </div>
    )
};

export default Profile;