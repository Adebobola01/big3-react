import React from "react";
import uzuImg from "../../assets/images/uzumakiFamily.png";
import "./NftContainer.scss";
const NftContainer = props => {
    return (
        <div className="nft__details--preview">
            <img
                src={props.image}
                alt="nft"
                className="nft-comp--image"
            />
            <div className="nft-comp--details">
                <p className="nft-comp--name">{props.name}</p>
                <div className="nft-comp--price">
                    <p>{props.price} ETH</p>
                </div>
            </div>
        </div>
    )
}

export default NftContainer;