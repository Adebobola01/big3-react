import React, {useState} from "react";
import "./Search.scss";
// import searchImg from "./assets/magnifying-glass-svgrepo-com.svg"
const Search = props => {
    const [value, setValue] = useState("");
    const changed = (e) => {
        setValue(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(value);
    }
    return (
        <form className="search" onSubmit={submit} >
            {/* <img
            src={searchImg}
            alt="search icon"
            class="search__icon"
            /> */}
            <input
                type="text"
                className="search__field"
                placeholder="Search Collections and Creators"
                onChange={changed}
            />
            <button className="search__btn" onSubmit={submit}>Search</button>
        </form>
    )
}
export default Search;