"use client"
import React, { useState } from "react";
import "./Nav.css";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return ( 
     
    <nav>
     
      <div className="menu" onClick={() => setMenuOpen(!menuOpen) }>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>

       <li>
          <p><img src="https://cdn.pixabay.com/animation/2023/01/20/11/31/11-31-18-13_512.gif" width="30px"/> </p>
        </li>

       <li>
          <p>Home  </p>
        </li>


        <li>
          <p to="/Dashboard">Dashboard</p>
        </li>

        <li>
          <p to="/projects">projects</p>
        </li>


        <li>
          <p to="/tasks">Tasks</p>
        </li>
        
        <li>
          <p to="/create">Users</p>
        </li>
        </ul>

       <div   id="log" style={{marginRight: "30px",  display : menuOpen? "block" : ""}} >
       <h3> <img   src="https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg" style={{width :"45px" , border :"2px solid black" , borderRadius :"50px"}} />   </h3> 
       </div>
      
    </nav>                   
  );                          
};
 export default Navbar;