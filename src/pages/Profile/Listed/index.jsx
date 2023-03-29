import React, {useEffect, useState} from "react";
import "./Listed.scss";

const Listed = props => {
    const [listed, setListed] = useState([])
    useEffect(() => {
        setListed([]);
    }, []);


    console.log(listed);
    const content = listed.length !== 0 ? <p>Listed Nfts</p> : <div className="profile-content"> <span> No Content Available </span> </div>
    console.log("here")
    return (
        <>
            {content}   
        </>
    )
}

export default Listed;