import React, { useEffect } from 'react';
import "./nav.css";
import { useState } from 'react';
import NetflixLogo from "./netflixLogo.png";
function NavigationBar() {
  const [show,handleShow]=useState(false);
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
  }
  else{
    handleShow(false);
  }
}
useEffect(()=>{
  window.addEventListener('scroll',transitionNavBar);
  return ()=>window.removeEventListener('scroll',transitionNavBar);
},[])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
    <div className='nav_contents'>
    <img
    className='nav_logo'
    src={NetflixLogo}
     alt="ndqwjd"/>

    <img 
    className='nav_avatar'
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>

    </div>


      
      
    </div>
  )
}

export default NavigationBar


