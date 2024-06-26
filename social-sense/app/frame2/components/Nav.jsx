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
          <p to="/blogs">Blogs</p>
        </li>

        <li>
          <p to="/myBlogs">My-Blogs</p>
        </li>


        <li>
          <p to="/about">About</p>
        </li>
        
        <li>
          <p to="/create">Create</p>
        </li>
        </ul>

       <div   id="log" style={{marginRight: "30px",  display : menuOpen? "block" : ""}} >
       <h3>   <p>  Login</p>   </h3> 
       </div>
      
    </nav>                   
  );                          
};
 export default Navbar;