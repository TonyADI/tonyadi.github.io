import React, { useEffect } from 'react';
import './Display.css'
export const Display = props => {
    
    useEffect(()=>{return props.weatherObj.cod === 200 ? props.setCondition(props.weatherObj.weather[0].main)
        : null}, [props.weatherObj]
    )

    return(
        <div className="container">
            <div className="top-display">
            {props.weatherObj.cod === 200 ?
            <div>
                <div><h1>{props.weatherObj.main.temp}</h1></div>
                <div>{props.weatherObj.weather[0].main}</div>
                <div>{props.weatherObj.name}</div>
            </div>
                : null}
            </div>
            <div className="bottom-display">

            </div>
       </div>
    )
}
