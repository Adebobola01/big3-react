import React, {useState} from "react";
import "./List.scss";
import Backdrop from "../Backdrop";
// import ethUrl from "../../assets/images/ethereum-eth-logo.svg";
import { fetchData } from "../../utils/helpers";
import ethUrl from "../../assets/images/madara.png"


const List = props => {
    const details = { ...props.details };
    const [price, setPrice] = useState();
    const [duration, setDuration] = useState({
        value: null,
        unit: "",
    });

    const convTime = (val, unit) => {
        let exp
        switch (unit) {
            case "hours":
                exp = val * 60 * 60 * 1000;
                break;
            
            case "days":
                exp = val * 24 * 60 * 60 * 1000;
                break;
            case "months":
                exp = val * 30 * 24 * 60 * 60 * 1000;
                break;
            case "weeks":
                exp = val * 7 * 24 * 60 * 60 * 1000; 
            default:
                break;
        }
        return exp;
    }

    const list = async() => {
        const expiryDate = new Date() + convTime(duration.value, duration.unit);
        const res = await fetchData("POST", "list", {
            ...details,
            expiryDate: expiryDate
        })
        console.log(res);
    }

    return (
        <>
            <Backdrop open={props.open} click={props.listHandler} />
            <div className={`list-box ${props.open ? "open-list" : ""}`}>
                <form className="list__container" onSubmit={list} >
                    <span className="list-close" onClick={props.listHandler} >X</span>
                    <div className="list-preview">
                        <img src={details.image} className="list-preview__image"/>
                    </div>
                    <div className="list__price">
                        <p>Price</p>
                        <div className="list__price-container"> 
                            <input className="list__price--input" placeholder="Amount" type="number" onChange={(e)=>setPrice(e.target.value)} ></input>
                            <img src="{ ethUrl}" />
                        </div>
                    </div>
                    <div className="list__price">
                    <p>Duration</p>
                    <div className="list__price-container"> 
                            <input className="list__duration--input" placeholder="24" type="number" onChange={(e) => setDuration((prev) => ({...prev, unit: e.target.value}))} ></input>
                        <select name="duration" id="duration" className="list__duration--select">
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                        </select>
                    </div>
                    </div>
                    <button className="list-btn" onClick={list} >List</button>
                </form>
            </div>
        </>
    )
}

export default List;