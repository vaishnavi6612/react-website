import React from "react";
import { Link } from "react-router-dom";
import CafeImage from "../assets/cafe1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${CafeImage})` }}>
      <div className="headerContainer">
        <h1> AAI CAFE RESTO </h1>
        <p> Welcome To Aai Cafe Resto</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
