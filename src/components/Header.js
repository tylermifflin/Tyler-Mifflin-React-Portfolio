import React from 'react';

const headerstyle = {
    fontSize: '4rem',
    color: 'aquamarine',
    fontfamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
    minheight: '100px',
};

const navbarContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#414A4C',
};

const navstyle = {
    fontSize: '3rem',
    color: 'white',
    fontfamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    padding: '0 20px',
    
    
};


export default function Header({currentpage, handlepagechange }) {
    return (
        <header>
            <div className='container-fluid'>
             <div className='row'>
               <div className='col text-center'>
            <nav className='navbar navbar-expand-lg' style={navbarContainer}>
            <h1 style={headerstyle}>Tyler Mifflin</h1>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a href="#aboutme" style={navstyle} onClick={() => handlepagechange('Aboutme')} className={currentpage === 'Aboutme' ? 'nav-link active' : 'nav-link'}>
                            About Me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#portfolio" style={navstyle} onClick={() => handlepagechange('Portfolio')} className={currentpage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#resume" style={navstyle} onClick={() => handlepagechange('Resume')} className={currentpage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" style={navstyle} onClick={() => handlepagechange('Contact')} className={currentpage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
            </div>
            </div>
        </header>
    );
}



