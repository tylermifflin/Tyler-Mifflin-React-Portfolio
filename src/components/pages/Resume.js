import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkcontainer = {
    display: "flex",
    alignItems: "center",
}

const linkstyle = {
    marginLeft: "10px",
}

export default function Resume() {
    return (
        <div className='container'>
            <h2>Resume</h2>
            <div className='row'>
                <div className='col'>
            <p>
             Skills:
             JavaScript, React, Express, Node, NoSQL, MySQL 
            </p>       
            <p>
            Here is a link to my resume:
            <span style={linkcontainer}>
                    <a href="https://docs.google.com/document/d/17geriMyVB5jSeXVxP7kVoFsI4QCCEr3K/edit?usp=sharing&ouid=114561379459160840512&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkstyle} >Tyler Mifflin's Resume</a>
            </span>
            </p>
            </div>
        </div>
        </div>
    )
}
