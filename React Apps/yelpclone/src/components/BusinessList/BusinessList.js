import React from 'react';
import { Business } from '../Business/Business';

export class BusinessList extends React.Component{
    render(){
        return(
            <div>
                {this.props.businesses.map((business) => {
                    return <Business businessid={business.id} businessname={business.name} 
                    businessrating={business.rating} 
                    businessprice={business.price} businessrcount={business.reviewCount} 
                    businessloc={business.city} 
                    businesspic={business.imageSrc} businesstitle={business.category}/>
                })}
            </div>
        )
    }
}