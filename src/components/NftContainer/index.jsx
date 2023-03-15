import React from "react";
import uzuImg from "../../assets/images/uzumakiFamily.png";
import "./NftContainer.scss";
const NftContainer = props => {
    return (
        <div className="nft__details--preview">
            <img
                src={uzuImg}
                alt="nft"
                className="nft-comp--image"
            />
            <div className="nft-comp--details">
                <p className="nft-comp--name">Azuki #25</p>
                <div className="nft-comp--price">
                    <p>23 ETH</p>
                </div>
            </div>
        </div>
    )
}

export default NftContainer;