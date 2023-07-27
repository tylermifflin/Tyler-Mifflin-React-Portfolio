import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resume() {
    return (
        <div className='container'>
            <h2>Resume</h2>
            <div className='row'>
                <div className='col-md-6'>
            <p>
            Here is a link to my resume:
            </p>
            </div>
            <div className='col-md-6'>
            <ul>
                    <a href="https://docs.google.com/document/d/17geriMyVB5jSeXVxP7kVoFsI4QCCEr3K/edit?usp=sharing&ouid=114561379459160840512&rtpof=true&sd=true">Tyler Mifflin's Resume</a>
            </ul>
        </div>
        </div>
        </div>
    )
}
