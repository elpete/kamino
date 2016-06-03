import React, {Component} from 'react'

import {Link} from 'react-router'

import CareerView       from '../components/CareerView'

import careers from '../../reference/careers.json'
import specializations from '../../reference/specializations.json'
import skills from '../../reference/skills.json'

export default class CareerSelection extends Component {
    
	constructor(props) {
	    super(props)
	    this.state = {
	        selectedCareer: 'BOUNTY_HUNTER',
	        selectedSpecialization:'ASSASSIN'
	    }
	}

	_selectCareer(e) {
	    this.setState({ selectedCareer: e.target.value })
	}

	_selectSpecialization(e){
		this.setState({ selectedSpecialization: e})
		console.log(this.state.selectedSpecialization)
	}


    render() {


    	const options = Object.keys(careers).map(key => (
    	    <option value={key} key={key}>
    	        {careers[key].display_name}
    	    </option>
    	));

        return (
            <div className='well'>
                <form>
                    <div className='form-group'>
                        <label>Select a Career</label>
                        <select 
                            className='form-control'
                            onChange={this._selectCareer.bind(this)} 
                            value={this.state.selectedCareer}>
                                {options}
                        </select>
                    </div>
                </form>
                <CareerView id={this.state.selectedCareer}/>
            </div>
        )
    }
}




