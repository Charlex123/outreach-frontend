import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import DataProvider from './context/authcontext';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = {
  colors: {
     primaryColor: "#6662F4",
     borderColor: "#6662F4",
  },
};


function App(): any {

  const [modalState, setModalState] = useState<boolean>(false);
  // const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
  // const [bulkRecipients, setBulkRecipients] = useState<string>("");
  // const [recipientsInputType, seRecipientsInputType] = useState<string>("");

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
      <ThemeProvider theme={theme}>
        <div className="App">
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/social/*" element={<Social />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
      </ThemeProvider>  
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