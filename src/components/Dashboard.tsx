import React, { useState, useEffect } from 'react'
import { Container, Overlay } from '../App'
import axios from 'axios';
import Modal from './Modal'
import FileUploadModal from './Modal/FileUploadModal';
import { OutreachButton } from './styles/ButtonVariants.styled';

const Dashboard = () => {
   const [modalState, setModalState] = useState<boolean>(false);
   const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
   const [bulkRecipients, setBulkRecipients] = useState<string>("");
   const [recipientsInputType, seRecipientsInputType] = useState<string>("");
   const [userappkey, setAppKey] = useState<any>("");

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
       } catch (error) {
         console.log(error)
       }
   }
   
   getUserdata();

   const showModal = (e: React.MouseEvent): void => setModalState(true);
   return (
      <Container>
         <h1>Hello Dashboard</h1>
         <OutreachButton onClick={(e) => showModal(e)}>Outreach</OutreachButton>
         <Modal
            modalState={modalState}
            setModalState={setModalState}
            setRecipientModalState={setRecipientModalState}
            bulkRecipients={bulkRecipients}
            setBulkRecipients={setBulkRecipients}
            inputType={recipientsInputType}
         >
            Message in Modal
         </Modal>
         	
         {recipientModalState && (
            <Overlay>
               <FileUploadModal
                  modalState={recipientModalState}
                  setModalState={setRecipientModalState}
                  setBulkRecipients={setBulkRecipients}
                  seRecipientsInputType={seRecipientsInputType}
               />
            </Overlay>
         )}
      </Container>
   )
   }

export default Dashboard