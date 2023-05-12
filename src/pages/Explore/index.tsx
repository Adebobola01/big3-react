import React, {useEffect, useState} from "react";
import uzuImage from "../../assets/images/uzumakiFamily.png";
import itachiImg from "../../assets/images/itachi.png";
import { fetchData } from "../../utils/helpers";
import "./Explore.scss";
import Loader from "../../components/Loader";
const Explore = (props: any) => {

    type NftType = {
        contractAddr: string;
        tokenId: string;
        imageUrl: string;
        name: string;
        ownerAddress: string;
        price: string;
    }


    const [exploreNfts, setExploreNfts] = useState<NftType[] | []>([]);
    const [loading, setLoading] = useState(false);

    document.title = "Explore";
    const explore = async () => {
        setLoading(true);
        const data = await fetchData("GET", "explore");
        setExploreNfts(data.nfts);
        setLoading(false);
    }

    useEffect(() => {
        explore();
    }, [])

    const content: NftType[] = [...exploreNfts];
    let contentData;


    if (content) {
        contentData = content.map((nft: NftType ): any => {
            const owner = nft.ownerAddress;
           return <a
                className="explore__nft--container"
                href={`explore/details/${nft.contractAddr}/${nft.tokenId}`}
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
    console.log(content )

    return (
        <div className="explore__container">
            <div className="explore__main">
                {/* <Link className="scroll-down" to="#footer" >
                    <span>&gt;&gt;</span>
                </Link> */}
                    {
                        loading ? <Loader/> : contentData
                    }
            </div>
        </div>
    )
}

export default Explore;