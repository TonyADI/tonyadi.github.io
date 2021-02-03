import React from 'react';
import './Conditions.css'
const conditions = (props) => {
    return(
        <div className="wrapper">
            {props.error && <small className="small">Please enter a valid city.</small>}
            {props.loading && <div className="loading">Loading...</div>}
            {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} 
                   degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
    )
}

export default conditions;