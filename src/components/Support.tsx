import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer';
import Nav from './Nav';

const Support = () => {

   const [formStatus, setFormStatus] = useState('Send')

   const onSubmit = (e: any) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
         name: name.value,
         email: email.value,
         message: message.value,
      }
      console.log(conFom)
   }

  return (
   <>
      <Nav/>
      <div className="container mt-5">
         <div className='conta1'>
            <h2>Need Help?</h2>
            <p>Send us a message</p>
            <p>We're always here for your queries</p>

            <Accordion defaultActiveKey="0" flush>
               <Accordion.Item eventKey="0">
               <Accordion.Header className='accheader'>What is TheOutreach?</Accordion.Header>
               <Accordion.Body className='accbody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
               </Accordion.Body>
               </Accordion.Item>
               <Accordion.Item eventKey="1">
               <Accordion.Header className='accheader'>How can TheOutreach improve your business?</Accordion.Header>
               <Accordion.Body className='accbody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
               </Accordion.Body>
               </Accordion.Item>
            </Accordion>
         </div>
         <div className='conta2'>
            <form onSubmit={onSubmit}>
               <h2 className="mb-3"> Contact Us </h2>
               <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                     Name
                  </label>
                  <input className="form-control" type="text" id="name" required />
               </div>
               <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                     Email
                  </label>
                  <input className="form-control" type="email" id="email" required />
               </div>
               <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                     Message
                  </label>
                  <textarea className="form-control" id="message" required />
               </div>
               <div className='btn_div'>
                  <button className="submit_btn" type="submit">
                     {formStatus}
                  </button>
               </div>
            </form>
         </div>
      </div>

      <Footer/>
   </>
  );
};

export default Support;