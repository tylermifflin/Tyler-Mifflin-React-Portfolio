import React from 'react';

export default function Header({currentpage, handlepagechange }) {
    return (
        <header>
            <div className='container-fluid'>
             <div className='row'>
               <div className='col text-center'>
            <h1>Tyler Mifflin</h1>
            <nav className='navbar navbar-expand-lg'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a href="#aboutme" onClick={() => handlepagechange('Aboutme')} className={currentpage === 'Aboutme' ? 'nav-link active' : 'nav-link'}>
                            About Me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#portfolio" onClick={() => handlepagechange('Portfolio')} className={currentpage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#resume" onClick={() => handlepagechange('Resume')} className={currentpage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" onClick={() => handlepagechange('Contact')} className={currentpage === 'Contact' ? 'nav-link active' : 'nav-link'}>
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



