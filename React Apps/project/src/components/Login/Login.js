import React, { useState, useEffect} from 'react';
import { login } from '../../utilities/projectAPI';
import './Login.css'

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [bool, setBool] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  
  const handleSubmit = (e) => {
    const data = {email: email, password: password}
    const session = login(window.location.href, data);
    if(session){
      props.handleSignedIn(true);
      //window.location.replace('/');
    }
    else{
      console.log('')
    }
    e.preventDefault();
  }

  const canSubmit = () => {
    if(email && password && checked){
      setBool(true)
    }
    else{
      setBool(false) // change to false
    }
  }


  useEffect(() => {
    canSubmit();
  })

    return(
      <div id="body">
      <header className="header">
      </header>
      <div>
        <div><h1>Login</h1></div>
        <div id="login-container">
          <div id="login-form">
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
              <div id="terms-container">
                <input type="checkbox" name="terms" id="termsCheckbox" checked={checked} 
                onClick={()=>
                  {setChecked(checked ? false : true)}}/>
                <span id="terms"> By signing in, you agree to the Terms of Service and 
                  Privacy Policy</span>
              </div>
            </label>
            <input style={{cursor: bool ? 'pointer' : 'default', 
            backgroundColor: bool ? '#000' : 'grey'}} type="submit" 
            value="Login" id="login-button" disabled={!bool}/>
          </form>
          </div>
        </div>
     </div>
    </div>
    )
}