import React, { useState, useEffect } from 'react';
import { register }  from '../../utilities/projectAPI';
import './Register.css';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const [bool, setBool] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  const handleSubmit = (e) => {
    const data = {email: email, password: password, 
      firstName: firstName, lastName: lastName}
      const session = register(window.location.href, data);
      if(session){
        props.handleSignedIn(true);
        //window.location.replace('/');
      }
    e.preventDefault();
  }

  const canSubmit = () => {
    if(email && password && firstName && lastName && checked){
      setBool(true)
    }
    else{
      setBool(false) // change to false
    }
  }

  useEffect(() => {
    canSubmit();
  })

  
  return (
    <div id="body">
      <header className="header">
      </header>
      <div>
        <div><h1>Register</h1></div>
        <div id="register-container">
          <div id="register-form">
          <form onSubmit={handleSubmit}>
            <label>
              <div className="input-container">
                <input className="input-field" type="email" name="email" placeholder="Email Address" 
                value={email} onChange={handleEmailChange}/>
              </div>
              <div className="input-container">
                <input className="input-field" type="password" name="password" placeholder="Password" 
                value={password} onChange={handlePasswordChange}/>
              </div>
              <div className="input-container">
                <input className="input-field" type="text" name="first-name" placeholder="First Name" 
                value={firstName} onChange={handleFirstNameChange}/>
              </div>
              <div className="input-container">
                <input className="input-field" type="text" name="last-name" placeholder="Last Name" 
                value={lastName} onChange={handleLastNameChange}/>
              </div>
              <div id="terms-container">
                <input type="checkbox" name="terms" id="termsCheckbox" checked={checked} 
                onClick={()=>
                  {setChecked(checked ? false : true)}}/>
                <span id="terms"> By signing up, you agree to the Terms of Service and 
                  Privacy Policy</span>
              </div>
            </label>
            <input style={{cursor: bool ? 'pointer' : 'default', 
            backgroundColor: bool ? '#000' : 'grey'}} type="submit" 
            value="Register" id="register-button" disabled={!bool}/>
          </form>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Register;
