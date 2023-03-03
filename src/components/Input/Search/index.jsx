import React from "react";
import "./Search.scss";
// import searchImg from "./assets/magnifying-glass-svgrepo-com.svg"
const search = props => {
    return (
        <form className="search">
            {/* <img
            src={searchImg}
            alt="search icon"
            class="search__icon"
            /> */}
            <input
                type="text"
                class="search__field"
                placeholder="Search Collections and Creators"
            />
        </form>
    )
}
export default search;