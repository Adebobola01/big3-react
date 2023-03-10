import React from "react";
import uzuImg from "../../assets/images/uzumakiFamily.png";
import "./NftContainer.scss";
const NftContainer = props => {
    return (
        <div class="nft__details--preview">
            <img
                src={uzuImg}
                alt="nft"
                class="nft-comp--image"
            />
            <div class="nft-comp--details">
                <p class="nft-comp--name">Azuki #25</p>
                <div class="nft-comp--price">
                    <p>23 ETH</p>
                </div>
            </div>
        </div>
    )
}

export default NftContainer;