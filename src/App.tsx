import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import DataProvider from './context/authcontext';
import styled from "styled-components";

import { GlobalStyles } from "./components/styles/Global";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

library.add(fas, faTwitter, faFontAwesome, faGoogle)

function App(): any {

  const [modalState, setModalState] = useState<boolean>(false);
  const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
  const [bulkRecipients, setBulkRecipients] = useState<string>("");
  const [recipientsInputType, seRecipientsInputType] = useState<string>("");

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      setModalState(!modalState);
     let outreach_btn= document.getElementById("outreach-btn")
      console.log(outreach_btn)
   }
  }, [])

  return (
    <DataProvider>
      <ToastContainer />
      <div className="App">
        
          <h1>
            Welcome To The Outreach
          </h1>
          <h2>Your best mass gmail sender</h2>
          
          {/* <div className='signin_btn'>
              <button type='button' id="outreach-btn"><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</button>
          </div> */}
          <div className='signin_btn'>
              <a href="https://master.d1l3klsse2xzei.amplifyapp.com/auth/google" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</a>
          </div>
          <GlobalStyles />
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/social/*" element={<Social />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      </div>
    </DataProvider>
  );
}

export default App;


export const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

export const Overlay = styled.div`
   position: absolute;
   inset: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   // background-color: rgba(0, 0, 0, 0.8);
   z-index: 2;
`;