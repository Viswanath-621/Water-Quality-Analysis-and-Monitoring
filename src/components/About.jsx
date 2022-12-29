import React, { Component } from 'react';
import sonu from "../assets/sonu.png";
import viswa from "../assets/viswa.jpeg";

import  grp from "../assets/grp.jpeg";
const About = () =>{
  return(
    <div id = "clients" className='hero-ra'>
      <legend>Our Team</legend><br/>  
      <h1>We are a team of expert designers</h1>
    <div className='hero-ba'>
    <h3><span>There </span>
  <span>are </span>
  <span>no </span>
  <span>limits </span>
  <span>to </span>
  <span>what </span>
  <span>you </span>
  <span>can </span>
  <span>accomplish, </span>
  <span>except </span>
  <span>the </span>
  <span>limits </span>
  <span>you </span>
  <span>place </span>
  <span>on </span>
  <span>your </span>
  <span>own </span>
  <span>thinking. </span><br></br><br/>
  <right>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
  <span>Skavith </span>
  <span> Aqua</span></right>
</h3>
        
    <div className='hero-us'>        
        <img src = {grp}/>
    </div>

    </div>
    </div>
  )
}

export default About;