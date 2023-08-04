import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faGoogle)

function App() {

  const handleClick = () => {
    window.location.href = process.env.REACT_APP_REDIRECT!
 }

  return (
    <div className="App">
        <h1>
          Welcome To The Outreach
        </h1>
        <h2>Your best mass gmail sender</h2>

        <div className='signin_btn'>
            <button type='button' onClick={handleClick}><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</button>
        </div>
    </div>
  );
}

export default App;
