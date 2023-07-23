import React from 'react';

export default function Header({currentpage, handlepagechange ]) {
    return (
        <header>
            <h1>Tyler Mifflin</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#aboutme" onClick={() => handlepagechange('Aboutme')} className={currentpage === 'Aboutme' ? 'nav-link active' : 'nav-link'}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => handlepagechange('Portfolio')} className={currentpage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handlepagechange('Resume')} className={currentpage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlepagechange('Contact')} className={currentpage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


