import React from "react";
import { Link } from "react-router-dom";

import './Screen1.css';

export default function Screen1(){
    return(
        <>
        <h1>Welcome to Food's Kitchen</h1>
         
        <Link to="/foodmenu" ><button className="bn">Food Menu</button></Link>
    
            
          
        
        </>  
    )
}
