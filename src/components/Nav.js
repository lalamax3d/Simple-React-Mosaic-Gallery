import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Shopio</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/concepts">Concepts</Link>
              <Link to="/about">About</Link>
           </ul>
        </div>
  );

}