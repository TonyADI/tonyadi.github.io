import React, { useState } from 'react';
import { ModalBox } from '../ModalBox/ModalBox';
import { ProductList } from '../ProductList/ProductList';
import { deleteData, retrieveSecureData } from '../../utilities/projectAPI';
import './Account.css';
export const Account = props => {
    const AccountItems = ['Orders', 'Account Settings'];
    const [log, setLog] = useState(true);
    const [details, setDetails] = useState('');
    const [listings, setListings] = useState([]);
    const data = {email: props.account};

    const signOut = () => {
        props.setSignedIn(false);
        props.setAccount('');
        window.location.replace('/');
    }

    const deleteAccount = () => {
        deleteData(window.location.href, data).then(value => {
            if(value){
                signOut();
            }
            else{
                console.log('There was an error with your request. Please try again!')
            }
        });
    }

    const retrieveDetails = () => {
        retrieveSecureData(window.location.href +'/details', data).then(data => {
            console.log(data);
            setDetails(data)});
    }

    const retrieveListings = () => {
        retrieveSecureData(window.location.href +'/listings', data).then(data => {
            console.log(data);
            setListings(data);
        })
    }

    const deleteListing = value => {
        const data = {email: props.account, id: value};
        deleteData(window.location.href +'/listings', data).then(value => {
            if(value){
                console.log('Listing deleted');
            }else{
                console.log('There was an error with your request. Please try again!')
            }
        })
    }

    // working after two clicks instead of one because id not setting, possibly when i changed from listings to productlist?
    const handleClick = value => {
        deleteListing(value);
        retrieveListings(); // or just modify listings?
    }

    return (
        <div>
            <div><h1>Your Account</h1></div>
            <div>
                <div onClick={retrieveDetails}>Account Details</div>
                {AccountItems.map(item => {return <div className="account-item">{item}</div>})}
                <div className="cursor-pointer" onClick={retrieveListings}>Listings</div>
                <div id="logout" onClick={signOut}>Sign out</div>
                <div id="deleteAccount" onClick={deleteAccount}>Delete Account</div>
                <ProductList products={listings} handleClick={handleClick} delete={true}/>
                
                
                {/*log && <Login />*/}
            </div>
        </div>
    )
}