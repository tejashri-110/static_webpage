import React from 'react';
import img1 from "../media/img1.svg";
import './Home.css';

const Home = () => {
    return (
        <div class="home">
            <div class="container">
                <h1> FIT Foodie Finds
                </h1>
                <img class="logo-img" src={img1} alt="logo"></img>
            </div>
        </div>
    )
}

export default Home






