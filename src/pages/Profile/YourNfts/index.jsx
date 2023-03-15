import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { getImage } from "../../../utils/helpers";
import "./YourNfts.scss";

const YourNfts = props => {
    const authContext = useContext(AuthContext);
    const [userNfts, setUserNfts] = useState([]);
    const token = localStorage.getItem("token");
    const address = authContext.address;


    const getUserData = async() => {        
        try {
            // const result = await fetch("https://big3-backend.onrender.com/profile", {
            const result = await fetch("http://localhost:5000/profile", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userAddress: address,
                }),
            });
            if (result.status === 200 || result.status === 201) {
                const { data } = await result.json();
                data.forEach((n) => {
                    if (!n.metadata) {
                        return;
                    }
                    n.metadata.image = getImage(n.metadata.image);
                });
                setUserNfts(data);
            } else {
                new Error("could not get user data");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            console.log("useEffect!")
            await getUserData();
        })();
    }, []);


    console.log(userNfts)

    const content = userNfts.map(n => {
        if (!n.metadata) { return null };
    
        return (
            <div className="profile__nft-container" key={`${n.metadata.name} ${n.tokenId}`} >
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
                    <button className="list-cta">List</button>
                </div>
            </div>
        )
    })


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

    console.log(content);

    return (
        <>
            {content}
        </>
    )
}

export default YourNfts;