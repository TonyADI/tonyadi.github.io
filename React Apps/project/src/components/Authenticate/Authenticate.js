import React, { useState, useEffect } from 'react';
import { authenticate }  from '../../utilities/projectAPI';
import './Authenticate.css';

export const Authenticate = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const [bool, setBool] = useState(false);
  const [success, setSuccess] = useState('Default'); // wrong default value

  const handleChange = e => {
    switch(e.target.name){
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'first-name':
        setFirstName(e.target.value);
        break;
      case 'last-name':
        setLastName(e.target.value);
        break;
      default:
        console.log('Error!')
    }
  }

  const handleSubmit = (e) => {
    const data = {email: email, password: password, 
      firstName: firstName, lastName: lastName};
    authenticate(window.location.href, data).then(value => {setSuccess(value)});
    if(success){
        props.handleSignedIn(true);
        props.setAccount(email);
        //window.location.replace('/');
    }
    else{

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
    <div>
      <div>
        <div><h1>{props.title}</h1></div>
        <div id="authenticate-container">
          <div id="authenticate-form">
          <form onSubmit={handleSubmit}>
            <label>
              <div className="input-container">
                <input className="input-field" style={{borderColor: success ? 'default' : '#dc3545'}} type="email" name="email" placeholder="Email Address" 
                value={email} onChange={handleChange}/>
                {!success && <span className="error-message">This email address already exists!</span> }
              </div>
              <div className="input-container">
                <input className="input-field" type="password" name="password" placeholder="Password" 
                value={password} onChange={handleChange}/>
              </div>
              {props.title === 'Register' && <div>
                    <div className="input-container">
                        <input className="input-field" type="text" name="first-name" placeholder="First Name" 
                        value={firstName} onChange={handleChange}/>
                    </div>
                    <div className="input-container">
                        <input className="input-field" type="text" name="last-name" placeholder="Last Name" 
                        value={lastName} onChange={handleChange}/>
                    </div>
              </div> 
              }
              <div id="terms-container">
                <input type="checkbox" name="terms" id="termsCheckbox" defaultChecked={checked} 
                onClick={()=>
                  {setChecked(checked ? false : true)}}/>
                <span id="terms"> By signing {props.title === 'Register' ? 'up' : 'in'}, you agree to the Terms of Service and 
                  Privacy Policy</span>
              </div>
            </label>
            <input style={{cursor: bool ? 'pointer' : 'default', 
            backgroundColor: bool ? '#000' : 'grey'}} type="submit" 
            value={props.title} id="authenticate-button" disabled={!bool}/>
          </form>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Authenticate;
