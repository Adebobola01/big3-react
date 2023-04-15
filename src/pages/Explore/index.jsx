import React, {useEffect, useState} from "react";
import uzuImage from "../../assets/images/uzumakiFamily.png";
import itachiImg from "../../assets/images/itachi.png";
import { fetchData } from "../../utils/helpers";
import "./Explore.scss"
const Explore = props => {
    const [exploreNfts, setExploreNfts] = useState([]);


    const explore = async() => {
        const data = await fetchData("GET", "explore");
        setExploreNfts(data.nfts);
    }

    useEffect(() => {
        explore();
    }, [])

    const content = [...exploreNfts];
    let contentData;

    if (content) {
        contentData = content.map(nft => {
            const owner = nft.ownerAddress;
           return <a
                className="explore__nft--container"
                href="explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
                key={`${nft.contractAddr} ${nft.tokenId}`} >
                <img
                    src={nft.imageUrl}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">{nft.name}</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            {`${nft.ownerAddress.slice(0,3)}...${nft.ownerAddress.slice(-4)}`}
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>{nft.price} ETH</p>
                    </div>
                </div>
            </a>
        })
    } else {
        contentData = <div className="profile-content">
            <span> No Content Available </span>
        </div>
    }

    return (
        <div className="explore__container">
        <div className="explore__sort">
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
        </div>
        <div className="explore__main">
            {/* <Link className="scroll-down" to="#footer" >
                <span>&gt;&gt;</span>
            </Link> */}
                {
                    contentData
                }
        </div>
        </div>
    )
}

export default Explore;