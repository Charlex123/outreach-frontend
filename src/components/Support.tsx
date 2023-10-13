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
            <p>We're always here to answer all your queries</p>

            <Accordion defaultActiveKey="0" className='mt-5' flush>
               <Accordion.Item eventKey="0">
               <Accordion.Header className='accheader'>What is TheOutreach?</Accordion.Header>
               <Accordion.Body className='accbody'>
                  TheOutreach.co, is a gmail mass sender, that organizes, records and tracks email campaigns for effective marketing.
               </Accordion.Body>
               </Accordion.Item>
               <Accordion.Item eventKey="1">
               <Accordion.Header className='accheader'>How can TheOutreach improve your business?</Accordion.Header>
               <Accordion.Body className='accbody'>
               At The Outreach, we offer a range of features and benefits to enhance your email marketing experience, including but not limited to:

Sending bulk email campaigns to many recipients at once. Tracking the performance of your email campaigns at several time intervals of your preference. Sending test mail campaigns for experimental purposes to optimize your outreach strategies. Creating email campaign drafts and scheduling them for future delivery. Automating follow-ups and reminders to improve engagement with your recipients. And many more features designed to optimize your email outreach efforts.
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
                     Subject
                  </label>
                  <textarea className="form-control" title='subject' id="subject" required />
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