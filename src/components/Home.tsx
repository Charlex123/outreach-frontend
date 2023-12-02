import React from 'react'
// import { Container } from '../App'
// import { OutreachButton } from './styles/ButtonVariants.styled'
// import {HashRouter as Router,} from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import signbtn from '../../src/assets/images/googlesignbtn.png';
import shirnelimg from '../assets/images/jake-nackos.jpg';
import danimg from '../assets/images/man.jpg';
import theoimg from '../assets/images/man2.jpg';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import  Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Table from 'react-bootstrap/Table';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import Nav from './Nav';
import Heroimg from '../assets/images/heroimg.jpg'
import Bannerimg from '../assets/images/mailmarketingbanner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare,faAlignJustify, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
library.add(fas, faTwitter, faFontAwesome,faQuestionCircle, faCheck,faCheckCircle,faAlignJustify)

const Home = () => {
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
    <Nav/>
    <div className='homemain'>
      <div className="overlay_d"></div>
      <div className="c_content">
          <div className='hero_h1'>
            <div>
              <h1>Welcome To TheOutreach</h1>
            </div>
            <div>
              <h2>Your best mass gmail sender</h2>
              <p>Send, organize and track your email campaigns for maximum outreach, engagement, conversions and sales</p>
            </div>
            <div className='get_sd_btns'>
              <a title='get started' href={process.env.REACT_APP_REDIRECT_LIVE} rel='noopener noreferrer'><img src={signbtn}  alt='Google Sign In' className='gsignin' /></a>
              <a href='download' rel='noopener noreferrer' className='learnmore'>Learn More</a>
            </div>
          </div>
          <div className='hero_image'>
            <img src={Heroimg} alt='hero img' className='hero-img'/>
          </div>
      </div>
    </div>

    <div className="p_content">
        <div className='pc_h1'>
          <div>
            <br></br>
            <h1>Unleash seller productivity across the sales cycle and digital marketing</h1>
          </div>
          <div>
            <p>Use TheOutreach and experience the powerful features of email campaign delivery at it's best with email tracking, opens and clicks </p>
          </div>
          <div className='wcs'>
            <h4>What you benefit by using TheOutreach</h4>
            <ul>
              <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Sending bulk email campaigns to many recipients at once</li>
              <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Tracking your email campaigns at several time intervals of your preference</li>
              <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Sending test mail campaigns for experimental purposes</li>
              <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Create email campaign drafts and send them later </li>
              <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Schedule and auto-follow up your email campaigns</li>
              <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> And many more</li>
            </ul>
          </div>
        </div>
        <div className='pc_vid'>
          <video loop controls>
            <source src='https://outreachvideo.s3.us-east-2.amazonaws.com/marketingvideo.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>

    <div className="b_content">
        
        <div className='banner_image'>
          <img src={Bannerimg} alt='banner img' className='banner-img'/>
        </div>
        
        <div className='banner_h1'>
          <div>
            <h1>Let's Automate Your Email Campaigns</h1>
          </div>
          <div>
            <h2>Let your marketing team focus on other important productive projects while we handle your email campaigns effectively</h2>
          </div>
          <div className='get_sd_btns'>
            <a href='download' rel='noopener noreferrer'>Learn More</a>
          </div>
        </div>

    </div>

    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={shirnelimg}  alt='thumbnail'/>
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            {/* <h4>Designer</h4> */}
            <p>
              Thanks to Theoutreach, i can now focus on my other projects because i know I'm covered in my email campaign
            </p>
          </div>
        </div>

        <div>
          <img src={danimg} alt='thumbail'/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            {/* <h4>Designer</h4> */}
            <p>
              Short and simple, the best so far
            </p>
          </div>
        </div>

        <div>
          <img src={theoimg} alt='thumbnail'/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            {/* <h4>Designer</h4> */}
            <p>
              Awesome experience
            </p>
          </div>
        </div>
      </Carousel>

    <Footer/>
    </>
  )
}

export default Home