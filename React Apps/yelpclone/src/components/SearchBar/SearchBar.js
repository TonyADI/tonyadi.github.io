import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:'', location:''}
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleAutocomplete = this.handleAutocomplete.bind(this)
    }

    handleAutocomplete(term){
        this.props.yelpAutocomplete(term);
    }

    handleTermChange(e){
        this.setState({term:e.target.value})
        this.handleAutocomplete(e.target.value) 
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
                    <div className="inline-display">
                        <span className="span-BG">Find</span>
                        <input type='text' placeholder='burgers, barbers, spas, handymen...' className="input-BG"
                        onChange={this.handleTermChange}/>
                        {!this.state.term && 
                            <div className="dropdown">
                                <div className="dropdown-item"><i class="fas fa-hamburger icon"></i>Restaurants</div>
                                <div className="dropdown-item"><i class="fas fa-truck icon"></i>Delivery</div>
                                <div className="dropdown-item"><i class="fas fa-shopping-bag icon"></i>Takeout</div>
                                <div className="dropdown-item"><i class="fas fa-calculator icon"></i>Accountants</div>
                                <div className="dropdown-item"><i class="fa fa-bath icon"></i>Plumbers</div>
                                <div className="dropdown-item"><i class="fa fa-wrench icon"></i>Auto Repair</div>
                            </div>
                        }
                        <div className="dropdown">
                            {(this.props.termsList && this.state.term) ? this.props.termsList.map((text)=>{
                                return <div className="dropdown-item">{text.term}</div>
                            }) : null}
                        </div>
                    </div>
                    <div className="inline-display">
                        <span className="span-BG span-BG2">Near</span>
                        <input type='text' placeholder='address, city...' className="input-BG" 
                        onChange={this.handleLocationChange}/>
                        <div className="dropdown dropdown-location">
                            <div className="dropdown-item"><i class="fa fa-location-arrow icon"></i>Current Location</div>
                        </div>
                    </div>
        <button type="submit" className="submit-BG"><i class="fa fa-search search"></i></button>
                    </label>
                </form>
            </div>
        )
    }
}