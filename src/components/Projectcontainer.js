import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function Projectcontainer(){
  const [currentpage, setcurrentpage] = useState('Aboutme');

  const renderpage = () => {
    switch (currentpage) {
      case 'Aboutme':
        return <Aboutme />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Aboutme />;
    }
  };

  const handlepagechange = (page) => setcurrentpage(page);

  return (
    <div className='body'>
      <Header currentpage={currentpage} handlepagechange={handlepagechange} />
      <main>
        {renderpage()}
      </main>
      <Footer />
    </div>
  );
}

 
