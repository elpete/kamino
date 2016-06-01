import React, {Component} from 'react'

import {Link} from 'react-router'

import careers from '../../reference/careers.json'
import specializations from '../../reference/specializations.json'
import skills from '../../reference/skills.json'

export default class CareerSelection extends Component {
    
	constructor(props) {
	    super(props)
	    this.state = {
	        selectedCareer: 'BOUNTY_HUNTER'
	    }
	}

	_selectCareer(e) {
	    this.setState({ selectedCareer: e.target.value })
	}

    render() {
    	const thisCareer = careers[this.state.selectedCareer]

    	const options = Object.keys(careers).map(key => (
    	    <option value={key} key={key}>
    	        {careers[key].display_name}
    	    </option>
    	));

    	const careerSkills = thisCareer.career_skills.map(key => (
    		<li key={key}>{skills[key].display_name}	<sup><em>[{skills[key].characteristic}]</em></sup></li>
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
        			<div className='well'>
        				<label> A {thisCareer.display_name} starts with the following Career Skills: </label>
        				<ul>
							{careerSkills}
						</ul>
						<p><b>And a Force Rating of: </b>{thisCareer.force_rating}</p>
        			</div>
        		</form>
        	</div>
        )
    }
}