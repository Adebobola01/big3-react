import React, {useState} from "react";
import "./List.scss";
import Backdrop from "../Backdrop";
// import ethUrl from "../../assets/images/ethereum-eth-logo.svg";
import { fetchData } from "../../utils/helpers";
import ethUrl from "../../assets/images/ethereum-1.svg"

interface DurationType  {
    value: number;
    unit: string;
}

const List = (props: any) => {
    const details = { ...props.details };
    const [price, setPrice]: [number, any] = useState(0);
    const [duration, setDuration]: [DurationType, any] = useState({
        value: 0,
        unit: "hours",
    });

    const convTime = (val: number , unit: string): number=> {
        let exp: number = 0;
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
                break;
            default:
                break;
        }
        return exp;
    }

    const list = async (e: any) => {
        e.preventDefault();
        const expiryDate: number | null = new Date().getTime() + convTime(duration.value, duration.unit) ? convTime(duration.value, duration.unit) : null;
        // const expiryDate = convTime(duration.value, duration.unit);
        const res = await fetchData("POST", "list", {
            ...details,
            expiryDate: expiryDate,
            price: price,
        })
    }

    return (
        <>
            <Backdrop open={props.open} click={props.listHandler} />
            <div className={`list-box ${props.open ? "open-list" : ""}`}>
                <form className="list__container" onSubmit={list} >
                    <span className="list-close" onClick={props.listHandler} >X</span>
                    <div className="list-preview">
                        <img src={details ? details.metadata?.image : ""} className="list-preview__image"/>
                    </div>
                    <div className="list__price">
                        <p>Price</p>
                        <div className="list__price-container"> 
                            <input className="list__price--input" placeholder="Amount" type="number" step={0.0001} onChange={(e)=>setPrice(Number(e.target.value))} ></input>
                            <img src={ethUrl} />
                        </div>
                    </div>
                    <div className="list__price">
                        <p>Duration</p>
                        <div className="list__price-container"> 
                            <input className="list__duration--input" placeholder="24" type="number" onChange={(e) => setDuration((prev: DurationType) => ({...prev, value: e.target.value}))} ></input>
                            <select name="duration" id="duration" className="list__duration--select" onChange={(e) => setDuration((prev: DurationType) => ({...prev, unit: e.target.value}))}>
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