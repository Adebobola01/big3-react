import React, {ReactHTMLElement, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import NftContainer from "../../../components/NftContainer";
import Loader from "../../../components/Loader"
import { fetchData } from "../../../utils/helpers";
import uzuImg from "../../../assets/images/uzumakiFamily.png";
import Error from "../../../components/Error";

const Details = (props: any) => {
    interface DetailsType {
        contractAddr: string;
        collectionName: string;
        name: string;
        ownerAddress: string;
        price: string;
        description: string;
        tokenId: string;
        imageUrl: string
    }

    const { contractAddr, tokenId } = useParams();
    const token: string | null = localStorage.getItem("token");
    const [details, setDetails] = useState<DetailsType>({
        contractAddr: "",
        collectionName: "",
        name: "",
        ownerAddress: "",
        price: "",
        description: "",
        tokenId: "",
        imageUrl: "",
    });
    const [loading, setLoading] = useState<boolean>(false);

    document.title = "Details";
    const getDetails = async () => {
        try {
            setLoading(true);
            const result = await fetchData("POST", "getNftDetails", {
                contractAddress: contractAddr,
                tokenId: tokenId
            })
            setDetails(result.nft);
            // setLoading(false);
        } catch (error) {
            // setDetails(null);
            console.log("Could not fetch nft data!")
        }
    }

    useEffect(() => {
        (async () => {
            await getDetails(); 
            setLoading(false)
        })()
    }, [])

    let contentData: any = "";

    if (details) {
        contentData =  (
            <section className="nft__details">
                <div className="nft__details--heading">
                    <a href="#" className="nft__details--collection">{details.collectionName}</a>
                    <h3 className="nft___details--name">{details?.name}</h3>
                    <p className="nft__details--owner">
                        Owned by <a href="#">{`${details.ownerAddress.slice(0, 3)}...${details.ownerAddress.slice(-4)}`}</a>
                    </p>
                </div>
                <div className="purchase">
                    <p>Current Price</p>
                    <span>{details.price} ETH</span>
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
                                {details.description}
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
                                <span>{`${details.contractAddr.slice(0, 3)}...${details.contractAddr.slice(-7)}`}</span>
                            </div>
                            <div className="detail">
                                <span>Token ID</span>
                                <span>{details.tokenId}</span>
                            </div>
                            <div className="detail">
                                <span>Chain</span>
                                <span>Goerli</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        contentData = <div style={{height: "90rem", display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}} ><span style={{color: "white"}} >No content available!</span></div>
    }

    // setLoading(false);
    return (
        <div className="nft">
            <section className="profile__nft-preview">
                <NftContainer image={details ? details?.imageUrl : ""} name={details ? details.name : ""}  price={details ? details.price : ""} />
            </section>
            { loading ? <Loader/> : contentData}
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