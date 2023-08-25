import React, { useEffect, useState } from 'react'
import { Container, Overlay } from '../App'
import axios from 'axios';
import Modal from './Modal'
import FileUploadModal from './Modal/FileUploadModal';
import { OutreachButton } from './styles/ButtonVariants.styled';

const Dashboard = () => {
//    const [modalState, setModalState] = useState<boolean>(false);
//    const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
//    const [bulkRecipients, setBulkRecipients] = useState<string>("");
//    const [recipientsInputType, seRecipientsInputType] = useState<string>("");
   const [userappkey, setAppKey] = useState<any>("");
   const [userData, setUserData] = useState<any>("");
   const [userEmail, setUserEmail] = useState<any>("");
   
   useEffect(() => {
      setAppKey(localStorage.getItem("signature"));
      async function getUserdata() {
         try {
            const config = {
            headers: {
               "Content-type": "application/json"
            }
            }  
            const {data} = await axios.post("https://theoutreachapp.onrender.com/user/verifyuserdata", {
               userappkey
            }, config);
            localStorage.setItem("userData_", JSON.stringify(data))
            setUserEmail(data.email);
            setUserData(localStorage.getItem("userData_"));
         } catch (error) {
            console.log(error)
         }
      }
      getUserdata();
   }, [userappkey,userData,userEmail])
   
   return (
      <div className='dash_main'>
         <h1>Hello, {userEmail}</h1>
         <h2>Welcome To Your Outreach Dashboard</h2>
         <div className='gmail_redirect'><a href="https://mail.google.com/mail/u/0" rel='noopener no-referrer'>Go To Your GMail Inbox</a></div>
         <div className='dashb_main'>
            <p>This is where all your email campaign details and records for tracking will be displayed</p>
            <p>Use the extension to interact with Gmail, send email campaigns and set your campaign schedules and others</p>
            <h2>This Dashboard is where you track and see records of all your email campaigns </h2>
         </div>
      </div>
   )
   }

export default Dashboard