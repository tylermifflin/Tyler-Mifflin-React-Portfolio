import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutme from '../images/aboutme.jpg';

const aboutmeimgstyle = {
    height: "100%",
    display: "flex",
}


export default function Aboutme() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
            My name is Tyler Mifflin, I am a creative web developer. I have a positive outlook on life.
            I am passionate about coding, physical and mental health, outdoor recreation, the environment, and photography.
            </p> 
            {/* add about me picture here */}
            <img src={aboutme} alt="about me" className='card-img-top' style={aboutmeimgstyle} />
        </div>
    )
}