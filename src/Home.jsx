// import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
export default function Home() {
    return (
    <div className="container">
        <h1 className="home">Welcome to my app</h1>

        <div className="btnBox">
            {/* <button>Login</button>
            <button>Register</button> */}
           <Link to="/login" ><button className="bn">Login</button></Link>
           <Link to="/register" ><button className="bn">Register</button></Link>
           <Link to="/Screen1" ><button className="bn">Food Menu</button></Link>
        </div>

    </div>
    
    )
}