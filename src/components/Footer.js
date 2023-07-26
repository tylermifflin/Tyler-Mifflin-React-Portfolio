// provide links to my GitHub, LinkedIn, and Instagram

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
        <footer>
            <div className='container'> 
             <div className='row'>
               <div className='col text-center'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                 <ul className='navbar-nav'>
                    <li className='nav-item'>
                <a href="https://github.com/tylermifflin" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaGithub />
                </a>
                    </li>
                    <li className='nav-item'>
                <a href="https://www.linkedin.com/in/tyler-mifflin-116ba9132/" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaLinkedin />
                </a>
                    </li>
                    <li className='nav-item'>
                <a href="https://www.instagram.com/tymiff/" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaInstagram />
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
