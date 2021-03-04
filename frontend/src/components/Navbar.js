import React from 'react';
import './Navbar.css'; 
import {Link ,NavLink} from 'react-router-dom';
import { AiOutlineMenu,AiOutlineCloseCircle } from "react-icons/ai";
import {IconContext} from "react-icons";
import { GrCart } from "react-icons/gr";
function Navbar(){

    return  <div className="navbar">
       <IconContext.Provider value={{color:"gray", size:"2em"}} >
    <div className="menu" style={{display:'flex',alignItems:'center'}}>
    <button> <AiOutlineMenu/></button>
    <div>  <NavLink activeClassName="selected" exact to="/" style={{textDecoration: 'none'}}>Home</NavLink></div>
  </div>

 <div className="logo"><img src="./images/rolex.png" alt="logo" style={{width:'50px',height:'50px'}}/></div>
  <div className="header-links">
  
   <NavLink activeClassName="selected" to="/watches" style={{textDecoration: 'none'}}>Watches</NavLink>
   <NavLink activeClassName="selected" to="/login" style={{textDecoration: 'none'}}>Login</NavLink>
   <NavLink activeClassName="selected" to="/signup" style={{textDecoration: 'none'}}>Sign Up</NavLink> 
   <NavLink activeClassName="selected" to="/cart" style={{textDecoration: 'none'}}><GrCart/></NavLink>
    
  </div>
  </IconContext.Provider>
 
  </div>

   
}

export default Navbar;