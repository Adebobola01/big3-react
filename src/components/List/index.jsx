import React, {useState} from "react";
import "./List.scss";
import Backdrop from "../Backdrop";
// import ethUrl from "../../assets/images/ethereum-eth-logo.svg";
import ethUrl from "../../assets/images/madara.png"


const List = props => {

    const [open, setOpen] = useState(true);

    const toggle = () => {
        setOpen(!open);
    }

    // const openList = () => {
    //     setOpen(true);
    // }
    return (
        <>
            <Backdrop open={open} click={toggle} />
            <div className={`list-box ${open ? "open-list" : ""}`}>
                <div className="list__container">
                    <span className="list-close" onClick={toggle} >X</span>
                    <div className="list-preview">
                        <img src={ethUrl} className="list-preview__image"/>
                    </div>
                    <div className="list__price">
                        <p>Price</p>
                        <div className="list__price-container"> 
                            <input className="list__price--input" placeholder="Amount" type="number"></input>
                            <img src="{ ethUrl}" />
                        </div>
                    </div>
                    <div className="list__price">
                    <p>Duration</p>
                    <div className="list__price-container"> 
                        <input className="list__duration--input" placeholder="24" type="number"></input>
                        <select name="duration" id="duration" className="list__duration--select">
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                        </select>
                    </div>
                    </div>
                    <button className="list-btn">List</button>
                </div>
            </div>
        </>
    )
}

export default List;