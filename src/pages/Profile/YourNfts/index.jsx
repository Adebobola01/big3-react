import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { getImage } from "../../../utils/helpers";
import "./YourNfts.scss";
import { fetchData } from "../../../utils/helpers";
import List from "../../../components/List";

const {REACT_APP_BASEURL, REACT_APP_TITLE, REACT_APP_DESCRIPTION} = process.env;

const YourNfts = props => {
    const authContext = useContext(AuthContext);
    const [userNfts, setUserNfts] = useState([]);
    const [listing, setListing] = useState(false);
    const [listDetails, setListDetails] = useState({});


    const token = localStorage.getItem("token");
    const address = authContext.address;

    const listHandler = (details) => {
        setListDetails(details);
        setListing(!listing);
    }


    const getUserData = async() => {        
        try {
            // const result = await fetch("https://big3-backend.onrender.com/profile", {
            const {data} = await fetchData("POST", "profile", { userAddress: "0x3427bfe887eEc6E1C1e0F2b485800B5A9A7c633F" });
            console.log(data)
            data.forEach(n => {
                if (!n.metadata) {
                    return;
                }
                n.metadata.image = getImage(n.metadata.image);
            })
            setUserNfts(data);
            // if (result.status === 200 || result.status === 201) {
            //     const { data } = await result.json();
            //     data.forEach((n) => {
            //         if (!n.metadata) {
            //             return;
            //         }
            //         n.metadata.image = getImage(n.metadata.image);
            //     });
            //     setUserNfts(data);
            // } else {
            //     new Error("could not get user data");
            // }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            await getUserData();
        })();
    }, []);


    let content;

    if (userNfts.length !== 0) {
        content = userNfts.map(n => {
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
            {content}
        </>
    )
}

export default YourNfts;