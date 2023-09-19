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

const Terms = () => {
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
         <p>Please note that your use of and access to our services (defined below) are subject to the following terms; if you do not agree to all of the following, you may not use or access the services in any manner.</p>
         <p>These Terms of Use (the “Terms”) are a binding contract between you and GMass, Inc. (“GMass” “we” and “us”). If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at support@gmass.zendesk.com.</p>
         <p>You must agree to and accept all of the Terms, or you don’t have the right to use the Services. Your using the Services in any way means that you agree to all of these Terms, and these Terms will remain in effect while you use the Services. These Terms include the provisions in this document, as well as those in the <a href='privacy' rel='noreferrer noopener'>Privacy Policy</a>.</p>
         <h2>Will these Terms ever change?</h2>
         <p>We are constantly improving our Services, so these Terms may need to change along with the Services. We reserve the right to change the Terms at any time, but if we do, we will bring it to your attention by placing a notice on the GMass website, and/or by sending you an email, and/or by some other means.</p>
         <p>If you don’t agree with the new Terms, you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the Services in any way after a change to the Terms is effective, that means you agree to all of the changes.</p>
         <h2>General Philosophy</h2>
         <p>We strive to make GMass as easy-to-use as possible and as ethical a business operation as possible. The terms will ensure a good experience for you, our user, and us, the creators of GMass. You must agree to these terms before using GMass.</p>
         <h2>Anti-Spam Policy</h2>
         <p>You may not use GMass to send spam. Spam, by definition, is unsolicited email sent in bulk. There are several lines of defense in place in order to protect GMass from spammers. First, GMass personnel monitor outbound email flow 24 hours a day. Campaigns matching obvious spam and scam heuristics are terminated along with their associated accounts. Secondly, if you’re sending natively through Gmail, Google’s algorithms will likely catch you and terminate or suspect your Gmail or G Suite account. Thirdly, if you’re sending via a third party SMTP service like SendGrid, each service provider has their own mechanisms of watching for spam and terminating spammers.</p>
         <h2>GMass button versus Send button</h2>
         <p>GMass and its parent company, GMass, Inc. cannot be held responsible if you accidentally click the Gmail Send button instead of the GMass button. Clicking the Gmail Send button while working on an email campaign may send an email, exposing your email list to everyone in the To field. GMass and its parent company, GMass, Inc. also cannot be held responsible if you have other Chrome extensions installed that interfere with the function of the GMass buttons. For example, if you have a Chrome extension installed that overrides the GMass code and actually triggers the Gmail Send button click when the GMass button is clicked, we cannot be held responsible.</p>
         <h2>Sending Limits</h2>
         <p>The GMass software will attempt to send your email campaign to your email recipients, but we cannot guarantee that your emails will be delivered. Because we rely on Google’s infrastructure from sending, you agree that we cannot be held responsible if your particular Gmail or G Suite account has reached its capacity, as determined by Google. We publish guidelines, based on Google’s guidelines, of an account’s maximum sending capacity, but they are just guidelines, and not hard rules.</p>
         <h2>What about my privacy?</h2>
         <p>GMass takes the privacy of its users very seriously. For the current GMass Privacy Policy, please click <a href='privacy' rel='noreferrer noopener'>here</a>.</p>
         <p>The Children’s Online Privacy Protection Act (“COPPA”) requires that online service providers obtain parental consent before they knowingly collect personally identifiable information online from children who are under 13. We do not knowingly collect or solicit personally identifiable information from children under 13; if you are a child under 13, please do not attempt to register for the Services or send any personal information about yourself to us. If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible. If you believe that a child under 13 may have provided us personal information, please contact us at support@gmass.zendesk.com.</p>
         <h2>Warranty Disclaimer</h2>
         <p>Neither GMass nor its licensors or suppliers makes any representations or warranties concerning any content contained in or accessed through the Services, and we will not be responsible or liable for the accuracy, copyright compliance, legality, or decency of material contained in or accessed through the Services. We (and our licensors and suppliers) make no representations or warranties regarding suggestions or recommendations of services or products offered or purchased through the Services. THE SERVICES AND CONTENT ARE PROVIDED BY GMass (AND ITS LICENSORS AND SUPPLIERS) ON AN “AS-IS” BASIS, WITHOUT WARRANTIES OR ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</p>
         <h2>Limitation of Liability</h2>
         <p>TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL GMass (OR ITS LICENSORS OR SUPPLIERS) BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, OR (B) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF (I) $100 OR (II) THE AMOUNTS PAID BY YOU TO GMass IN CONNECTION WITH THE SERVICES IN THE TWELVE (12) MONTH PERIOD PRECEDING THIS APPLICABLE CLAIM, OR (III) ANY MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.</p>
         <h2>Assignment</h2>
         <p>You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your Services account, in any way (by operation of law or otherwise) without GMass’s prior written consent. We may transfer, assign, or delegate these Terms and our rights and obligations without consent.</p>
         <h2>Choice of Law; Arbitration</h2>
         <p>These Terms are governed by and will be construed under the laws of the State of Illinois, without regard to the conflicts of laws provisions thereof. Any dispute arising from or relating to the subject matter of these Terms, that is not solved via the dispute mechanisms above, shall be finally settled in Chicago, Illinois, in English, in accordance with the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in accordance with such Rules. Judgment upon the award rendered by such arbitrator may be entered in any court of competent jurisdiction. Notwithstanding the foregoing obligation to arbitrate disputes, each party shall have the right to pursue injunctive or other equitable relief at any time, from any court of competent jurisdiction. For all purposes of this Agreement, the parties consent to exclusive jurisdiction and venue in the state or federal courts located in Chicago, Illinois. Any arbitration under these Terms will take place on an individual basis: class arbitrations and class actions are not permitted. YOU UNDERSTAND AND AGREE THAT BY ENTERING INTO THESE TERMS, YOU AND GMass ARE EACH WAIVING THE RIGHT TO TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</p>
         <h2>Miscellaneous</h2>
         <p>You will be responsible for paying, withholding, filing, and reporting all taxes, duties, and other governmental assessments associated with your activity in connection with the Services, provided that GMass may, in its sole discretion, do any of the foregoing on your behalf or for itself as it sees fit. The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder. If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable. You and GMass agree that these Terms are the complete and exclusive statement of the mutual understanding between you and GMass, and that it supersedes and cancels all previous written and oral agreements, communications and other understandings relating to the subject matter of these Terms. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of GMass, and you do not have any authority of any kind to bind GMass in any respect whatsoever. You and GMass agree there are no third party beneficiaries intended under these Terms.</p>
      </div>
   )
   }

export default Terms