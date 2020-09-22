import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';

export class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses ? 
                this.props.businesses.map(business => 
                { return <Business key={business.id} business={business}/>}) : 
                <div>No businesses found. Try different search parameters</div>}
            </div>

        );
      
    }
}
