import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:'', location:'', sortBy:''}
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
    }

    handleTermChange(e){
        this.setState({term:e.target.value})
    }

    handleLocationChange(e){
        this.setState({location: e.target.value})
    }

    handleSearch(e){
        this.props.yelpSearch(this.state.term, this.state.location);
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSearch}>
                    <label className="label-BG">
                    <span className="span-BG">Find</span>
                    <input type='text' placeholder='burgers, barbers, spas, handymen...' className="input-BG"
                    onChange={this.handleTermChange}/>
                    <span className="span-BG span-BG2">Near</span>
                    <input type='text' placeholder='address, city...' className="input-BG" 
                    onChange={this.handleLocationChange}/>
                    <input type="submit" value="Submit" className="submit-BG"/>
                    </label>
                </form>
            </div>
        )
    }
}