import React,{useEffect,useState} from "react";
import "./Created.scss";

const Created = (props: any) => {
    const [created, setCreated] = useState([]);
    document.title = "Created";
    useEffect(() => {
        setCreated([]);
    }, [])
    const content = created.length !== 0 ? <p>created nfts</p> : <div className="profile-content"> <span> No Content Available </span> </div>;
    return (
        <>
            {content}
        </>
    )
}

export default Created;