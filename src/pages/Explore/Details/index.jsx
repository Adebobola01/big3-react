import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import NftContainer from "../../../components/NftContainer";
import uzuImg from "../../../assets/images/uzumakiFamily.png";
import Error from "../../../components/Error";

const Details = props => {

    const { contractAddr, tokenId } = useParams();
    const token = localStorage.getItem("token");
    const [details, setDetails] = useState(null);

    const getDetails = async () => {
        try {
            const result = await fetch("http://localhost:5000/nftDetails", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contractAddress: contractAddr,
                    tokenId: tokenId
                }),
            });
            const data = await result.json();
            setDetails(data.data);
        } catch (error) {
            setDetails(null);
            console.log("Could not fetch nft data!")
        }
    }

    useEffect(() => {
        (async () => {
            await getDetails(); 
        })()
    })

    let content;

    if (details) {
        content = [...details];
        content.map(n => (
            <section className="nft__details">
                <div className="nft__details--heading">
                    <a href="#" className="nft__details--collection">{n.collectionName}</a>
                    <h3 className="nft___details--name">n.name</h3>
                    <p className="nft__details--owner">
                        Owned by <a href="#">{ n.owner }</a>
                    </p>
                </div>
                <div className="purchase">
                    <p>Current Price</p>
                    <span>{n.price} ETH</span>
                    <div className="purchase__btns">
                        <button className="purchase__btn buy-btn">BUY</button>
                        <button className="purchase__btn offer-btn">
                            Make Offer
                        </button>
                    </div>
                </div>
                <div className="nft__details--body">
                    <div className="description">
                        <h2>Description</h2>
                        <div className="description__body">
                            <p>
                                {n.description}
                            </p>
                        </div>
                    </div>
                    <div className="properties">
                        <h2>Properties</h2>
                        <div className="properties__body">
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <h2>Details</h2>
                        <div className="details__body">
                            <div className="detail">
                                <span>Contract Address</span>
                                <span>{n.contractAddress}</span>
                            </div>
                            <div className="detail">
                                <span>Token ID</span>
                                <span>{tokenId}</span>
                            </div>
                            <div className="detail">
                                <span>Chain</span>
                                <span>Goerli</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ))
    } else {
        content = <Error errorMessage="An error occured while getting NFT details, please try again later" />
    }

    return (
        <div className="nft">
            <section className="profile__nft-preview">
                <NftContainer/>
            </section>
            {content}
            {/* <section className="nft__details">
                <div className="nft__details--heading">
                    <a href="#" className="nft__details--collection">Azuki</a>
                    <h3 className="nft___details--name">Azuki #25</h3>
                    <p className="nft__details--owner">
                        Owned by <a href="#">Adebobola</a>
                    </p>
                </div>
                <div className="purchase">
                    <p>Current Price</p>
                    <span>0.2 ETH</span>
                    <div className="purchase__btns">
                        <button className="purchase__btn buy-btn">BUY</button>
                        <button className="purchase__btn offer-btn">
                            Make Offer
                        </button>
                    </div>
                </div>
                <div className="nft__details--body">
                    <div className="description">
                        <h2>Description</h2>
                        <div className="description__body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae
                                consequuntur voluptatum laborum numquam
                                blanditiis harum quisquam eius sed odit
                                fugiat iusto fuga praesentium optio, eaque
                                rerum! Provident similique accusantium nemo
                                autem. Veritatis obcaecati tenetur iure eius
                                earum ut molestias architecto voluptate
                                aliquam nihil, eveniet aliquid culpa officia
                                aut! Impedit sit sunt quaerat, odit, tenetur
                                error, harum nesciunt ipsum debitis quas
                                aliquid. Reprehenderit,
                            </p>
                        </div>
                    </div>
                    <div className="properties">
                        <h2>Properties</h2>
                        <div className="properties__body">
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                            <div className="property">
                                <h2>Anime</h2>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <h2>Details</h2>
                        <div className="details__body">
                            <div className="detail">
                                <span>Contract Address</span>
                                <span>0x23...8e90</span>
                            </div>
                            <div className="detail">
                                <span>Token ID</span>
                                <span>25</span>
                            </div>
                            <div className="detail">
                                <span>Chain</span>
                                <span>Goerli</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Details;