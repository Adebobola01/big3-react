import React from "react";
import Hero from "../../components/Hero";
import Trending from "../../components/Trending";
const home = (props: any) => {
    document.title = "Home";

    return (
        <>
            <Hero />
            <Trending/>
        </>
    )
}

export default home;