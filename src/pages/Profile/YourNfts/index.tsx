import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { getImage } from "../../../utils/helpers";
import Loader from "../../../components/Loader";
import "./YourNfts.scss";
import { fetchData } from "../../../utils/helpers";
import List from "../../../components/List";

const {REACT_APP_BASEURL, REACT_APP_TITLE, REACT_APP_DESCRIPTION} = process.env;

const YourNfts = (props: any) => {
    //USE BETTER PRACTICE///
    document.title = "Your Nfts";

    type NftType = {
        metadata: any;
        tokenAddress: string;
        tokenId: string;
        name: string;
    }[]


    const authContext = useContext(AuthContext);
    const [userNfts, setUserNfts] = useState<NftType>();
    const [listing, setListing] = useState(false);
    const [listDetails, setListDetails] = useState({});
    const [loading, setLoading] = useState(false);


    const token = localStorage.getItem("token");
    const address = authContext.address;

    const listHandler = (details: object) => {
        setListDetails(details);
        setListing(!listing);
    }


    const getUserData = async(): Promise<any> => {        
        try {
            setLoading(true);
            // const result = await fetch("https://big3-backend.onrender.com/profile", {
            const { data } = await fetchData("POST", "profile", { userAddress: authContext.address });
            data.forEach((n: any) => {
                if (!n.metadata) {
                    return;
                }
                n.metadata.image = getImage(n.metadata.image);
            })
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            const data = await getUserData();
            setUserNfts(data);
            setLoading(false)
        })();
    }, []);


    let content;

    if (userNfts) {
        content = userNfts.map((n) => {
            if (!n.metadata) { return null };
        
            return (
                <div className="profile__nft-container" key={`${n.metadata.name} ${n.tokenId} ${n.tokenAddress}`} >
                    <p className="list-icon">+</p>
                    <div className="profile__nft-image">
                        <img
                            src={n.metadata.image}
                            alt="profile-img"
                        />
                    </div>
                    <div className="profile__nft-details">
                        <div className="profile__nft-description">
                            <span>{n.name} collection</span>
                            <h3>{n.metadata.name}</h3>
                        </div>
                        <button className="list-cta" onClick={() => {
                            listHandler(n)
                        }} >List</button>
                    </div>
                </div>
            )
        })
    } else {        
        content = <div className="profile-content">
            <span> No Content Available </span>
        </div>
    }

    // if (contentBody) {
    //     console.log("hi")
    //     contentBody.forEach(n => (            
    //         "hi"
    //     ))
    // } else {
    //     contentBody = (
    //         <div className="profile-content">
    //             <span> No Content Available </span>
    //         </div>
    //     )
    // }

    return (
        <>
            <List open={listing} listHandler={listHandler} details={listDetails}/>
            { loading ? <Loader/> : content}
        </>
    )
}

export default YourNfts;