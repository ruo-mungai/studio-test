import React from 'react'
import './Main.css'
import Image from "./img/DARK BG PROME LOGO.jpg"

function NavBar() {
  return (
     <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      {/* <h1 class="logo me-auto"><a href="index.html">Presento<span>.</span></a></h1> */}
      <a href="index.html" class="logo me-auto"><img src={Image} alt=""/></a>

      <nav id="navbar" class="navbar order-last order-lg-0"
      style={{marginLeft:"200px"}}>
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
    
      </nav>
    </div>
  </header>
  );
}

export default NavBar