import React, { useEffect, useState } from 'react'
import { Overlay } from '../App'
import axios from 'axios';
import Modal from './Modal'
import FileUploadModal from './Modal/FileUploadModal';
import { OutreachButton } from './styles/ButtonVariants.styled';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../src/assets/images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare, faCheckDouble, faRightFromBracket, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome, faGoogle, faCheck,faCheckCircle)

const Privacy = () => {
//    const [modalState, setModalState] = useState<boolean>(false);
//    const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
//    const [bulkRecipients, setBulkRecipients] = useState<string>("");
//    const [recipientsInputType, seRecipientsInputType] = useState<string>("");

   const [userappkey, setAppKey] = useState<any>("");
   const [userData, setUserData] = useState<any>("");
   const [userEmail, setUserEmail] = useState<any>("");
   
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
   useEffect(() => {
      setAppKey(localStorage.getItem("signature"));
      
         }, [userappkey,userData,userEmail])

   return (
      <div>
         <p>Many users are concerned about the privacy of their email marketing lists and whether GMass stores their email addresses and the contents of email messages, and whether any of this data is shared with third parties. The information below is meant to address these concerns.</p>
         <h2>Overview of how GMass works</h2>
         <p>GMass works by transferring data to and from your Gmail account. Most of this data transfer occurs via numeric identifiers specific to Gmail and the Gmail API. In some cases, email addresses are transferred from the GMass server back to the Gmail interface, but in a secure manner over SSL. Gmail does not allow a third party integration like GMass to connect to account data without the use of SSL.</p>
         <h2>How are your email lists used?</h2>
         <p>In order to track opens, clicks, and provide unsubscribe functionality via the GMass unsubscribe link, our database does store the email addresses to which you are sending email. This data is stored in a database, secured by two layers of firewalls, and is never shared with any third parties. GMass is similar in this regard to well-known email marketing systems like MailChimp, where storage of email addresses is required to provide standard email marketing features.</p>
         <h2>Does GMass store the content of your email message?</h2>
         <p>No. Unlike a traditional email marketing service like MailChimp, the GMass database does not store the contents of your email marketing campaigns, except for the From Address used for each campaign.</p>
         <p>We store the From Address because in Gmail, multiple From Addresses can be authorized for use in a single Gmail account, and by storing the From Address, we are better able to support users by being able to look up their GMass account when they tell us they sent a campaign “from” a certain address.</p>
         <p>We do not store the content (Subject / Message) of email campaigns, but the content does pass through our server ephemerally. This is required in order to add the mechanisms to an email message that allows GMass to track opens and clicks on individual email messages. This process happens in microseconds and the content of an email message does not live on our server beyond that.</p>
         <h2>Does GMass share any of your email list information with third parties?</h2>
         <p>No. GMass is a tech product built by developers who are email marketing enthusiasts. The company behind GMass, Wordzen, Inc., is a software company in the business of creating Gmail plugins and not in the business of selling or renting data.</p>
         <h2>Data Deletion Requests</h2>
         <p>In compliance with GDPR, any user may request that his/her data be deleted from our servers. To make such a request send an email to datadeletion@wordzen.com from the GMass account whose data you wish to be deleted.</p>
         <h2>Email Warmup</h2>
         <p>GMass does not provide email warming services for Google accounts.</p>
      </div>
   )
   }

export default Privacy