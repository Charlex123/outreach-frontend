import React from 'react'
import { useState, useEffect } from 'react';
// import signbtn from '../../src/assets/images/googlesignbtn.png';
import logo from '../../src/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare,faAlignJustify, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
library.add(fas, faTwitter, faFontAwesome,faQuestionCircle, faCheck,faCheckCircle,faAlignJustify)

const Nav = () => {
// Create a state variable to manage the visibility of the navigation menu
const [isNavOpen, setNavOpen] = useState(false);
useEffect(() => {
  // Function to handle window resize
  const handleResize = () => {
    // Check the device width and update isNavOpen accordingly
    if (window.innerWidth <= 990) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };

  // Initial check when the component mounts
  handleResize();

  // Add a resize event listener to update isNavOpen when the window is resized
  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


// Function to toggle the navigation menu
const toggleNav = () => {
  setNavOpen(!isNavOpen);
};

  return (
    <>
    <nav className="nav">
        <button title='togglebtn' className='nav-toggle-btn' type='button' onClick={toggleNav}><FontAwesomeIcon icon={faAlignJustify} size='lg' className='toggle-icon'/></button>
        <div className='nav-container'>
            <div className='logo'>
              <a href='/' rel='noopener noreferrer'><img src={logo} alt='logo' className='logoni'/></a>
            </div> 
            
            {isNavOpen && (
              <div className='nav-container-p'>
              <ul className='upa'>
                <li><a href='/' rel='noopener noreferrer'>Home</a></li>
                <li><a href='/terms' rel='noopener noreferrer'>Terms</a></li>
                <li><a href='/privacy-policy' rel='noopener noreferrer'>Privacy</a></li>
              </ul>
              <ul>
                <li className='spt'><a href='/support' rel='noopener noreferrer'>Support <FontAwesomeIcon icon={faQuestionCircle} size='lg' className='toggle-icon'/></a></li>
              </ul>
            </div>)
            }
        </div>
    </nav>
    </>
  )
}

export default Nav