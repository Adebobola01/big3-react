import React, {useEffect, useState} from "react";
import "./Listed.scss";

const Listed = (props: any) => {
    const [listed, setListed] = useState([]);
    document.title = "Listed";
    useEffect(() => {
        setListed([]);
    }, []);
    const content = listed.length !== 0 ? <p>Listed Nfts</p> : <div className="profile-content"> <span> No Content Available </span> </div>
    return (
        <>
            {content}   
        </>
    )
}

export default Listed;