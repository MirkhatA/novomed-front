import React from "react";
import Navbar from "../components/header/Navbar";
import HeroImg from "../components/hero/HeroImg";
import Footer from "../components/footer/Footer";
import HomeServices from "../components/homeServices/HomeServices";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <HomeServices />
            <Footer />
        </div>
    )
}

export default Home;