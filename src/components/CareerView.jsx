import React, {Component} from 'react'

import {Link} from 'react-router'

import SpecializationView       from '../components/SpecializationView'

import careers from '../../reference/careers.json'
import specializations from '../../reference/specializations.json'
import skills from '../../reference/skills.json'

export default class CareerView extends Component {

	constructor(props) {
	    super(props)
	}

    render() {

    	const careerId = this.props.id

    	const careerName = careers[careerId].display_name

    	const careerSkills = careers[careerId].career_skills.map(key => (
            <li key={key}>{skills[key].display_name}    <sup><em>[{skills[key].characteristic}]</em></sup></li>
        ));

        const specializationView = this.props.selectedSpecialization
            ? <SpecializationView specializationId={this.props.selectedSpecialization} />
            : null;

        const careerSpecializations = careers[careerId].specializations.map(key=> (
        	<li 
        		key={key}
        		onClick={this.props.onSpecializationChange.bind(null, key)} 
        		className='btn btn-info'>{specializations[key].display_name}
        	</li>
        ));

        return (
        	<div>
	            <div className='well'>
	                <label> {careerName}s start with the following Career Skills: </label>
	                <ul>
	                	{careerSkills}
	                </ul>
	                <p><b>And a Force Rating of: </b>{careers[careerId].force_rating}</p>
	            </div>
	            <div className='well'>
	            	<div>
	            		<label>{careerName}s can choose from the following specializations:</label>
            			<ul className='nav nav-pills'>
            				{careerSpecializations}
            			</ul>
                	</div>
            		{specializationView}
	            </div>
            </div>

        )
    }
}