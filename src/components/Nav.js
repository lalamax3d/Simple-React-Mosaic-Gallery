import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import MyLogo from '../img/logo_ff2_2021.png';
export default function Nav(){

  // navlinks can have a class of active, which can be styled, comparing to links
  // classname, style, children, to, exact
  return(
        <div className="navbar">
          <div className="logo">
            <img src="assets/logo_ff2_2021.png" style={{width:'100%'}} alt="logo" />
          </div>
           <ul className="nav-links">
              <NavLink style={({isActive}) => {return isActive ? {color: 'red'} : {}}} to="/">Home</NavLink>
              <Link  style={({isActive}) => {return isActive ? {color: 'red'} : {}}} to="RT" spy={true} smooth={true} duration={500}>RealTime</Link>
              <NavLink style={({isActive}) => {return isActive ? {color: 'red'} : {}}} to="/concepts">Concepts</NavLink>
              <NavLink style={({isActive}) => {return isActive ? {color: 'red'} : {}}} to="/about">About</NavLink>
           </ul>
        </div>
  );

}