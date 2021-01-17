import React from 'react';
import { Business } from '../Business/Business';

export class BusinessList extends React.Component{
    render(){
        return(
            <div>
                {this.props.businesses ? this.props.businesses.map((business) => {
                    return <Business businessid={business.id} businessname={business.name} 
                    businessrating={business.rating} 
                    businessprice={business.price} businessrcount={business.reviewCount} 
                    businessloc={business.city} 
                    businesspic={business.imageSrc} businesstitle={business.category} businessurl={business.url}/>
                }) : <div>Sorry we could not find anything that matches your request. Try a different search query.</div>}
            </div>
        )
    }
}