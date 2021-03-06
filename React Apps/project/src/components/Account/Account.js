import React, { useState, useEffect } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { deleteData, retrieveData, updateData, createData } from '../../utilities/projectAPI';
import './Account.css';
export const Account = props => {
    const [passwordDisplay, setPasswordDisplay] = useState('none');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [purchases, setPurchases] = useState('');
    const [listings, setListings] = useState('');
    const [bids, setBids] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [iconType, setIconType] = useState('fa fa-eye-slash')
    const [errorMessage, setErrorMessage] = useState('');

    const signOut = () => {
        props.setAccount('');
        props.setUserId('');
        window.location.replace('/');
    }

    const deleteAccount = e => { 
        const data = {email: props.account, password: password};
        deleteData(`https://localhost:3000/users/${props.userId}`, data).then(value => {
            if(value){
                signOut();
            }
            else{
                console.log('There was an error with the request');
                alert('Something went wrong. Please try again.');
            }
        });
        e.preventDefault();
    }

    const togglePassword = () => {
        const newPasswordType = (passwordType === 'password') ? 'text' : 'password';
        const newIconType = (iconType === 'fa fa-eye-slash') ? 'fa fa-eye' : 'fa fa-eye-slash';
        setPasswordType(newPasswordType);
        setIconType(newIconType);
      }

                                                                            // Manage Account/Password

    const modifyDetails = () => {
        const data = {first_name: firstName, last_name: lastName, email: props.account};
        if(firstName && lastName){
            if(firstName.match(/^(?:[A-Za-z]+|)$/) && lastName.match(/^(?:[A-Za-z]+|)$/)){
                updateData(`https://localhost:3000/users/${props.userId}?resource=details`, data).then(value => {
                    if(value){
                        console.log('Data was modified');
                        setErrorMessage('');
                        setDisabled(true);
                    }
                    else{
                        setErrorMessage('Something went wrong. Try again.')
                    }
                });
            }
            else{
                setErrorMessage('First Name and Last Name can only be letters.');
            }
        }
        else{
            setErrorMessage('First Name and Last Name cannot be empty.');
        }
    }
    const updatePassword = () => {
        const data = {email: props.account, password: password, new_password: newPassword};
        if(newPassword.length >= 6){
            updateData(`https://localhost:3000/users/${props.userId}?resource=password`, data).then(value => {
                if(value){
                    console.log('Password successfully updated.');
                    setPassword(newPassword);
                    setPasswordDisplay('none');
                }
                else{
                    alert('Something went wrong. Please try again.');
                    console.log('Password was not updated.');
                }
            })
        }
        else{
            setValidPassword(false);
        }
    }

    const verifyPassword = () => {
        const data = {email: props.account, password: password};
        createData(`https://localhost:3000/users/${props.userId}`, data).then(value => {
            if(value){
                console.log('Password was good.')
                setAuthenticated(true);
                setValidPassword(true);
                setPasswordDisplay('none');
            }
            else{
                console.log('Wrong password provided.')
                setValidPassword(false);
            }
        })
    }

    const manageAccount = e => {
        if(authenticated){
            updatePassword();
        }
        else{
            verifyPassword();
        }
        e.preventDefault();
    }


                                                                        // Retrieve Data

    const retrieveDetails = () => {
        retrieveData(`https://localhost:3000/users/${props.account}`).then(data => {
            if(data){
                setFirstName(data.first_name);
                setLastname(data.last_name);
                props.setUserId(data.id);
            }
        });
    }

    const retrieveListings = () => {
        retrieveData(`https://localhost:3000/products?sortBy=listing&acc=${props.account}`).then(data => {
            setListings(data);
        })
    }

    const retrieveBids = () => {
        retrieveData(`https://localhost:3000/products?sortBy=bid&acc=${props.account}`).then(data => {
            setBids(data);
        })
    }

    const retrievePurchases = () => {
        retrieveData(`https://localhost:3000/products?sortBy=purchase&acc=${props.account}`).then(data => {
            setPurchases(data);
        })
    }
                                                                                // HANDLE FUNCTIONS

    const handleChange = e => {
        switch(e.target.name){
            case 'password':
                if(authenticated){
                    setNewPassword(e.target.value);
                }
                else{
                    setPassword(e.target.value);
                }
                break;
            case 'first-name':
                setFirstName(e.target.value);
                break;
            case 'last-name':
                setLastname(e.target.value);
                break;
            default:
                console.log('The selected input does not exist.');
        }
    }

    const handleKeyPress = e => {
        if(e.which === 13){
            manageAccount(e);
        }
      }

    const handleDisplay  = e => {
        const passwordModal = document.getElementById('password-modal');
        if(e.target === passwordModal){
            setPasswordDisplay('none');
        }
    }

    const handleDelete = () => {
        if(authenticated){
            const bool = window.confirm('You are about to delete your account. Proceed?');
            if(bool){
                deleteAccount();
            }
        }
        else{
            setPasswordDisplay('block');
        }
    }

    const handlePassword = () => {
        setPasswordDisplay('block');
    }

    useEffect(() => {
        if(!authenticated){
            setPassword('')
        }
        setNewPassword('');
    }, [passwordDisplay])

    useEffect(() => {
        retrieveDetails();
        retrieveListings();
        retrieveBids();
        retrievePurchases();
        document.addEventListener('mousedown', handleDisplay)
    }, []);

    useEffect(() => {
        setTimeout(function authenticationTimeout() {
            setAuthenticated(false);
            setPassword('');
        }, 300000)
    }, [authenticated]);

    return (
        <div className="account-container">
            <div><h1>Your Account</h1></div>
            <div>
                <div className="accmenu-container">
                    <div><h2>Personal Details</h2></div>
                    <form>
                        {errorMessage && <div><span className="error-message">{errorMessage}</span></div>}
                        <div>
                            <span><b>First Name</b><input className="input-field" type="text" name="first-name" 
                            placeholder={firstName} value={firstName} 
                            onChange={handleChange} disabled={disabled}/></span>
                        </div>
                        <div>
                            <span><b>Last Name</b><input className="input-field" type="text" name="last-name" 
                            placeholder={lastName} value={lastName} 
                            onChange={handleChange} disabled={disabled}/></span>
                        </div>
                    <div>
                        <span><b>Email</b><input className="input-field email" type="email" name="email" 
                        value={props.account} onChange={handleChange} disabled/></span>
                    </div>
                    </form>
                    <div><button className="button" onClick={modifyDetails} disabled={disabled} 
                    style={{backgroundColor: disabled ? 'grey' : '#000'}}>Save Changes</button></div>
                    <div className="edit-container" onClick={() => {setDisabled(false)}}><span><i class="fa fa-pencil"></i>Edit</span></div>
                </div>

                <div className="accmenu-container">
                    <div><h2>Listings</h2></div>
                    <div>{<ProductList products={listings}/>}</div>
                </div>

                <div className="accmenu-container">
                    <div><h2>Purchases</h2></div>
                    <div> <ProductList products={purchases}/></div>
                </div>

                <div className="accmenu-container">
                    <div><h2>Bids</h2></div>
                   <div><ProductList products={bids}/></div>
                </div>

                <div className="accmenu-container">
                    <div><h2>Manage Account</h2></div>
                    <div>
                        <span><b>Change Password</b></span>
                        <p>Once you change your current password, you will not be able to use it again.</p>
                        <div><button className="button" onClick={handlePassword}>Change Password</button></div>
                    </div>
                    <hr></hr>
                    <div>
                        <span><b>Delete Account</b></span>
                        <p>If you delete your account, you will not be able to recover it.</p>
                        <div onClick={handleDelete}><button className="button">
                            Delete Account</button></div>
                    </div>
                </div>
                <div><button className="sign-out button" onClick={signOut}>Sign Out</button></div>



                {/*PASSWORD MODAL CONTAINER */}

                <div id="password-modal" style={{display: passwordDisplay}}>
                    <div class="password-container">
                        <form onSubmit={manageAccount}>
                            <div className="input-container">
                                <h2>Enter {authenticated ? 'new' : 'your'} password</h2>
                                <div className="input-container">
                                    <input className="input-field" type={passwordType} name="password" placeholder="Password" 
                                    value={authenticated ? newPassword : password} onChange={handleChange} onKeyPress={handleKeyPress}/>
                                    <i className={`${iconType} password-toggle cursor-pointer`} onClick={togglePassword}></i>
                                </div>
                                {(!validPassword && password) && <span className="error-message">Password was entered incorrectly.</span>
                                }
                                <input type="submit" className="button" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}