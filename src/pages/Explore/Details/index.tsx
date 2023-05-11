import React, { ReactHTMLElement, useEffect, useState } from "react";
import { WalletChatWidget } from 'react-wallet-chat-v0';
import 'react-wallet-chat-v0/dist/index.css'

import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
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
            <section className={styles.nft__details}>
                <WalletChatWidget/>
                <div className={styles.nft__details__heading}>
                    <a href="#">{details.collectionName}</a>
                    <h3 className={styles.nft___details__name}>{details?.name}</h3>
                    <p className={styles.nft__details__owner}>
                        Owned by <a href="#">{`${details.ownerAddress.slice(0, 3)}...${details.ownerAddress.slice(-4)}`}</a>
                    </p>
                </div>
                <div className={styles.purchase}>
                    <p>Current Price</p>
                    <span>{details.price} ETH</span>
                    <div className={styles.purchase__btns}>
                        <button className={`${styles.purchase__btn} ${styles.buy_btn}`}>BUY</button>
                        <button className={`${styles.purchase__btn} ${styles.offer_btn}`}>
                            Make Offer
                        </button>
                    </div>
                </div>
                <div className={styles.nft__details__body}>
                    <div className={styles.description}>
                        <h2>Description</h2>
                        <div className={styles.description__body}>
                            <p>
                                {details.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <h2>Details</h2>
                        <div className={styles.details__body}>
                            <div className={styles.detail}>
                                <span>Contract Address</span>
                                <span>{`${details.contractAddr.slice(0, 3)}...${details.contractAddr.slice(-7)}`}</span>
                            </div>
                            <div className={styles.detail}>
                                <span>Token ID</span>
                                <span>{details.tokenId}</span>
                            </div>
                            <div className={styles.detail}>
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
        <div className={styles.nft}>
            <section className={styles.nft_preview}>
                <img src={uzuImg} alt="nft-img" />
                <div className={styles.properties}>
                        <h2>Properties</h2>
                        <div className={styles.properties__body}>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                            <div className={styles.property}>
                                <h2>Anime</h2>
                            </div>
                        </div>
                </div>
            </section>
            { loading ? <Loader/> : contentData}
          
        </div>
    )
}

export default Details;