import React from "react";
import uzuImg from "../../assets/images/uzumakiFamily.png";
import "./NftContainer.scss";
const NftContainer = props => {
    return (
        <div class="nft__details--preview">
            <img
                src={uzuImg}
                alt="nft"
                class="explore__nft--image"
            />
            <div class="explore__nft--details">
                <p class="explore__nft--name">Azuki #25</p>
                <div class="explore__nft--price">
                    <p>23 ETH</p>
                </div>
            </div>
        </div>
    )
}

export default NftContainer;