import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label className="label-BG">
                    <span className="span-BG">Find</span>
                    <input type='text' placeholder='burgers, barbers, spas, handymen...' className="input-BG"/>
                    <span className="span-BG span-BG2">Near</span>
                    <input type='text' placeholder='address, city...' className="input-BG"/>
                    <input type="submit" value="Submit" className="submit-BG"/>
                    </label>
                </form>
            </div>
        )
    }
}