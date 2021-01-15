import React from 'react';
import { Business } from '../Business/Business';

export class BusinessList extends React.Component{
    render(){
        return(
            <div>
                {this.props.businesses.map((business) => {
                    return <Business businessid={business.id} businessname={business.name} 
                    businessrating={business.rating} 
                    businessprice={business.price} businessrcount={business.review_count} 
                    businessloc={business.location.city} 
                    businesspic={business.pic} businesstitle={business.categories[0].title}/>
                })}
            </div>
        )
    }
}