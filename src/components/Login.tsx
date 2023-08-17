import React from 'react'
// import { Container } from '../App'
// import { OutreachButton } from './styles/ButtonVariants.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome, faGoogle)

const Login = () => {

  return (
    <div className='loginmain'>
            <h1>Welcome To The Outreach</h1>
            <br/>
            <div><h2>Your best mass gmail sender</h2></div>
            
            {/* <div className='signin_btn'>
                <button type='button' id="outreach-btn"><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</button>
            </div> */}
            <div className='signin_btn'>
                <a href={process.env.REACT_APP_REDIRECT_LIVE} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</a>
            </div>
    </div>
  )
}

export default Login