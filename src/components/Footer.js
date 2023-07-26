// provide links to my GitHub, LinkedIn, and Instagram

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const GitHubSyles = {
    fontSize: '3rem',
    color: 'black',
    display: 'flex flex-row'
};

const LinkedInSyles = {
    fontSize: '3rem',
    color: '#0A66C2',
    display: 'flex flex-row'
};

const InstagramSyles = {
    fontSize: '3rem',
    color: '#fff',
    background: '#d6249f',
    display: 'flex flex-row'
    
};

export default function Footer() {
    return (
        <footer>
            <div className='container-fluid'> 
             <div className='row'>
               <div className='col text-center'>
                <nav className='navbar navbar-expand-lg'>
                 <ul className='navbar-nav'>
                    <li className='nav-item'>
                <a href="https://github.com/tylermifflin" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaGithub style={GitHubSyles}  />
                </a>
                    </li>
                    <li className='nav-item'>
                <a href="https://www.linkedin.com/in/tyler-mifflin-116ba9132/" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaLinkedin style={LinkedInSyles}/>
                </a>
                    </li>
                    <li className='nav-item'>
                <a href="https://www.instagram.com/tymiff/" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaInstagram style={InstagramSyles}/>
                </a>
                    </li>
                    </ul>
                </nav>
            </div>
            </div>
            </div>
        </footer>
    );
}
