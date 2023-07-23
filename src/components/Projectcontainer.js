import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutme from './components/pages/Aboutme';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

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
  }
}

 
