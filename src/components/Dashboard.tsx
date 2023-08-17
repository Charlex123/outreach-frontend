import React, { useState } from 'react'
import { Container } from '../App'
import axios from 'axios';

const Dashboard = () => {
   const [userappkey, setAppKey] = useState<any>("");
   const [userData, setUserData] = useState<any>("")

   console.log('user app key',setAppKey(localStorage.getItem("signature")));
   async function getUserdata() {
      try {
         const config = {
           headers: {
             "Content-type": "application/json"
           }
         }  
         const {data} = await axios.post("/user/verifyuserdata", {
            userappkey
          }, config);
         console.log('data -', data)
         localStorage.setItem("userData_", JSON.stringify(data))
         
         console.log('user data --',localStorage.getItem("userData_"))
         setUserData(localStorage.getItem("userData"));
         console.log(userData);
       } catch (error) {
         console.log(error)
       }
   }
   
   getUserdata();

   return (
      <Container>
         <h1>Hello ${userData.email}, Welcome To Your Outreach Dashboard</h1>
         <div className='dashb_main'>
            <p>This is where all your email campaign details and records for tracking will be displayed</p>
            <p>Use the extension to interact with Gmail, send email campaigns and set your campaign schedules and others</p>
            <h2>This Dashboard is tracking and recording purposes !</h2>
         </div>
      </Container>
   )
   }

export default Dashboard