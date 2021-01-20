import React from 'react';
import { locationIQ } from '../../utilities/LocationIQ'
import './SearchBar.css'


export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:'', location:'', termDisplay:'', locationDisplay: ''}
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleTermClick= this.handleTermClick.bind(this)
        this.handleLocationClick = this.handleLocationClick.bind(this)
        this.reverseGeocoding = this.reverseGeocoding.bind(this)
    }

    handleTermChange(e){
        this.setState({term:e.target.value, termDisplay:'block'})
        this.props.yelpAutocomplete(e.target.value);
    }

    handleLocationChange(e){
        this.setState({location: e.target.value})
    }

    handleSearch(e){
        this.props.yelpSearch(this.state.term, this.state.location);
        e.preventDefault();
    }

    handleTermClick(e){
        this.setState({term: e.target.value, termDisplay: 'none'})
    }

    handleLocationClick(){
        this.reverseGeocoding(this.props.longitude, this.props.latitude)
    }

    reverseGeocoding(long, lat){
        if(long && lat){
            locationIQ.reverse(long, lat).then(city => {this.setState({location: city})}, (error)=>{alert(error)});
        }
        else{
            alert("You need to grant acess to your location!")
        }
    }
    // Dropdown menu needs work. 
    render(){
        return(
            <div>
                <form onSubmit={this.handleSearch}>
                    <label className="label-BG">
                    <div className="inline-display">
                        <span className="span-BG">Find</span>
                        <input type='text' placeholder='burgers, barbers, spas, handymen...' className="input-BG"
                        onChange={this.handleTermChange} value={this.state.term}/>
                        {!this.state.term && 
                            <div className="dropdown" style={{display: this.state.termDisplay}}>
                                <button className="dropdown-item" onClick={this.handleTermClick} value="Restaurants">
                                    <i className="fas fa-hamburger icon"></i>Restaurants</button>
                                <button className="dropdown-item" onClick={this.handleTermClick} value="Delivery">
                                    <i className="fas fa-truck icon"></i>Delivery</button>
                                <button className="dropdown-item" onClick={this.handleTermClick} value="Takeout">
                                    <i className="fas fa-shopping-bag icon"></i>Takeout</button>
                                <button className="dropdown-item" onClick={this.handleTermClick} value="Accountants">
                                    <i className="fas fa-calculator icon"></i>Accountants</button>
                                <button className="dropdown-item" onClick={this.handleTermClick} value="Plumbers">
                                    <i className="fa fa-bath icon"></i>Plumbers</button>
                                <button className="dropdown-item" onClick={this.handleTermClick} value="Auto Repair">
                                    <i className="fa fa-wrench icon"></i>Auto Repair</button>
                            </div>
                        }
                        <div className="dropdown" style={{display: this.state.termDisplay}}>
                            {(this.props.termsList && this.state.term) ? this.props.termsList.map((text)=>{
                                return <button className="dropdown-item" onClick={this.handleTermClick}
                                value={text.term}
                                >{text.term}</button>
                            }) : null}
                        </div>
                    </div>
                    <div className="inline-display">
                        <span className="span-BG span-BG2">Near</span>
                        <input type='text' value={this.state.location} placeholder='address, city...' className="input-BG" 
                        onChange={this.handleLocationChange}/>
                        <div className="dropdown dropdown-location" style={{display: this.state.locationDisplay}}>
                            <div className="dropdown-item dropdown-term" onClick={this.handleLocationClick}>
                                <i className="fa fa-location-arrow icon">
                                </i>Current Location</div>
                        </div>
                    </div>
        <button type="submit" className="submit-BG"><i className="fa fa-search search"></i></button>
                    </label>
                </form>
            </div>
        )
    }
}