import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutme from '../images/aboutme.jpg';

const aboutmeimgstyle = {
    height: "75%",
    display: "flex",
}


export default function Aboutme() {
    return (
        <div className='container'>
            <h2>About Me</h2>
            <div className='row'>
             <div className='col-md-6'>
              <p>
               My name is Tyler Mifflin, I am a creative web developer. I have a positive outlook on life.
               I am passionate about coding, physical and mental health, outdoor recreation, the environment, and photography.
              </p> 
             </div>
            <div className='col-md-6'>
            {/* add about me picture here */}
            <img src={aboutme} alt="about me" className='img-fluid' style={aboutmeimgstyle} />
            </div>
            </div>
        </div>
    )
}